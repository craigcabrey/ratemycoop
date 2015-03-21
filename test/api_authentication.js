/**
 * Created by jcdesimp on 3/18/15.
 *
 * These tests expect the API server to be running on "http://localhost:3000"
 * and that API Authentication are enabled.
 */

/**
 * set up a run of the local server with authentication enabled
 */
process.env.AUTH_ENABLED = "true";
process.env.MODE_ENV = "test";

var should = require('chai').should(),
  loopback = require('loopback'),
  supertest = require('supertest'),
  app = require('../server/server'),
  api = supertest(app);




/**
 * wait for the app to be 'ready' before starting the tests
 */
before(function(done) {

  // set a higher timeout in case server is slow to start up
  this.timeout(10000);

  // once the app is done starting up, tests can begin.
  if (app.importing) {
    app.on('import done', done);
  } else {
    done();
  }
});

/***********************
 * Here are the tests
 ***********************/
describe('API Authentication', function () {
  describe('Unauthenticated users', function () {
    it('should not be able to create a review', function (done) {
      api.post('/api/v1/Companies/3/reviews')
        .send({
          "anonymous": false,
          "returnOffer": false,
          "recommend": false,
          "description": "",
          "overallRating": 0,
          "cultureRating": 0,
          "difficultyRating": 0,
          "pay": 0,
          "jobTitle": "",
          "payTypeId": 0
        })
        .expect(401, done);
    });

    describe('should not be able to add cities', function () {
      it('via post', function (done) {
        api.post('/api/v1/Cities')
          .send({
            "name": "someRandomCity",
            "regionId": 2
          })
          .expect(401, done);
      });

      it('via put', function (done) {
        api.put('/api/v1/Cities')
          .send({
            "name": "someRandomCity",
            "regionId": 2
          })
          .expect(401, done);
      });
    }); // end adding cities

    describe('should not be able to create a company', function () {
      it('via post', function (done) {
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

    }); // end creating companies
  }); // end Unauthenticated users

  describe('Authenticated users', function () {

    // sign in and obtain an access token
    var access_token = '';

    before('signing in', function (done) {
      api.post('/api/v1/Users/login')
        .send({
          email: 'test@rit.edu',
          password: 'potato'
        })
        .end(function (err, res) {
          if (!err) {
            access_token = res.body.id;
          } else {
            throw err;
          }
          done();
        });
    });

    it('should be able to create a review', function (done) {

      api.post('/api/v1/Companies/3/reviews')
        .set('Authorization', access_token)
        .send({
          "anonymous": false,
          "returnOffer": false,
          "recommend": false,
          "description": "",
          "overallRating": 0,
          "cultureRating": 0,
          "difficultyRating": 0,
          "pay": 0,
          "jobTitle": "",
          "payTypeId": 0
        })
        .expect(200, done);


    });

    describe('should not be able to add cities', function () {
      it('via post', function (done) {
        api.post('/api/v1/Cities')
          .set('Authorization', access_token)
          .send({
            "name": "someRandomCity",
            "regionId": 2
          })
          .expect(401, done);
      });

      it('via put', function (done) {
        api.put('/api/v1/Cities')
          .send({
            "name": "someRandomCity",
            "regionId": 2
          })
          .expect(401, done);
      });
    }); // end adding cities

    it('should not be able to create a company', function () {
      it('via post', function (done) {
        api.post('/api/v1/Companies')
          .auth('test@rit.edu', 'potato')
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

    }); // end creating companies
  }); // end authenticated users
}); // end API authentication


