module.exports = function(Company) {
  /**
   * Method to recalculate company attributes when a new review has been posted.
   */
  Company.prototype.recalculate = function() {
    var self = this;

    var overallRating = 0;
    var overallRatingCount = 0;
    var cultureRating = 0;
    var cultureRatingCount = 0;
    var difficultyRating = 0;
    var difficultyRatingCount = 0;

    self.reviews(null, function(err, reviews){
      reviews.forEach(
        function(review) {
          if ('overallRating' in review && review.overallRating != 0) {
            overallRating += review.overallRating;
            overallRatingCount++;
          }

          if ('cultureRating' in review && review.cultureRating != 0) {
            cultureRating += review.cultureRating;
            cultureRatingCount++;
          }

          if ('difficultyRating' in review && review.difficultyRating != 0) {
            difficultyRating += review.difficultyRating;
            difficultyRatingCount++;
          }

          if (review.pay < self.minPay) {
            self.minPay = review.pay;
          }

          if (review.pay > self.maxPay) {
            self.maxPay = review.pay;
          }
        }
      );

      if (overallRatingCount == 0) {
        overallRatingCount = 1;
      }

      if (cultureRatingCount == 0) {
        cultureRatingCount = 1;
      }

      if (difficultyRatingCount == 0) {
        difficultyRatingCount = 1;
      }
    
      self.overallRating = overallRating / overallRatingCount;
      self.cultureRating = cultureRating / cultureRatingCount;
      self.difficultyRating = difficultyRating / difficultyRatingCount;

      self.save();
    });
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
