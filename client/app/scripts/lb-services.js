(function(window, angular, undefined) {'use strict';

var urlBase = "https://ratemycoop.io/api";
var authHeader = 'authorization';

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.User
 * @header lbServices.User
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `User` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "User",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Users/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__findById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a related item by id for accessTokens
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__destroyById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a related item by id for accessTokens
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__updateById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update a related item by id for accessTokens
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__get__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Queries accessTokens of User.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/Users/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__create__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__delete__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__count__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Counts accessTokens of User.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#create
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#upsert
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Users",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#exists
         * @methodOf lbServices.User
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/Users/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Users/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#find
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Users",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findOne
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Users/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#updateAll
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Users/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#deleteById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Users/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#count
         * @methodOf lbServices.User
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/Users/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$updateAttributes
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Users/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#login
         * @methodOf lbServices.User
         *
         * @description
         *
         * Login a user with username/email and password
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         *
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         *
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/Users/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#logout
         * @methodOf lbServices.User
         *
         * @description
         *
         * Logout a user with access token
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/Users/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#confirm
         * @methodOf lbServices.User
         *
         * @description
         *
         * Confirm a user registration with email verification token
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` -
         *
         *  - `token` – `{string}` -
         *
         *  - `redirect` – `{string}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/Users/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#resetPassword
         * @methodOf lbServices.User
         *
         * @description
         *
         * Reset password for a user with email
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/Users/reset",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/Users" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.User#updateOrCreate
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.User#update
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.User#destroyById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#removeById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#getCachedCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.User#login} or
         * {@link lbServices.User#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A User instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#isAuthenticated
         * @methodOf lbServices.User
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrentId
         * @methodOf lbServices.User
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.User#modelName
    * @propertyOf lbServices.User
    * @description
    * The name of the model represented by this $resource,
    * i.e. `User`.
    */
    R.modelName = "User";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Company
 * @header lbServices.Company
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Company` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Company",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Companies/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Company.reviews.findById() instead.
        "prototype$__findById__reviews": {
          url: urlBase + "/Companies/:id/reviews/:fk",
          method: "GET"
        },

        // INTERNAL. Use Company.reviews.destroyById() instead.
        "prototype$__destroyById__reviews": {
          url: urlBase + "/Companies/:id/reviews/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Company.reviews.updateById() instead.
        "prototype$__updateById__reviews": {
          url: urlBase + "/Companies/:id/reviews/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Company.majors.findById() instead.
        "prototype$__findById__majors": {
          url: urlBase + "/Companies/:id/majors/:fk",
          method: "GET"
        },

        // INTERNAL. Use Company.majors.destroyById() instead.
        "prototype$__destroyById__majors": {
          url: urlBase + "/Companies/:id/majors/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Company.majors.updateById() instead.
        "prototype$__updateById__majors": {
          url: urlBase + "/Companies/:id/majors/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Company.majors.link() instead.
        "prototype$__link__majors": {
          url: urlBase + "/Companies/:id/majors/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Company.majors.unlink() instead.
        "prototype$__unlink__majors": {
          url: urlBase + "/Companies/:id/majors/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Company.majors.exists() instead.
        "prototype$__exists__majors": {
          url: urlBase + "/Companies/:id/majors/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Company.perks.findById() instead.
        "prototype$__findById__perks": {
          url: urlBase + "/Companies/:id/perks/:fk",
          method: "GET"
        },

        // INTERNAL. Use Company.perks.destroyById() instead.
        "prototype$__destroyById__perks": {
          url: urlBase + "/Companies/:id/perks/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Company.perks.updateById() instead.
        "prototype$__updateById__perks": {
          url: urlBase + "/Companies/:id/perks/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Company.perks.link() instead.
        "prototype$__link__perks": {
          url: urlBase + "/Companies/:id/perks/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Company.perks.unlink() instead.
        "prototype$__unlink__perks": {
          url: urlBase + "/Companies/:id/perks/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Company.perks.exists() instead.
        "prototype$__exists__perks": {
          url: urlBase + "/Companies/:id/perks/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Company.reviews() instead.
        "prototype$__get__reviews": {
          isArray: true,
          url: urlBase + "/Companies/:id/reviews",
          method: "GET"
        },

        // INTERNAL. Use Company.reviews.create() instead.
        "prototype$__create__reviews": {
          url: urlBase + "/Companies/:id/reviews",
          method: "POST"
        },

        // INTERNAL. Use Company.reviews.destroyAll() instead.
        "prototype$__delete__reviews": {
          url: urlBase + "/Companies/:id/reviews",
          method: "DELETE"
        },

        // INTERNAL. Use Company.reviews.count() instead.
        "prototype$__count__reviews": {
          url: urlBase + "/Companies/:id/reviews/count",
          method: "GET"
        },

        // INTERNAL. Use Company.majors() instead.
        "prototype$__get__majors": {
          isArray: true,
          url: urlBase + "/Companies/:id/majors",
          method: "GET"
        },

        // INTERNAL. Use Company.majors.create() instead.
        "prototype$__create__majors": {
          url: urlBase + "/Companies/:id/majors",
          method: "POST"
        },

        // INTERNAL. Use Company.majors.destroyAll() instead.
        "prototype$__delete__majors": {
          url: urlBase + "/Companies/:id/majors",
          method: "DELETE"
        },

        // INTERNAL. Use Company.majors.count() instead.
        "prototype$__count__majors": {
          url: urlBase + "/Companies/:id/majors/count",
          method: "GET"
        },

        // INTERNAL. Use Company.perks() instead.
        "prototype$__get__perks": {
          isArray: true,
          url: urlBase + "/Companies/:id/perks",
          method: "GET"
        },

        // INTERNAL. Use Company.perks.create() instead.
        "prototype$__create__perks": {
          url: urlBase + "/Companies/:id/perks",
          method: "POST"
        },

        // INTERNAL. Use Company.perks.destroyAll() instead.
        "prototype$__delete__perks": {
          url: urlBase + "/Companies/:id/perks",
          method: "DELETE"
        },

        // INTERNAL. Use Company.perks.count() instead.
        "prototype$__count__perks": {
          url: urlBase + "/Companies/:id/perks/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Company#create
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Companies",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Company#upsert
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Companies",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Company#exists
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/Companies/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Company#findById
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Companies/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Company#find
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Companies",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Company#findOne
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Companies/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Company#updateAll
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Companies/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Company#deleteById
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Companies/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Company#count
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/Companies/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Company#prototype$updateAttributes
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Companies/:id",
          method: "PUT"
        },

        // INTERNAL. Use Major.companies.findById() instead.
        "::findById::Major::companies": {
          url: urlBase + "/Majors/:id/companies/:fk",
          method: "GET"
        },

        // INTERNAL. Use Major.companies.destroyById() instead.
        "::destroyById::Major::companies": {
          url: urlBase + "/Majors/:id/companies/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Major.companies.updateById() instead.
        "::updateById::Major::companies": {
          url: urlBase + "/Majors/:id/companies/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Major.companies.link() instead.
        "::link::Major::companies": {
          url: urlBase + "/Majors/:id/companies/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Major.companies.unlink() instead.
        "::unlink::Major::companies": {
          url: urlBase + "/Majors/:id/companies/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Major.companies.exists() instead.
        "::exists::Major::companies": {
          url: urlBase + "/Majors/:id/companies/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Major.companies() instead.
        "::get::Major::companies": {
          isArray: true,
          url: urlBase + "/Majors/:id/companies",
          method: "GET"
        },

        // INTERNAL. Use Major.companies.create() instead.
        "::create::Major::companies": {
          url: urlBase + "/Majors/:id/companies",
          method: "POST"
        },

        // INTERNAL. Use Major.companies.destroyAll() instead.
        "::delete::Major::companies": {
          url: urlBase + "/Majors/:id/companies",
          method: "DELETE"
        },

        // INTERNAL. Use Major.companies.count() instead.
        "::count::Major::companies": {
          url: urlBase + "/Majors/:id/companies/count",
          method: "GET"
        },

        // INTERNAL. Use Perk.companies.findById() instead.
        "::findById::Perk::companies": {
          url: urlBase + "/Perks/:id/companies/:fk",
          method: "GET"
        },

        // INTERNAL. Use Perk.companies.destroyById() instead.
        "::destroyById::Perk::companies": {
          url: urlBase + "/Perks/:id/companies/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Perk.companies.updateById() instead.
        "::updateById::Perk::companies": {
          url: urlBase + "/Perks/:id/companies/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Perk.companies.link() instead.
        "::link::Perk::companies": {
          url: urlBase + "/Perks/:id/companies/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Perk.companies.unlink() instead.
        "::unlink::Perk::companies": {
          url: urlBase + "/Perks/:id/companies/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Perk.companies.exists() instead.
        "::exists::Perk::companies": {
          url: urlBase + "/Perks/:id/companies/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Perk.companies() instead.
        "::get::Perk::companies": {
          isArray: true,
          url: urlBase + "/Perks/:id/companies",
          method: "GET"
        },

        // INTERNAL. Use Perk.companies.create() instead.
        "::create::Perk::companies": {
          url: urlBase + "/Perks/:id/companies",
          method: "POST"
        },

        // INTERNAL. Use Perk.companies.destroyAll() instead.
        "::delete::Perk::companies": {
          url: urlBase + "/Perks/:id/companies",
          method: "DELETE"
        },

        // INTERNAL. Use Perk.companies.count() instead.
        "::count::Perk::companies": {
          url: urlBase + "/Perks/:id/companies/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Company#updateOrCreate
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Company#update
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Company#destroyById
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Company#removeById
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Company#modelName
    * @propertyOf lbServices.Company
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Company`.
    */
    R.modelName = "Company";

    /**
     * @ngdoc object
     * @name lbServices.Company.reviews
     * @header lbServices.Company.reviews
     * @object
     * @description
     *
     * The object `Company.reviews` groups methods
     * manipulating `Review` instances related to `Company`.
     *
     * Call {@link lbServices.Company#reviews Company.reviews()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Company#reviews
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Queries reviews of Company.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Review` object.)
         * </em>
         */
        R.reviews = function() {
          var TargetResource = $injector.get("Review");
          var action = TargetResource["::get::Company::reviews"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.reviews#count
         * @methodOf lbServices.Company.reviews
         *
         * @description
         *
         * Counts reviews of Company.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.reviews.count = function() {
          var TargetResource = $injector.get("Review");
          var action = TargetResource["::count::Company::reviews"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.reviews#create
         * @methodOf lbServices.Company.reviews
         *
         * @description
         *
         * Creates a new instance in reviews of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Review` object.)
         * </em>
         */
        R.reviews.create = function() {
          var TargetResource = $injector.get("Review");
          var action = TargetResource["::create::Company::reviews"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.reviews#destroyAll
         * @methodOf lbServices.Company.reviews
         *
         * @description
         *
         * Deletes all reviews of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.reviews.destroyAll = function() {
          var TargetResource = $injector.get("Review");
          var action = TargetResource["::delete::Company::reviews"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.reviews#destroyById
         * @methodOf lbServices.Company.reviews
         *
         * @description
         *
         * Delete a related item by id for reviews
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for reviews
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.reviews.destroyById = function() {
          var TargetResource = $injector.get("Review");
          var action = TargetResource["::destroyById::Company::reviews"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.reviews#findById
         * @methodOf lbServices.Company.reviews
         *
         * @description
         *
         * Find a related item by id for reviews
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for reviews
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Review` object.)
         * </em>
         */
        R.reviews.findById = function() {
          var TargetResource = $injector.get("Review");
          var action = TargetResource["::findById::Company::reviews"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.reviews#updateById
         * @methodOf lbServices.Company.reviews
         *
         * @description
         *
         * Update a related item by id for reviews
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for reviews
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Review` object.)
         * </em>
         */
        R.reviews.updateById = function() {
          var TargetResource = $injector.get("Review");
          var action = TargetResource["::updateById::Company::reviews"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Company.majors
     * @header lbServices.Company.majors
     * @object
     * @description
     *
     * The object `Company.majors` groups methods
     * manipulating `Major` instances related to `Company`.
     *
     * Call {@link lbServices.Company#majors Company.majors()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Company#majors
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Queries majors of Company.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Major` object.)
         * </em>
         */
        R.majors = function() {
          var TargetResource = $injector.get("Major");
          var action = TargetResource["::get::Company::majors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.majors#count
         * @methodOf lbServices.Company.majors
         *
         * @description
         *
         * Counts majors of Company.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.majors.count = function() {
          var TargetResource = $injector.get("Major");
          var action = TargetResource["::count::Company::majors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.majors#create
         * @methodOf lbServices.Company.majors
         *
         * @description
         *
         * Creates a new instance in majors of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Major` object.)
         * </em>
         */
        R.majors.create = function() {
          var TargetResource = $injector.get("Major");
          var action = TargetResource["::create::Company::majors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.majors#destroyAll
         * @methodOf lbServices.Company.majors
         *
         * @description
         *
         * Deletes all majors of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.majors.destroyAll = function() {
          var TargetResource = $injector.get("Major");
          var action = TargetResource["::delete::Company::majors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.majors#destroyById
         * @methodOf lbServices.Company.majors
         *
         * @description
         *
         * Delete a related item by id for majors
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for majors
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.majors.destroyById = function() {
          var TargetResource = $injector.get("Major");
          var action = TargetResource["::destroyById::Company::majors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.majors#exists
         * @methodOf lbServices.Company.majors
         *
         * @description
         *
         * Check the existence of majors relation to an item by id
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for majors
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Major` object.)
         * </em>
         */
        R.majors.exists = function() {
          var TargetResource = $injector.get("Major");
          var action = TargetResource["::exists::Company::majors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.majors#findById
         * @methodOf lbServices.Company.majors
         *
         * @description
         *
         * Find a related item by id for majors
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for majors
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Major` object.)
         * </em>
         */
        R.majors.findById = function() {
          var TargetResource = $injector.get("Major");
          var action = TargetResource["::findById::Company::majors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.majors#link
         * @methodOf lbServices.Company.majors
         *
         * @description
         *
         * Add a related item by id for majors
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for majors
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Major` object.)
         * </em>
         */
        R.majors.link = function() {
          var TargetResource = $injector.get("Major");
          var action = TargetResource["::link::Company::majors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.majors#unlink
         * @methodOf lbServices.Company.majors
         *
         * @description
         *
         * Remove the majors relation to an item by id
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for majors
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.majors.unlink = function() {
          var TargetResource = $injector.get("Major");
          var action = TargetResource["::unlink::Company::majors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.majors#updateById
         * @methodOf lbServices.Company.majors
         *
         * @description
         *
         * Update a related item by id for majors
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for majors
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Major` object.)
         * </em>
         */
        R.majors.updateById = function() {
          var TargetResource = $injector.get("Major");
          var action = TargetResource["::updateById::Company::majors"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Company.perks
     * @header lbServices.Company.perks
     * @object
     * @description
     *
     * The object `Company.perks` groups methods
     * manipulating `Perk` instances related to `Company`.
     *
     * Call {@link lbServices.Company#perks Company.perks()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Company#perks
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Queries perks of Company.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Perk` object.)
         * </em>
         */
        R.perks = function() {
          var TargetResource = $injector.get("Perk");
          var action = TargetResource["::get::Company::perks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.perks#count
         * @methodOf lbServices.Company.perks
         *
         * @description
         *
         * Counts perks of Company.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.perks.count = function() {
          var TargetResource = $injector.get("Perk");
          var action = TargetResource["::count::Company::perks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.perks#create
         * @methodOf lbServices.Company.perks
         *
         * @description
         *
         * Creates a new instance in perks of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Perk` object.)
         * </em>
         */
        R.perks.create = function() {
          var TargetResource = $injector.get("Perk");
          var action = TargetResource["::create::Company::perks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.perks#destroyAll
         * @methodOf lbServices.Company.perks
         *
         * @description
         *
         * Deletes all perks of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.perks.destroyAll = function() {
          var TargetResource = $injector.get("Perk");
          var action = TargetResource["::delete::Company::perks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.perks#destroyById
         * @methodOf lbServices.Company.perks
         *
         * @description
         *
         * Delete a related item by id for perks
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for perks
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.perks.destroyById = function() {
          var TargetResource = $injector.get("Perk");
          var action = TargetResource["::destroyById::Company::perks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.perks#exists
         * @methodOf lbServices.Company.perks
         *
         * @description
         *
         * Check the existence of perks relation to an item by id
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for perks
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Perk` object.)
         * </em>
         */
        R.perks.exists = function() {
          var TargetResource = $injector.get("Perk");
          var action = TargetResource["::exists::Company::perks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.perks#findById
         * @methodOf lbServices.Company.perks
         *
         * @description
         *
         * Find a related item by id for perks
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for perks
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Perk` object.)
         * </em>
         */
        R.perks.findById = function() {
          var TargetResource = $injector.get("Perk");
          var action = TargetResource["::findById::Company::perks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.perks#link
         * @methodOf lbServices.Company.perks
         *
         * @description
         *
         * Add a related item by id for perks
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for perks
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Perk` object.)
         * </em>
         */
        R.perks.link = function() {
          var TargetResource = $injector.get("Perk");
          var action = TargetResource["::link::Company::perks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.perks#unlink
         * @methodOf lbServices.Company.perks
         *
         * @description
         *
         * Remove the perks relation to an item by id
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for perks
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.perks.unlink = function() {
          var TargetResource = $injector.get("Perk");
          var action = TargetResource["::unlink::Company::perks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.perks#updateById
         * @methodOf lbServices.Company.perks
         *
         * @description
         *
         * Update a related item by id for perks
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for perks
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Perk` object.)
         * </em>
         */
        R.perks.updateById = function() {
          var TargetResource = $injector.get("Perk");
          var action = TargetResource["::updateById::Company::perks"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Review
 * @header lbServices.Review
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Review` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Review",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Reviews/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Review.ratings.findById() instead.
        "prototype$__findById__ratings": {
          url: urlBase + "/Reviews/:id/ratings/:fk",
          method: "GET"
        },

        // INTERNAL. Use Review.ratings.destroyById() instead.
        "prototype$__destroyById__ratings": {
          url: urlBase + "/Reviews/:id/ratings/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Review.ratings.updateById() instead.
        "prototype$__updateById__ratings": {
          url: urlBase + "/Reviews/:id/ratings/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Review.ratings() instead.
        "prototype$__get__ratings": {
          isArray: true,
          url: urlBase + "/Reviews/:id/ratings",
          method: "GET"
        },

        // INTERNAL. Use Review.ratings.create() instead.
        "prototype$__create__ratings": {
          url: urlBase + "/Reviews/:id/ratings",
          method: "POST"
        },

        // INTERNAL. Use Review.ratings.destroyAll() instead.
        "prototype$__delete__ratings": {
          url: urlBase + "/Reviews/:id/ratings",
          method: "DELETE"
        },

        // INTERNAL. Use Review.ratings.count() instead.
        "prototype$__count__ratings": {
          url: urlBase + "/Reviews/:id/ratings/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Review#create
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Review` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Reviews",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Review#upsert
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Review` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Reviews",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Review#exists
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/Reviews/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Review#findById
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Review` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Reviews/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Review#find
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Review` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Reviews",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Review#findOne
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Review` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Reviews/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Review#updateAll
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Reviews/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Review#deleteById
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Reviews/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Review#count
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/Reviews/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Review#prototype$updateAttributes
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Review` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Reviews/:id",
          method: "PUT"
        },

        // INTERNAL. Use Company.reviews.findById() instead.
        "::findById::Company::reviews": {
          url: urlBase + "/Companies/:id/reviews/:fk",
          method: "GET"
        },

        // INTERNAL. Use Company.reviews.destroyById() instead.
        "::destroyById::Company::reviews": {
          url: urlBase + "/Companies/:id/reviews/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Company.reviews.updateById() instead.
        "::updateById::Company::reviews": {
          url: urlBase + "/Companies/:id/reviews/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Company.reviews() instead.
        "::get::Company::reviews": {
          isArray: true,
          url: urlBase + "/Companies/:id/reviews",
          method: "GET"
        },

        // INTERNAL. Use Company.reviews.create() instead.
        "::create::Company::reviews": {
          url: urlBase + "/Companies/:id/reviews",
          method: "POST"
        },

        // INTERNAL. Use Company.reviews.destroyAll() instead.
        "::delete::Company::reviews": {
          url: urlBase + "/Companies/:id/reviews",
          method: "DELETE"
        },

        // INTERNAL. Use Company.reviews.count() instead.
        "::count::Company::reviews": {
          url: urlBase + "/Companies/:id/reviews/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Review#updateOrCreate
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Review` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Review#update
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Review#destroyById
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Review#removeById
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Review#modelName
    * @propertyOf lbServices.Review
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Review`.
    */
    R.modelName = "Review";

    /**
     * @ngdoc object
     * @name lbServices.Review.ratings
     * @header lbServices.Review.ratings
     * @object
     * @description
     *
     * The object `Review.ratings` groups methods
     * manipulating `Rating` instances related to `Review`.
     *
     * Call {@link lbServices.Review#ratings Review.ratings()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Review#ratings
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Queries ratings of Review.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        R.ratings = function() {
          var TargetResource = $injector.get("Rating");
          var action = TargetResource["::get::Review::ratings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Review.ratings#count
         * @methodOf lbServices.Review.ratings
         *
         * @description
         *
         * Counts ratings of Review.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.ratings.count = function() {
          var TargetResource = $injector.get("Rating");
          var action = TargetResource["::count::Review::ratings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Review.ratings#create
         * @methodOf lbServices.Review.ratings
         *
         * @description
         *
         * Creates a new instance in ratings of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        R.ratings.create = function() {
          var TargetResource = $injector.get("Rating");
          var action = TargetResource["::create::Review::ratings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Review.ratings#destroyAll
         * @methodOf lbServices.Review.ratings
         *
         * @description
         *
         * Deletes all ratings of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.ratings.destroyAll = function() {
          var TargetResource = $injector.get("Rating");
          var action = TargetResource["::delete::Review::ratings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Review.ratings#destroyById
         * @methodOf lbServices.Review.ratings
         *
         * @description
         *
         * Delete a related item by id for ratings
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for ratings
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.ratings.destroyById = function() {
          var TargetResource = $injector.get("Rating");
          var action = TargetResource["::destroyById::Review::ratings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Review.ratings#findById
         * @methodOf lbServices.Review.ratings
         *
         * @description
         *
         * Find a related item by id for ratings
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for ratings
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        R.ratings.findById = function() {
          var TargetResource = $injector.get("Rating");
          var action = TargetResource["::findById::Review::ratings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Review.ratings#updateById
         * @methodOf lbServices.Review.ratings
         *
         * @description
         *
         * Update a related item by id for ratings
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for ratings
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        R.ratings.updateById = function() {
          var TargetResource = $injector.get("Rating");
          var action = TargetResource["::updateById::Review::ratings"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Rating
 * @header lbServices.Rating
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Rating` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Rating",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Ratings/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Rating.ratingType() instead.
        "prototype$__get__ratingType": {
          url: urlBase + "/Ratings/:id/ratingType",
          method: "GET"
        },

        // INTERNAL. Use Rating.ratingType.create() instead.
        "prototype$__create__ratingType": {
          url: urlBase + "/Ratings/:id/ratingType",
          method: "POST"
        },

        // INTERNAL. Use Rating.ratingType.update() instead.
        "prototype$__update__ratingType": {
          url: urlBase + "/Ratings/:id/ratingType",
          method: "PUT"
        },

        // INTERNAL. Use Rating.ratingType.destroy() instead.
        "prototype$__destroy__ratingType": {
          url: urlBase + "/Ratings/:id/ratingType",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Rating#create
         * @methodOf lbServices.Rating
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Ratings",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Rating#upsert
         * @methodOf lbServices.Rating
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Ratings",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Rating#exists
         * @methodOf lbServices.Rating
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/Ratings/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Rating#findById
         * @methodOf lbServices.Rating
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Ratings/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Rating#find
         * @methodOf lbServices.Rating
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Ratings",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Rating#findOne
         * @methodOf lbServices.Rating
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Ratings/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Rating#updateAll
         * @methodOf lbServices.Rating
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Ratings/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Rating#deleteById
         * @methodOf lbServices.Rating
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Ratings/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Rating#count
         * @methodOf lbServices.Rating
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/Ratings/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Rating#prototype$updateAttributes
         * @methodOf lbServices.Rating
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Ratings/:id",
          method: "PUT"
        },

        // INTERNAL. Use Review.ratings.findById() instead.
        "::findById::Review::ratings": {
          url: urlBase + "/Reviews/:id/ratings/:fk",
          method: "GET"
        },

        // INTERNAL. Use Review.ratings.destroyById() instead.
        "::destroyById::Review::ratings": {
          url: urlBase + "/Reviews/:id/ratings/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Review.ratings.updateById() instead.
        "::updateById::Review::ratings": {
          url: urlBase + "/Reviews/:id/ratings/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Review.ratings() instead.
        "::get::Review::ratings": {
          isArray: true,
          url: urlBase + "/Reviews/:id/ratings",
          method: "GET"
        },

        // INTERNAL. Use Review.ratings.create() instead.
        "::create::Review::ratings": {
          url: urlBase + "/Reviews/:id/ratings",
          method: "POST"
        },

        // INTERNAL. Use Review.ratings.destroyAll() instead.
        "::delete::Review::ratings": {
          url: urlBase + "/Reviews/:id/ratings",
          method: "DELETE"
        },

        // INTERNAL. Use Review.ratings.count() instead.
        "::count::Review::ratings": {
          url: urlBase + "/Reviews/:id/ratings/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Rating#updateOrCreate
         * @methodOf lbServices.Rating
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Rating#update
         * @methodOf lbServices.Rating
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Rating#destroyById
         * @methodOf lbServices.Rating
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Rating#removeById
         * @methodOf lbServices.Rating
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Rating#modelName
    * @propertyOf lbServices.Rating
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Rating`.
    */
    R.modelName = "Rating";

    /**
     * @ngdoc object
     * @name lbServices.Rating.ratingType
     * @header lbServices.Rating.ratingType
     * @object
     * @description
     *
     * The object `Rating.ratingType` groups methods
     * manipulating `RatingType` instances related to `Rating`.
     *
     * Call {@link lbServices.Rating#ratingType Rating.ratingType()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Rating#ratingType
         * @methodOf lbServices.Rating
         *
         * @description
         *
         * Fetches hasOne relation ratingType
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RatingType` object.)
         * </em>
         */
        R.ratingType = function() {
          var TargetResource = $injector.get("RatingType");
          var action = TargetResource["::get::Rating::ratingType"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Rating.ratingType#create
         * @methodOf lbServices.Rating.ratingType
         *
         * @description
         *
         * Creates a new instance in ratingType of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RatingType` object.)
         * </em>
         */
        R.ratingType.create = function() {
          var TargetResource = $injector.get("RatingType");
          var action = TargetResource["::create::Rating::ratingType"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Rating.ratingType#destroy
         * @methodOf lbServices.Rating.ratingType
         *
         * @description
         *
         * Deletes ratingType of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.ratingType.destroy = function() {
          var TargetResource = $injector.get("RatingType");
          var action = TargetResource["::destroy::Rating::ratingType"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Rating.ratingType#update
         * @methodOf lbServices.Rating.ratingType
         *
         * @description
         *
         * Update ratingType of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RatingType` object.)
         * </em>
         */
        R.ratingType.update = function() {
          var TargetResource = $injector.get("RatingType");
          var action = TargetResource["::update::Rating::ratingType"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.RatingType
 * @header lbServices.RatingType
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `RatingType` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "RatingType",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/RatingTypes/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.RatingType#create
         * @methodOf lbServices.RatingType
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RatingType` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/RatingTypes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.RatingType#upsert
         * @methodOf lbServices.RatingType
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RatingType` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/RatingTypes",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.RatingType#exists
         * @methodOf lbServices.RatingType
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/RatingTypes/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RatingType#findById
         * @methodOf lbServices.RatingType
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RatingType` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/RatingTypes/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RatingType#find
         * @methodOf lbServices.RatingType
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RatingType` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/RatingTypes",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RatingType#findOne
         * @methodOf lbServices.RatingType
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RatingType` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/RatingTypes/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RatingType#updateAll
         * @methodOf lbServices.RatingType
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/RatingTypes/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.RatingType#deleteById
         * @methodOf lbServices.RatingType
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/RatingTypes/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.RatingType#count
         * @methodOf lbServices.RatingType
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/RatingTypes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RatingType#prototype$updateAttributes
         * @methodOf lbServices.RatingType
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RatingType` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/RatingTypes/:id",
          method: "PUT"
        },

        // INTERNAL. Use Rating.ratingType() instead.
        "::get::Rating::ratingType": {
          url: urlBase + "/Ratings/:id/ratingType",
          method: "GET"
        },

        // INTERNAL. Use Rating.ratingType.create() instead.
        "::create::Rating::ratingType": {
          url: urlBase + "/Ratings/:id/ratingType",
          method: "POST"
        },

        // INTERNAL. Use Rating.ratingType.update() instead.
        "::update::Rating::ratingType": {
          url: urlBase + "/Ratings/:id/ratingType",
          method: "PUT"
        },

        // INTERNAL. Use Rating.ratingType.destroy() instead.
        "::destroy::Rating::ratingType": {
          url: urlBase + "/Ratings/:id/ratingType",
          method: "DELETE"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.RatingType#updateOrCreate
         * @methodOf lbServices.RatingType
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RatingType` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.RatingType#update
         * @methodOf lbServices.RatingType
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.RatingType#destroyById
         * @methodOf lbServices.RatingType
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.RatingType#removeById
         * @methodOf lbServices.RatingType
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.RatingType#modelName
    * @propertyOf lbServices.RatingType
    * @description
    * The name of the model represented by this $resource,
    * i.e. `RatingType`.
    */
    R.modelName = "RatingType";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Major
 * @header lbServices.Major
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Major` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Major",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Majors/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Major.companies.findById() instead.
        "prototype$__findById__companies": {
          url: urlBase + "/Majors/:id/companies/:fk",
          method: "GET"
        },

        // INTERNAL. Use Major.companies.destroyById() instead.
        "prototype$__destroyById__companies": {
          url: urlBase + "/Majors/:id/companies/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Major.companies.updateById() instead.
        "prototype$__updateById__companies": {
          url: urlBase + "/Majors/:id/companies/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Major.companies.link() instead.
        "prototype$__link__companies": {
          url: urlBase + "/Majors/:id/companies/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Major.companies.unlink() instead.
        "prototype$__unlink__companies": {
          url: urlBase + "/Majors/:id/companies/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Major.companies.exists() instead.
        "prototype$__exists__companies": {
          url: urlBase + "/Majors/:id/companies/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Major.companies() instead.
        "prototype$__get__companies": {
          isArray: true,
          url: urlBase + "/Majors/:id/companies",
          method: "GET"
        },

        // INTERNAL. Use Major.companies.create() instead.
        "prototype$__create__companies": {
          url: urlBase + "/Majors/:id/companies",
          method: "POST"
        },

        // INTERNAL. Use Major.companies.destroyAll() instead.
        "prototype$__delete__companies": {
          url: urlBase + "/Majors/:id/companies",
          method: "DELETE"
        },

        // INTERNAL. Use Major.companies.count() instead.
        "prototype$__count__companies": {
          url: urlBase + "/Majors/:id/companies/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Major#create
         * @methodOf lbServices.Major
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Major` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Majors",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Major#upsert
         * @methodOf lbServices.Major
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Major` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Majors",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Major#exists
         * @methodOf lbServices.Major
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/Majors/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Major#findById
         * @methodOf lbServices.Major
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Major` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Majors/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Major#find
         * @methodOf lbServices.Major
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Major` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Majors",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Major#findOne
         * @methodOf lbServices.Major
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Major` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Majors/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Major#updateAll
         * @methodOf lbServices.Major
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Majors/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Major#deleteById
         * @methodOf lbServices.Major
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Majors/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Major#count
         * @methodOf lbServices.Major
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/Majors/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Major#prototype$updateAttributes
         * @methodOf lbServices.Major
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Major` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Majors/:id",
          method: "PUT"
        },

        // INTERNAL. Use Company.majors.findById() instead.
        "::findById::Company::majors": {
          url: urlBase + "/Companies/:id/majors/:fk",
          method: "GET"
        },

        // INTERNAL. Use Company.majors.destroyById() instead.
        "::destroyById::Company::majors": {
          url: urlBase + "/Companies/:id/majors/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Company.majors.updateById() instead.
        "::updateById::Company::majors": {
          url: urlBase + "/Companies/:id/majors/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Company.majors.link() instead.
        "::link::Company::majors": {
          url: urlBase + "/Companies/:id/majors/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Company.majors.unlink() instead.
        "::unlink::Company::majors": {
          url: urlBase + "/Companies/:id/majors/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Company.majors.exists() instead.
        "::exists::Company::majors": {
          url: urlBase + "/Companies/:id/majors/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Company.majors() instead.
        "::get::Company::majors": {
          isArray: true,
          url: urlBase + "/Companies/:id/majors",
          method: "GET"
        },

        // INTERNAL. Use Company.majors.create() instead.
        "::create::Company::majors": {
          url: urlBase + "/Companies/:id/majors",
          method: "POST"
        },

        // INTERNAL. Use Company.majors.destroyAll() instead.
        "::delete::Company::majors": {
          url: urlBase + "/Companies/:id/majors",
          method: "DELETE"
        },

        // INTERNAL. Use Company.majors.count() instead.
        "::count::Company::majors": {
          url: urlBase + "/Companies/:id/majors/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Major#updateOrCreate
         * @methodOf lbServices.Major
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Major` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Major#update
         * @methodOf lbServices.Major
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Major#destroyById
         * @methodOf lbServices.Major
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Major#removeById
         * @methodOf lbServices.Major
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Major#modelName
    * @propertyOf lbServices.Major
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Major`.
    */
    R.modelName = "Major";

    /**
     * @ngdoc object
     * @name lbServices.Major.companies
     * @header lbServices.Major.companies
     * @object
     * @description
     *
     * The object `Major.companies` groups methods
     * manipulating `Company` instances related to `Major`.
     *
     * Call {@link lbServices.Major#companies Major.companies()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Major#companies
         * @methodOf lbServices.Major
         *
         * @description
         *
         * Queries companies of Major.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        R.companies = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::get::Major::companies"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Major.companies#count
         * @methodOf lbServices.Major.companies
         *
         * @description
         *
         * Counts companies of Major.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.companies.count = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::count::Major::companies"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Major.companies#create
         * @methodOf lbServices.Major.companies
         *
         * @description
         *
         * Creates a new instance in companies of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        R.companies.create = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::create::Major::companies"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Major.companies#destroyAll
         * @methodOf lbServices.Major.companies
         *
         * @description
         *
         * Deletes all companies of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.companies.destroyAll = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::delete::Major::companies"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Major.companies#destroyById
         * @methodOf lbServices.Major.companies
         *
         * @description
         *
         * Delete a related item by id for companies
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for companies
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.companies.destroyById = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::destroyById::Major::companies"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Major.companies#exists
         * @methodOf lbServices.Major.companies
         *
         * @description
         *
         * Check the existence of companies relation to an item by id
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for companies
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        R.companies.exists = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::exists::Major::companies"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Major.companies#findById
         * @methodOf lbServices.Major.companies
         *
         * @description
         *
         * Find a related item by id for companies
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for companies
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        R.companies.findById = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::findById::Major::companies"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Major.companies#link
         * @methodOf lbServices.Major.companies
         *
         * @description
         *
         * Add a related item by id for companies
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for companies
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        R.companies.link = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::link::Major::companies"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Major.companies#unlink
         * @methodOf lbServices.Major.companies
         *
         * @description
         *
         * Remove the companies relation to an item by id
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for companies
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.companies.unlink = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::unlink::Major::companies"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Major.companies#updateById
         * @methodOf lbServices.Major.companies
         *
         * @description
         *
         * Update a related item by id for companies
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for companies
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        R.companies.updateById = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::updateById::Major::companies"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Perk
 * @header lbServices.Perk
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Perk` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Perk",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Perks/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Perk.companies.findById() instead.
        "prototype$__findById__companies": {
          url: urlBase + "/Perks/:id/companies/:fk",
          method: "GET"
        },

        // INTERNAL. Use Perk.companies.destroyById() instead.
        "prototype$__destroyById__companies": {
          url: urlBase + "/Perks/:id/companies/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Perk.companies.updateById() instead.
        "prototype$__updateById__companies": {
          url: urlBase + "/Perks/:id/companies/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Perk.companies.link() instead.
        "prototype$__link__companies": {
          url: urlBase + "/Perks/:id/companies/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Perk.companies.unlink() instead.
        "prototype$__unlink__companies": {
          url: urlBase + "/Perks/:id/companies/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Perk.companies.exists() instead.
        "prototype$__exists__companies": {
          url: urlBase + "/Perks/:id/companies/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Perk.companies() instead.
        "prototype$__get__companies": {
          isArray: true,
          url: urlBase + "/Perks/:id/companies",
          method: "GET"
        },

        // INTERNAL. Use Perk.companies.create() instead.
        "prototype$__create__companies": {
          url: urlBase + "/Perks/:id/companies",
          method: "POST"
        },

        // INTERNAL. Use Perk.companies.destroyAll() instead.
        "prototype$__delete__companies": {
          url: urlBase + "/Perks/:id/companies",
          method: "DELETE"
        },

        // INTERNAL. Use Perk.companies.count() instead.
        "prototype$__count__companies": {
          url: urlBase + "/Perks/:id/companies/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Perk#create
         * @methodOf lbServices.Perk
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Perk` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Perks",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Perk#upsert
         * @methodOf lbServices.Perk
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Perk` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Perks",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Perk#exists
         * @methodOf lbServices.Perk
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/Perks/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Perk#findById
         * @methodOf lbServices.Perk
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Perk` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Perks/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Perk#find
         * @methodOf lbServices.Perk
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Perk` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Perks",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Perk#findOne
         * @methodOf lbServices.Perk
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Perk` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Perks/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Perk#updateAll
         * @methodOf lbServices.Perk
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Perks/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Perk#deleteById
         * @methodOf lbServices.Perk
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Perks/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Perk#count
         * @methodOf lbServices.Perk
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/Perks/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Perk#prototype$updateAttributes
         * @methodOf lbServices.Perk
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Perk` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Perks/:id",
          method: "PUT"
        },

        // INTERNAL. Use Company.perks.findById() instead.
        "::findById::Company::perks": {
          url: urlBase + "/Companies/:id/perks/:fk",
          method: "GET"
        },

        // INTERNAL. Use Company.perks.destroyById() instead.
        "::destroyById::Company::perks": {
          url: urlBase + "/Companies/:id/perks/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Company.perks.updateById() instead.
        "::updateById::Company::perks": {
          url: urlBase + "/Companies/:id/perks/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Company.perks.link() instead.
        "::link::Company::perks": {
          url: urlBase + "/Companies/:id/perks/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Company.perks.unlink() instead.
        "::unlink::Company::perks": {
          url: urlBase + "/Companies/:id/perks/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Company.perks.exists() instead.
        "::exists::Company::perks": {
          url: urlBase + "/Companies/:id/perks/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Company.perks() instead.
        "::get::Company::perks": {
          isArray: true,
          url: urlBase + "/Companies/:id/perks",
          method: "GET"
        },

        // INTERNAL. Use Company.perks.create() instead.
        "::create::Company::perks": {
          url: urlBase + "/Companies/:id/perks",
          method: "POST"
        },

        // INTERNAL. Use Company.perks.destroyAll() instead.
        "::delete::Company::perks": {
          url: urlBase + "/Companies/:id/perks",
          method: "DELETE"
        },

        // INTERNAL. Use Company.perks.count() instead.
        "::count::Company::perks": {
          url: urlBase + "/Companies/:id/perks/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Perk#updateOrCreate
         * @methodOf lbServices.Perk
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Perk` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Perk#update
         * @methodOf lbServices.Perk
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Perk#destroyById
         * @methodOf lbServices.Perk
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Perk#removeById
         * @methodOf lbServices.Perk
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Perk#modelName
    * @propertyOf lbServices.Perk
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Perk`.
    */
    R.modelName = "Perk";

    /**
     * @ngdoc object
     * @name lbServices.Perk.companies
     * @header lbServices.Perk.companies
     * @object
     * @description
     *
     * The object `Perk.companies` groups methods
     * manipulating `Company` instances related to `Perk`.
     *
     * Call {@link lbServices.Perk#companies Perk.companies()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Perk#companies
         * @methodOf lbServices.Perk
         *
         * @description
         *
         * Queries companies of Perk.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        R.companies = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::get::Perk::companies"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Perk.companies#count
         * @methodOf lbServices.Perk.companies
         *
         * @description
         *
         * Counts companies of Perk.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.companies.count = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::count::Perk::companies"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Perk.companies#create
         * @methodOf lbServices.Perk.companies
         *
         * @description
         *
         * Creates a new instance in companies of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        R.companies.create = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::create::Perk::companies"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Perk.companies#destroyAll
         * @methodOf lbServices.Perk.companies
         *
         * @description
         *
         * Deletes all companies of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.companies.destroyAll = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::delete::Perk::companies"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Perk.companies#destroyById
         * @methodOf lbServices.Perk.companies
         *
         * @description
         *
         * Delete a related item by id for companies
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for companies
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.companies.destroyById = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::destroyById::Perk::companies"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Perk.companies#exists
         * @methodOf lbServices.Perk.companies
         *
         * @description
         *
         * Check the existence of companies relation to an item by id
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for companies
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        R.companies.exists = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::exists::Perk::companies"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Perk.companies#findById
         * @methodOf lbServices.Perk.companies
         *
         * @description
         *
         * Find a related item by id for companies
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for companies
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        R.companies.findById = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::findById::Perk::companies"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Perk.companies#link
         * @methodOf lbServices.Perk.companies
         *
         * @description
         *
         * Add a related item by id for companies
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for companies
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        R.companies.link = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::link::Perk::companies"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Perk.companies#unlink
         * @methodOf lbServices.Perk.companies
         *
         * @description
         *
         * Remove the companies relation to an item by id
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for companies
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.companies.unlink = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::unlink::Perk::companies"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Perk.companies#updateById
         * @methodOf lbServices.Perk.companies
         *
         * @description
         *
         * Update a related item by id for companies
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for companies
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        R.companies.updateById = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::updateById::Perk::companies"];
          return action.apply(R, arguments);
        };

    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.rememberMe = undefined;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      var key = propsPrefix + name;
      if (value == null) value = '';
      storage[key] = value;
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out non urlBase requests
          if (config.url.substr(0, urlBase.length) !== urlBase) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
