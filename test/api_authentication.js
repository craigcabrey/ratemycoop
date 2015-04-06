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


var
  should = require('chai').should(),
  loopback = require('loopback'),
  supertest = require('supertest'),
  app = require('../server/server'),
  api = supertest(app);



/*****************************************************************
 * 'Before' actions that need to complete before testing begins
 *****************************************************************/


// wait for the app to be 'ready' before starting the tests
before(function (done) {

  // set a higher timeout in case server is slow to start up
  this.timeout(10000);

  // once the app is done starting up, tests can begin.
  if (app.importing) {
    app.on('import done', done);
  } else {
    done();
  }
});


// sign in and obtain access token
var verified_access_token = '';
var unverified_access_token = '';

// sign in and obtain access token for a verified user
before('signing in verified', function (done) {

  api.post('/api/v1/Users/login')
    .send({
      email: 'test@rit.edu',
      password: 'potato'
    })
    .end(function (err, res) {
      if (!err) {
        verified_access_token = res.body.id;
      } else {
        throw err;
      }
      done();
    });
});

// sign in and obtain access token for an unverified user
before('signing in unverified', function (done) {
  api.post('/api/v1/Users/login')
    .send({
      email: 'pasta@rit.edu',
      password: 'pasta'
    })
    .end(function (err, res) {
      if (!err) {
        unverified_access_token = res.body.id;
      } else {
        throw err;
      }
      done();
    });
});


/********************************
 * Start the API endpoint tests
 ********************************/
describe('API Authentication', function () {

  // basic tests from apitest.json
  var baseTests = require('./apitest.json');

  var baseurl = baseTests.baseURL;
  baseTests.models.forEach(function (model) {
    describe('endpoints for model ' + model.name, function () {
      model.tests.forEach(function (mTest) {
        describe(baseurl + mTest.path, function () {

          if (mTest.verbs.POST) {
            testPost(mTest.verbs.POST, baseurl + mTest.path);
          }

          if (mTest.verbs.GET) {
            testGet(mTest.verbs.GET, baseurl + mTest.path);
          }

          if (mTest.verbs.PUT) {

          }


        });
      });
    });
  });


//  describe('Unauthenticated users', function () {
//    it('should not be able to create a review', function (done) {
//      api.post('/api/v1/Companies/3/reviews')
//        .send({
//          "anonymous": false,
//          "returnOffer": false,
//          "recommend": false,
//          "description": "",
//          "overallRating": 0,
//          "cultureRating": 0,
//          "difficultyRating": 0,
//          "pay": 0,
//          "jobTitle": "",
//          "payTypeId": 0
//        })
//        .expect(401, done);
//    });
//
//    describe('should not be able to add cities', function () {
//      it('via post', function (done) {
//        api.post('/api/v1/Cities')
//          .send({
//            "name": "someRandomCity",
//            "regionId": 2
//          })
//          .expect(401, done);
//      });
//
//      it('via put', function (done) {
//        api.put('/api/v1/Cities')
//          .send({
//            "name": "someRandomCity",
//            "regionId": 2
//          })
//          .expect(401, done);
//      });
//    }); // end adding cities
//
//    describe('should not be able to create a company', function () {
//      it('via post', function (done) {
//        api.post('/api/v1/Companies')
//          .send({
//            "name": "test",
//            "url": "http://company.whatevs",
//            "description": "some company",
//            "minPay": 0,
//            "maxPay": 0,
//            "verified": false
//          })
//          .expect(401, done);
//      });
//
//    }); // end creating companies
//  }); // end Unauthenticated users
//
//  describe('Authenticated users', function () {
//
//    // sign in and obtain an access token
//    var access_token = '';
//
//    before('signing in', function (done) {
//      api.post('/api/v1/Users/login')
//        .send({
//          email: 'test@rit.edu',
//          password: 'potato'
//        })
//        .end(function (err, res) {
//          if (!err) {
//            access_token = res.body.id;
//          } else {
//            throw err;
//          }
//          done();
//        });
//    });
//
//    it('should be able to create a review', function (done) {
//
//      api.post('/api/v1/Companies/3/reviews')
//        .set('Authorization', access_token)
//        .send({
//          "anonymous": false,
//          "returnOffer": false,
//          "recommend": false,
//          "description": "",
//          "overallRating": 0,
//          "cultureRating": 0,
//          "difficultyRating": 0,
//          "pay": 0,
//          "jobTitle": "",
//          "payTypeId": 0
//        })
//        .expect(200, done);
//
//
//    });
//
//    describe('should not be able to add cities', function () {
//      it('via post', function (done) {
//        api.post('/api/v1/Cities')
//          .set('Authorization', access_token)
//          .send({
//            "name": "someRandomCity",
//            "regionId": 2
//          })
//          .expect(401, done);
//      });
//
//      it('via put', function (done) {
//        api.put('/api/v1/Cities')
//          .send({
//            "name": "someRandomCity",
//            "regionId": 2
//          })
//          .expect(401, done);
//      });
//    }); // end adding cities
//
//    it('should not be able to create a company', function () {
//      it('via post', function (done) {
//        api.post('/api/v1/Companies')
//          .auth('test@rit.edu', 'potato')
//          .send({
//            "name": "test",
//            "url": "http://company.whatevs",
//            "description": "some company",
//            "minPay": 0,
//            "maxPay": 0,
//            "verified": false
//          })
//          .expect(401, done);
//      });
//
//    }); // end creating companies
//  }); // end authenticated users
}); // end API authentication

