/**
 * Created by jcdesimp on 3/18/15.
 */

var should = require('chai').should(),
  supertest = require('supertest'),
  api = supertest('http://localhost:3000');

describe('Static data', function() {

  it('respond with json, 200', function(done) {
    api.get('/api/v1/Cities')
      .expect('Content-Type', /json/)
      .expect(200, done)
  });


});
