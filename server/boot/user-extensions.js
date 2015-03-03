module.exports = function(app) {
  var User = app.models.User;
  User.observe(
    'before save',
    function(ctx, next) {
      if (ctx.instance) {
        //var regex = /(.*)@(.*)/;
        var regex = /([^\+]+)\+?(.*)@(.*)/;
        var results = ctx.instance.email.match(regex);

        // make sure they are using an RIT email, and not a subdomain.
        if (results[3] !== 'rit.edu') {
          next(new Error('Use your RIT email.'));
          return;
        }


        // look for emails that are associated with attempted registration
        User.findOne({
          where: {
            or: [
              {
                email: {
                  like: results[1] + '@%'
                }
              },

              {
                email: {
                  like: results[1] + '+%'
                }
              }
            ]
          }
        }, function(err, data) {

          // if a match is found, tell them it exists
          if(data) {
            next(new Error('Email already exists.'));
            return;
          }

          //if all ok
          next();

        });







      }
    }
  );
};
