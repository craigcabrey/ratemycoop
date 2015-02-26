module.exports = function(City) {
  City.search = function(query, callback) {
    // TODO: sanitize query
    City.find(
      {
        where: {
          name: {
            like: '%' + query + '%'
          }
        },
        include: [
          'region'
        ]
      }, function (err, results) {
        callback(null, results);
      }
    );
  };

  City.remoteMethod(
    'search',
    {
      http: { verb: 'get' },
      accepts: { arg: 'query', type: 'string' },
      returns: { arg: 'results', type: [ 'object' ] }
    }
  );
};
