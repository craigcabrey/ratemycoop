module.exports = function(Review) {
  Review.afterRemote(
    'access',
    function(ctx, instance, next) {
      console.log(instance.likes());
      ctx.Model.include = function(subItems, subInclude, callback) { callback(); };
      next();
    }
  );
};
