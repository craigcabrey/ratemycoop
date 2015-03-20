/**
 * Created by jcdesimp on 3/18/15.
 */

var should = require('chai').should(),
  supertest = require('supertest'),
  api = supertest('http://localhost:3000');

describe('API Authentication', function() {
  describe('Unauthenticated users', function() {

    describe('should not be able to add cities', function() {
      it('via post', function(done) {
        api.post('/api/v1/Cities')
          .send({
            "name": "someRandomCity",
            "regionId": 2
          })
          .expect(400, done);
      });

      it('via put', function(done) {
        api.put('/api/v1/Cities')
          .send({
            "name": "someRandomCity",
            "regionId": 2
          })
          .expect(401, done);
      });
    });

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
});


