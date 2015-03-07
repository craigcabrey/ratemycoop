module.exports = function() {
  return function(err, req, res, next) {
    console.log(err);
    var error = {
      error: 404,
      message: 'not found'
    };

    res.setHeader('Content-Type', 'application/json');
    res.send(error);
  }
};
