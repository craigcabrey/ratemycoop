module.exports = function(Review) {
  Review.afterRemote(
    '**',
    function(ctx, instance, next) {
      console.log(instance);
      next();
    }
  );
};
