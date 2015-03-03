var loopback = require('loopback');
var morgan = require('morgan');
var boot = require('loopback-boot');

var app = module.exports = loopback();

app.middleware('initial', morgan('short'));

app.use(loopback.context());
app.use(loopback.token());
app.use(function (req, res, next) {
  if (!req.accessToken) return next();
  app.models.User.findById(req.accessToken.userId, function(err, user) {
    if (err) return next(err);
    if (!user) return next(new Error('No user with this access token was found.'));
    res.locals.currentUser = user;
    var loopbackContext = loopback.getCurrentContext();
    if (loopbackContext) loopbackContext.set('currentUser', user);
    next();
  });
});

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname);

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    console.log('Web server listening at: %s', app.get('url'));
  });
};

// start the server if `$ node server.js`
if (require.main === module) {
  app.start();
}
