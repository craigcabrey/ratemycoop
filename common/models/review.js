module.exports = function(Review) {
  Review.afterRemote(
    'access',
    function(ctx, instance, next) {
      ctx.Model.include = function(subItems, subInclude, callback) { callback(); };
      next();
    }
  );
};
