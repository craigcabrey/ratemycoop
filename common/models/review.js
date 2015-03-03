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
    if(newctx !== null){
      var currentUser = newctx && newctx.get('currentUser');
      ctx.instance.userId = currentUser.id;
    }
    next();
  });
};
