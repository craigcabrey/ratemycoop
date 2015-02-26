module.exports = function(Company) {
  Company.afterRemote(
    '**',
    function(ctx, instance, next) {
      if (instance.reviews) {
        instance.reviews().forEach(
          function(review) {
            if (review.anonymous) {
              review.userId = null;
            }
          }
        );
      }

      next();
    }
  );
};
