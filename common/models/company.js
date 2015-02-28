module.exports = function(Company) {
  Company.observe('before save', function(ctx, next) {
    if (ctx.instance) {
      Company.findOne({
          where: { name: ctx.instance.name }
        },
        function(err, company) {
          if (err || company) {
            next(new Error('Company already exists.'));
          } else {
            next();
          }
        }
      );
    } else {
      next();
    }
  });

  Company.afterRemote(
    '**',
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
