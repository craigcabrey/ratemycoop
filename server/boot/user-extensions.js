var config = require('../../server/config.json');
var path = require('path');

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
            if (data.id !== ctx.instance.id) {
              next(new Error('Email already exists.'));
              return;
            }
          }

          //if all ok
          next();

        });







      }
    }
  );

  // Check for users without verification token and send one
  setTimeout(function(){
  User.find(null,
  function(err, users) {
    if (users.length > 0) {
      users.forEach(function(user) {
        if (user.verificationToken === undefined) {
          var options = {
            type: 'email',
            from: config.email,
            subject: config.verifySubject,
            port: '80',
            template: path.resolve(__dirname, '../../server/templates/existingVerify.ejs')
          };
          user.verify(options, function(err, response) {
            if (err) {
              return;
            }
          });
        }
      });
    }
  });}, 2000);

  // Send verification email
  User.afterRemote('create',
    function(ctx, user, next) {
      if (user) {
        var options = {
          type: 'email',
          from: config.email,
          subject: config.verifySubject,
          port: '80',
          template: path.resolve(__dirname, '../../server/templates/verify.ejs')
        };
        user.verify(options, function(err, response) {
          if (err) {
            next(err);
            return;
          }
          next();
        });
      }
    }
  );
};
