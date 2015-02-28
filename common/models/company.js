module.exports = function(Company) {
  Company.beforeCreate = function(next, modelInstance) {
    Company.findOne({
        where: { name: modelInstance.name }
      },
      function(err, instance) {
        if (err || instance) {
          next(new Error('Company already exists.'));
        } else {
          next();
        }
      }
    );
  };

  Company.afterRemote(
    '**',
    function(ctx, instance, next) {
      if (instance.reviews) {
        var reviews = instance.reviews();
        if (reviews) {
          reviews().forEach(
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
