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
        var fullPath = baseurl + mTest.path;
        // populate path variables (ex: {id}) if there are any
        if(mTest.pathVars) {
          fullPath = populatePathVars(fullPath, mTest.pathVars);
        }
        describe(baseurl + mTest.path, function () {
          // test POST requests
          if(mTest.verbs.POST) {
            testPost(mTest.verbs.POST, fullPath);
          }
          // test GET requests
          if(mTest.verbs.GET) {
            testGet(mTest.verbs.GET, fullPath);
          }
          // test PUT requests
          if(mTest.verbs.PUT) {
            testPut(mTest.verbs.PUT, fullPath);
          }
          // test HEAD requests
          if(mTest.verbs.HEAD) {
            testHead(mTest.verbs.HEAD, fullPath);
          }
          // test DELETE requests
          if(mTest.verbs.DELETE) {
            testDelete(mTest.verbs.DELETE, fullPath);
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

/**
 * Test with a "PUT" request to the specified endpoint
 * @param putInfo the "PUT" property of the defined test
 * @param path the endpoint being tested
 */
function testPut(putInfo, path) {
  describe('PUT methods', function() {
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

  });
}

/**
 * Test with a "HEAD" request to the specified endpoint
 * @param headInfo the "HEAD" property of the defined test
 * @param path the endpoint being tested
 */
function testHead(headInfo, path) {
  describe('HEAD methods', function() {
    // perform the test for each authentication type
    for (var aType in authTypes) {
      // closure for iterator scope control
      (function (authType) {
        if (headInfo.auth[authType]) {
          it(authTypes[authType].name + ' should be allowed', function (done) {
            api.head(path)
              .set('Authorization', authTypes[authType].access_token)
              .expect(200, done);
          });
        } else {
          it(authTypes[authType].name + ' should not be allowed', function (done) {
            api.head(path)
              .set('Authorization', authTypes[authType].access_token)
              .expect(401, done);
          });
        }
      })(aType);
    }

  });
}

/**
 * Test with a "DELETE" request to the specified endpoint
 * @param deleteInfo the "DELETE" property of the defined test
 * @param path the endpoint being tested
 */
function testDelete(deleteInfo, path) {
  describe('DELETE methods', function() {
    // perform the test for each authentication type
    for (var aType in authTypes) {
      // closure for iterator scope control
      (function (authType) {
        if (deleteInfo.auth[authType]) {
          it(authTypes[authType].name + ' should be allowed', function (done) {
            api.head(path)
              .set('Authorization', authTypes[authType].access_token)
              .expect(204, done);
          });
        } else {
          it(authTypes[authType].name + ' should not be allowed', function (done) {
            api.head(path)
              .set('Authorization', authTypes[authType].access_token)
              .expect(401, done);
          });
        }
      })(aType);
    }

  });
}

/***********************
 * Utility Functions
 ***********************/

/**
 * Complete the URL path by filling in inline variables
 * Ex: "/Cities/{id}" would become "/Cities/1"
 * @param path the endpoint path that needs variables filled
 * @param pathVars object of variable names -> values that will be used to fill the path
 * @returns {String} the constructed URL with variables filled
 */
function populatePathVars(path, pathVars) {
  for (var v in pathVars) {
    if(pathVars.hasOwnProperty(v)) {
      path = path.replace('{' + v + '}', pathVars[v]);
    }
  }
  return path;
}
