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


/***************************
 * Types of authentication
 ***************************/

var authTypes = {
  "none": {
    "name": "Unauthenticated users",
    "access_token": ''
  },

  "unverified": {
    "name": "Unverified users",
    "access_token": ''

  },

  "verified": {
    "name": "Verified users",
    "access_token": ''
  }
};


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


// sign in and obtain access tokens;

// sign in and obtain access token for a verified user
before('signing in verified', function (done) {

  api.post('/api/v1/Users/login')
    .send({
      email: 'test@rit.edu',
      password: 'potato'
    })
    .end(function (err, res) {
      if (!err) {
        authTypes.verified.access_token = res.body.id;
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
        authTypes.unverified.access_token = res.body.id;
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
            testPut(mTest.verbs.PUT, baseurl + mTest.path);
          }
        });
      });
    });
  });
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
  describe('POST method', function() {

    // populate path variables (ex: {id}) if there are any
    if (postInfo.pathVars) {
      path = populatePathVars(path, postInfo.pathVars);
    }

    // perform the tests for each authentication type
    for (var aType in authTypes) {
      // self-executing function for scope control
      (function (authType) {
        if (postInfo.auth[authType]) {
          it(authTypes[authType].name + ' should be allowed', function (done) {
            api.post(path)
              .set('Authorization', authTypes[authType].access_token)
              .send(postInfo.data)
              .expect(200, done);
          });
        } else {
          it(authTypes[authType].name + ' should not be allowed', function (done) {
            api.post(path)
              .set('Authorization', authTypes[authType].access_token)
              .send(postInfo.data)
              .expect(401, done);
          });
        }
      })(aType);
    }
  });
}

/**
 * Test with a "GET" request to the specified endpoint.
 * @param getInfo the "GET" property of the defined test
 * @param path the endpoint being tested
 */
function testGet(getInfo, path) {
  describe('GET method', function() {

    // populate path variables (ex: {id}) if there are any
    if (getInfo.pathVars) {
      path = populatePathVars(path, postInfo.pathVars);
    }

    // perform the tests for each authentication type
    for (var aType in authTypes) {
      // closure for iterator scope control
      (function (authType) {
        if (getInfo.auth[authType]) {
          it(authTypes[authType].name + ' should be allowed', function (done) {
            api.get(path)
              .set('Authorization', authTypes[authType].access_token)
              .expect(200, done);
          });
        } else {
          it(authTypes[authType].name + ' should not be allowed', function (done) {
            api.get(path)
              .set('Authorization', authTypes[authType].access_token)
              .expect(401, done);
          });
        }
      })(aType);
    }
  });
}

function testPut(putInfo, path) {
  describe('PUT methods', function() {

    // populate path variables (ex: {id}) if there are any
    if (putInfo.pathVars) {
      path = populatePathVars(path, postInfo.pathVars);
    }
    // perform the test for each authentication type
    for (var aType in authTypes) {
      // closure for iterator scope control
      (function (authType) {
        if (putInfo.auth[authType]) {
          it(authTypes[authType].name + ' should be allowed', function (done) {
            api.put(path)
              .set('Authorization', authTypes[authType].access_token)
              .send(putInfo.data)
              .expect(200, done);
          });
        } else {
          it(authTypes[authType].name + ' should not be allowed', function (done) {
            api.put(path)
              .set('Authorization', authTypes[authType].access_token)
              .send(putInfo.data)
              .expect(401, done);
          });
        }
      })(aType);
    }

  })
}


/***********************
 * Utility Functions
 ***********************/

function populatePathVars(path, pathVars) {
  for (var v in pathVars) {
    path = path.replace('{' + v + '}', pathVars[b]);
  }
  return path;
}
