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

  var buildVerifyEmail = function(template) {
    var options = {
      type: 'email',
      from: config.email,
      subject: config.verifySubject,
      port: '443',
      host: 'ratemycoop.io',
      protocol: 'https',
      template: path.resolve(__dirname, '../../server/templates/' + template)
    };
    return options;
  };

  // Check for users without verification token and send one
  setTimeout(function(){
  User.find(null,
  function(err, users) {
    if (users.length > 0) {
      users.forEach(function(user) {
        if (user.verificationToken === undefined) {
          user.verify(buildVerifyEmail('existingVerify.ejs'), function(err, response) {
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
        user.verify(buildVerifyEmail('verify.ejs'), function(err, response) {
          if (err) {
            next(err);
            return;
          }
          next();
        });
      }
    }
  );

  // Function to resend verification email to the user
  User.prototype.resendEmail = function(cb) {
    this.verify(buildVerifyEmail('verify.ejs'), function(err, response) {
      if (err) {
        cb(err);
        return ;
      }
      cb(null, "sent", true);
    });
  };

  // Add remote method to resend verification email
  User.remoteMethod(
    'resendEmail',
    {
      returns: [{arg: "sent", type: "boolean"}],
      isStatic: false,
      http: { verb: 'get', path: '/resendEmail' },
      description: "Resend the verification email for the current user"
    }
  );
};
