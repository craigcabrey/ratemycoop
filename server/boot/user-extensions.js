module.exports = function(app) {
  var User = app.models.User;
  User.observe(
    'before save',
    function(ctx, next) {
      if (ctx.instance) {
        var regex = /(.*)@(.*)/;
        var results = ctx.instance.email.match(regex);
        if (results[2] !== 'rit.edu') {
          next(new Error('Non-RIT domain.'));
        } else {
          next();
        }
      }
    }
  );
};
