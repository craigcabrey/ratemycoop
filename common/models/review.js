module.exports = function(Review) {
  Review.afterRemote(
    'access',
    function(ctx, instance, next) {
      console.log(instance.likes());
      ctx.Model.include = function(subItems, subInclude, callback) { callback(); };
      next();
    }
  );

  Review.observe('before save', function(ctx, next) {
    var loopback = require('loopback');
    var newctx = loopback.getCurrentContext();
    // Force userId to be that of the logged in user
    if(newctx !== null){
      var currentUser = newctx && newctx.get('currentUser');
      if(currentUser !== undefined){
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
          function(err, review) {
            if(review) {
              var error = new Error('You\'ve already reviewed this company in the past three months.');
              error.status = 403;
              next(error);
            }
          }
        );
      }
    }
    next();
  });
};
