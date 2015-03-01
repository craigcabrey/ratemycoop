module.exports = function(Company) {
  /**
   * Method to recalculate company attributes when a new review has been posted.
   */
  Company.prototype.recalculate = function() {
    var self = this;

    var overallRating = 0;
    var cultureRating = 0;
    var difficultyRating = 0;

    var reviews = self.reviews();
    reviews.forEach(
      function(review) {
        if ('overallRating' in review) {
          overallRating += review.overallRating;
        }

        if ('cultureRating' in review) {
          cultureRating += review.cultureRating;
        }

        if ('difficultyRating' in review) {
          difficultyRating += review.difficultyRating;
        }

        if (review.pay < self.minPay) {
          self.minPay = review.pay;
        }

        if (review.pay > self.maxPay) {
          self.maxPay = review.pay;
        }
      }
    );

    self.overallRating = overallRating / reviews.length;
    self.cultureRating = cultureRating / reviews.length;
    self.difficultyRating = difficultyRating / reviews.length;

    self.save();
  };

  /**
   * Before save operation hook that searches for an existing company
   * of the same name in the data store. If found, return an error.
   */
  Company.observe('before save', function(ctx, next) {
    next();
  });

  /**
   * Remote method hook
   */
  Company.afterRemote(
    '*.__create__reviews',
    function(ctx, instance, next) {
      Company.findOne(
        {
          where: {
            id: instance.companyId
          },
          include: "reviews"
        },
        function(err, company) {
          company.recalculate();
        }
      );

      next();
    }
  );

  /**
   *
   */
  Company.afterRemote(
    '*.__get__reviews',
    function(ctx, instance, next) {
      if (instance.reviews) {
        var reviews = instance.reviews();
        if (reviews) {
          reviews.forEach(
            function(review) {
              if (review.anonymous) {
                review.userId = null;
              }
            }
          );
        }
      }

      next();
    }
  );
};
