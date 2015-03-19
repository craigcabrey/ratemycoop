/**
 * Created by jcdesimp on 3/18/15.
 */

var should = require('chai').should(),
  supertest = require('supertest'),
  api = supertest('http://localhost:3000');

describe('Authentication for protected endpoints', function() {

  it('should not be able to create a company', function(done) {
    api.post('/api/v1/Companies')
      .send({
        "name": "test",
        "url": "http://company.whatevs",
        "description": "some company",
        "minPay": 0,
        "maxPay": 0,
        "verified": false
      })
      .expect(401, done);
  });


});
