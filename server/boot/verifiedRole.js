module.exports = function(app) {
  var Role = app.models.Role;
  Role.registerResolver('verified', function(role, context, cb) {
    function reject(err) {
      if(err) {
        return cb(err);
      }
      cb(null, false);
    }
    var userId = context.accessToken.userId;
    if (!userId) {
      return reject(); // do not allow anonymous users
    }
    // check if userId has a verified email
    app.models.User.findById(userId, function(err, user) {
      if(err || !user) {
        reject(err);
      }
      cb(null, user.emailVerified);
    });
  });
};