/******************************
 * HTTP Verb Test Functions
 ******************************/

/**
 * Test with a "POST" request to the specified endpoint.
 * @param postInfo the "POST" property of the defined test
 * @param path the endpoint being tested
 */
function testPost(postInfo, path) {
  describe('POST method', function () {

    // Check unauthenticated users
    if (postInfo.auth.none) {
      it('Unauthenticated users should be allowed', function(done) {
        api.post(path)
          .send(postInfo.data)
          .expect(200, done);
      });
    } else {
      it('Unauthenticated users should not be allowed', function(done) {
        api.post(path)
          .send(postInfo.data)
          .expect(401, done);
      });
    }

    // Check unverified users
    if (postInfo.auth.unverified) {
      it('Unverified users should be allowed', function(done) {
        api.post(path)
          .set('Authorization', unverified_access_token)
          .send(postInfo.data)
          .expect(200, done);
      })
    } else {
      it('Unverified users should not be allowed', function(done) {
        api.post(path)
          .set('Authorization', unverified_access_token)
          .send(postInfo.data)
          .expect(401, done);
      });
    }

    // Check verified users
    if (postInfo.auth.verified) {
      it('Verified users should be allowed', function(done) {
        api.post(path)
          .set('Authorization', verified_access_token)
          .send(postInfo.data)
          .expect(200, done);
      });
    } else {
      it('Verified users should not be allowed', function(done) {
        api.post(path)
          .set('Authorization', verified_access_token)
          .send(postInfo.data)
          .expect(401, done);
      });
    }

  });

}

function testGet(getInfo, path) {
  describe('GET method', function () {

    // Check unauthenticated users
    if (getInfo.auth.none) {
      it('Unauthenticated users should be allowed', function(done) {
        api.get(path)
          .expect(200, done);
      });
    } else {
      it('Unauthenticated users should not be allowed', function(done) {
        api.get(path)
          .expect(401, done);
      });
    }

    // Check unverified users
    if (getInfo.auth.unverified) {
      it('Unverified users should be allowed', function(done) {
        api.get(path)
          .set('Authorization', unverified_access_token)
          .expect(200, done);
      })
    } else {
      it('Unverified users should not be allowed', function(done) {
        api.get(path)
          .set('Authorization', unverified_access_token)
          .expect(401, done);
      });
    }

    // Check verified users
    if (getInfo.auth.verified) {
      it('Verified users should be allowed', function(done) {
        api.get(path)
          .set('Authorization', verified_access_token)
          .expect(200, done);
      });
    } else {
      it('Verified users should not be allowed', function(done) {
        api.get(path)
          .set('Authorization', verified_access_token)
          .expect(401, done);
      });
    }

  });

}
