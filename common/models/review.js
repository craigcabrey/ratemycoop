module.exports = function (Review) {

  var loopback = require('loopback');


  Review.afterRemote(
    'access',
    function (ctx, instance, next) {
      ctx.Model.include = function (subItems, subInclude, callback) {
        callback();
      };
      next();
    }
  );


  /**
   * Remote method to have a user like/unlike a review.
   * @param cb
   */
  Review.prototype.like = function (cb) {

    var self = this;                // reference to this review
    var app = Review.app;           // reference to the loopback app
    var ctx = loopback.getCurrentContext();
    var currUser = ctx && ctx.get('currentUser'); // get the current user

    if (currUser) {                 // see if there is a current user (is user logged in?)

      //check if user review of company exists already
      app.models.ReviewLike.findOne(
        {
          where: {
            userId: currUser.id,
            reviewId: self.id
          }
        },
        function (err, theLike) {
          if (!err) {
            if (theLike) {
              app.models.ReviewLike.destroyById(theLike.id, function (err) {
                if (!err) {
                  // review has been unliked.
                  cb(null, "Unliked", false);
                } else {
                  cb(err);
                }
              });

            } else {
              self.likes.create(
                {
                  user: currUser
                },
                function (err) {
                  if (!err) {
                    // Review has been liked
                    cb(null, "Liked", true);
                  } else {
                    cb(err);
                  }
                }
              );
            }
          } else {
            cb(err);
          }
        });

    } else {
      var error = new Error("User not authenticated");
      error.status = 403;
      cb(error);
    }
  };

  /**
   * Remote method to see if a user has liked this review
   * @param cb
   */
  Review.prototype.isLikedByUser = function (cb) {
    var self = this;          // reference to this review
    var app = Review.app;     // reference to the Loopback app
    var ctx = loopback.getCurrentContext();
    var currUser = ctx && ctx.get('currentUser');
    if (currUser) {
      app.models.ReviewLike.findOne(
        {
          where: {
            userId: currUser.id,
            reviewId: self.id
          }
        },
        function (err, theLike) {
          if (!err) {
            if (theLike) {
              // is liked
              cb(null, true);
            } else {
              // is not liked
              cb(null, false);

            }
          } else {
            cb(err);
          }
        });
    } else {
      // construct "unauthenticated" error
      var error = new Error("User not authenticated");
      error.status = 403;
      cb(error);
    }


  };

  Review.observe('before save', function (ctx, next) {
    var loopback = require('loopback');
    var newctx = loopback.getCurrentContext();
    // Force userId to be that of the logged in user
    if (newctx !== null) {
      var currentUser = newctx && newctx.get('currentUser');
      if (currentUser !== undefined) {
        ctx.instance.userId = currentUser.id;

        // Check that user has not submitted a review the the past 3 months
        ONE_MONTH = 30 * 24 * 60 * 60 * 1000;  // Month in milliseconds
        Review.findOne(
          {
            where: {
              userId: currentUser.id,
              companyId: ctx.instance.companyId,
              created: {
                gt: Date.now() - (ONE_MONTH * 3)
              }
            }
          },
          function (err, review) {
            if (review) {
              var error = new Error('You\'ve already reviewed this company in the past three months.');
              error.status = 403;
              next(error);
            } else {
              next();
            }
          }
        );
      }
    } else {
      next();
    }
  });

  //Review.like = function(id, cb) {
  //  cb(null, null);
  //};

  /**
   * Declaration for "like" remote method
   */
  Review.remoteMethod(
    'like',
    {
      returns: [{arg: "msg", type: "string"}, {arg: "isLiked", type: "boolean"}],
      isStatic: false,
      description: "Like or unlike this review as the current user."
    }
  );

  /**
   * Declaration for "isLikedByUser" endpoints
   */
  Review.remoteMethod(
    'isLikedByUser',
    {
      returns: [{arg: "isLiked", type: "boolean"}],
      isStatic: false,
      http: {
        verb: "get"
      },
      description: "Check if this review was liked by the current user."
    }
  );

};
