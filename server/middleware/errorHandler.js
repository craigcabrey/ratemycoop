module.exports = function() {
  return function(err, req, res, next) {
    var error = {
      error: 404,
      message: 'not found'
    };

    res.setHeader('Content-Type', 'application/json');
    res.send(error);
  }
};
