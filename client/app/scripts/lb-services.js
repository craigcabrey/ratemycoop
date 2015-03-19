(function(window, angular, undefined) {'use strict';

var urlBase = "/api/v1";
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
         *  - `redirect` – `{string=}` -
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
         * @name lbServices.User#prototype$resendEmail
         * @methodOf lbServices.User
         *
         * @description
         *
         * Resend the verification email for the current user
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
         * Data properties:
         *
         *  - `sent` – `{boolean=}` -
         */
        "prototype$resendEmail": {
          url: urlBase + "/Users/:id/resendEmail",
          method: "GET"
        },

        // INTERNAL. Use Review.user() instead.
        "::get::Review::user": {
          url: urlBase + "/Reviews/:id/user",
          method: "GET"
        },

        // INTERNAL. Use SuggestedEdit.user() instead.
        "::get::SuggestedEdit::user": {
          url: urlBase + "/SuggestedEdits/:id/user",
          method: "GET"
        },

        // INTERNAL. Use SuggestedEdit.user.create() instead.
        "::create::SuggestedEdit::user": {
          url: urlBase + "/SuggestedEdits/:id/user",
          method: "POST"
        },

        // INTERNAL. Use SuggestedEdit.user.update() instead.
        "::update::SuggestedEdit::user": {
          url: urlBase + "/SuggestedEdits/:id/user",
          method: "PUT"
        },

        // INTERNAL. Use SuggestedEdit.user.destroy() instead.
        "::destroy::SuggestedEdit::user": {
          url: urlBase + "/SuggestedEdits/:id/user",
          method: "DELETE"
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

        // INTERNAL. Use Company.locations.findById() instead.
        "prototype$__findById__locations": {
          url: urlBase + "/Companies/:id/locations/:fk",
          method: "GET"
        },

        // INTERNAL. Use Company.locations.destroyById() instead.
        "prototype$__destroyById__locations": {
          url: urlBase + "/Companies/:id/locations/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Company.locations.updateById() instead.
        "prototype$__updateById__locations": {
          url: urlBase + "/Companies/:id/locations/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Company.locations.link() instead.
        "prototype$__link__locations": {
          url: urlBase + "/Companies/:id/locations/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Company.locations.unlink() instead.
        "prototype$__unlink__locations": {
          url: urlBase + "/Companies/:id/locations/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Company.locations.exists() instead.
        "prototype$__exists__locations": {
          url: urlBase + "/Companies/:id/locations/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Company.industries.findById() instead.
        "prototype$__findById__industries": {
          url: urlBase + "/Companies/:id/industries/:fk",
          method: "GET"
        },

        // INTERNAL. Use Company.industries.destroyById() instead.
        "prototype$__destroyById__industries": {
          url: urlBase + "/Companies/:id/industries/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Company.industries.updateById() instead.
        "prototype$__updateById__industries": {
          url: urlBase + "/Companies/:id/industries/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Company.industries.link() instead.
        "prototype$__link__industries": {
          url: urlBase + "/Companies/:id/industries/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Company.industries.unlink() instead.
        "prototype$__unlink__industries": {
          url: urlBase + "/Companies/:id/industries/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Company.industries.exists() instead.
        "prototype$__exists__industries": {
          url: urlBase + "/Companies/:id/industries/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Company.suggestedEdits.findById() instead.
        "prototype$__findById__suggestedEdits": {
          url: urlBase + "/Companies/:id/suggestedEdits/:fk",
          method: "GET"
        },

        // INTERNAL. Use Company.suggestedEdits.destroyById() instead.
        "prototype$__destroyById__suggestedEdits": {
          url: urlBase + "/Companies/:id/suggestedEdits/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Company.suggestedEdits.updateById() instead.
        "prototype$__updateById__suggestedEdits": {
          url: urlBase + "/Companies/:id/suggestedEdits/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Company.events.findById() instead.
        "prototype$__findById__events": {
          url: urlBase + "/Companies/:id/events/:fk",
          method: "GET"
        },

        // INTERNAL. Use Company.events.destroyById() instead.
        "prototype$__destroyById__events": {
          url: urlBase + "/Companies/:id/events/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Company.events.updateById() instead.
        "prototype$__updateById__events": {
          url: urlBase + "/Companies/:id/events/:fk",
          method: "PUT"
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

        // INTERNAL. Use Company.locations() instead.
        "prototype$__get__locations": {
          isArray: true,
          url: urlBase + "/Companies/:id/locations",
          method: "GET"
        },

        // INTERNAL. Use Company.locations.create() instead.
        "prototype$__create__locations": {
          url: urlBase + "/Companies/:id/locations",
          method: "POST"
        },

        // INTERNAL. Use Company.locations.destroyAll() instead.
        "prototype$__delete__locations": {
          url: urlBase + "/Companies/:id/locations",
          method: "DELETE"
        },

        // INTERNAL. Use Company.locations.count() instead.
        "prototype$__count__locations": {
          url: urlBase + "/Companies/:id/locations/count",
          method: "GET"
        },

        // INTERNAL. Use Company.industries() instead.
        "prototype$__get__industries": {
          isArray: true,
          url: urlBase + "/Companies/:id/industries",
          method: "GET"
        },

        // INTERNAL. Use Company.industries.create() instead.
        "prototype$__create__industries": {
          url: urlBase + "/Companies/:id/industries",
          method: "POST"
        },

        // INTERNAL. Use Company.industries.destroyAll() instead.
        "prototype$__delete__industries": {
          url: urlBase + "/Companies/:id/industries",
          method: "DELETE"
        },

        // INTERNAL. Use Company.industries.count() instead.
        "prototype$__count__industries": {
          url: urlBase + "/Companies/:id/industries/count",
          method: "GET"
        },

        // INTERNAL. Use Company.suggestedEdits() instead.
        "prototype$__get__suggestedEdits": {
          isArray: true,
          url: urlBase + "/Companies/:id/suggestedEdits",
          method: "GET"
        },

        // INTERNAL. Use Company.suggestedEdits.create() instead.
        "prototype$__create__suggestedEdits": {
          url: urlBase + "/Companies/:id/suggestedEdits",
          method: "POST"
        },

        // INTERNAL. Use Company.suggestedEdits.destroyAll() instead.
        "prototype$__delete__suggestedEdits": {
          url: urlBase + "/Companies/:id/suggestedEdits",
          method: "DELETE"
        },

        // INTERNAL. Use Company.suggestedEdits.count() instead.
        "prototype$__count__suggestedEdits": {
          url: urlBase + "/Companies/:id/suggestedEdits/count",
          method: "GET"
        },

        // INTERNAL. Use Company.events() instead.
        "prototype$__get__events": {
          isArray: true,
          url: urlBase + "/Companies/:id/events",
          method: "GET"
        },

        // INTERNAL. Use Company.events.create() instead.
        "prototype$__create__events": {
          url: urlBase + "/Companies/:id/events",
          method: "POST"
        },

        // INTERNAL. Use Company.events.destroyAll() instead.
        "prototype$__delete__events": {
          url: urlBase + "/Companies/:id/events",
          method: "DELETE"
        },

        // INTERNAL. Use Company.events.count() instead.
        "prototype$__count__events": {
          url: urlBase + "/Companies/:id/events/count",
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

        // INTERNAL. Use SuggestedEdit.company() instead.
        "::get::SuggestedEdit::company": {
          url: urlBase + "/SuggestedEdits/:id/company",
          method: "GET"
        },

        // INTERNAL. Use Event.company() instead.
        "::get::Event::company": {
          url: urlBase + "/Events/:id/company",
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
    /**
     * @ngdoc object
     * @name lbServices.Company.locations
     * @header lbServices.Company.locations
     * @object
     * @description
     *
     * The object `Company.locations` groups methods
     * manipulating `City` instances related to `Company`.
     *
     * Call {@link lbServices.Company#locations Company.locations()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Company#locations
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Queries locations of Company.
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
         * This usually means the response is a `City` object.)
         * </em>
         */
        R.locations = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::get::Company::locations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.locations#count
         * @methodOf lbServices.Company.locations
         *
         * @description
         *
         * Counts locations of Company.
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
        R.locations.count = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::count::Company::locations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.locations#create
         * @methodOf lbServices.Company.locations
         *
         * @description
         *
         * Creates a new instance in locations of this model.
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
         * This usually means the response is a `City` object.)
         * </em>
         */
        R.locations.create = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::create::Company::locations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.locations#destroyAll
         * @methodOf lbServices.Company.locations
         *
         * @description
         *
         * Deletes all locations of this model.
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
        R.locations.destroyAll = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::delete::Company::locations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.locations#destroyById
         * @methodOf lbServices.Company.locations
         *
         * @description
         *
         * Delete a related item by id for locations
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for locations
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
        R.locations.destroyById = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::destroyById::Company::locations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.locations#exists
         * @methodOf lbServices.Company.locations
         *
         * @description
         *
         * Check the existence of locations relation to an item by id
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for locations
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
         * This usually means the response is a `City` object.)
         * </em>
         */
        R.locations.exists = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::exists::Company::locations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.locations#findById
         * @methodOf lbServices.Company.locations
         *
         * @description
         *
         * Find a related item by id for locations
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for locations
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
         * This usually means the response is a `City` object.)
         * </em>
         */
        R.locations.findById = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::findById::Company::locations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.locations#link
         * @methodOf lbServices.Company.locations
         *
         * @description
         *
         * Add a related item by id for locations
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for locations
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
         * This usually means the response is a `City` object.)
         * </em>
         */
        R.locations.link = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::link::Company::locations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.locations#unlink
         * @methodOf lbServices.Company.locations
         *
         * @description
         *
         * Remove the locations relation to an item by id
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for locations
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
        R.locations.unlink = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::unlink::Company::locations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.locations#updateById
         * @methodOf lbServices.Company.locations
         *
         * @description
         *
         * Update a related item by id for locations
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for locations
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
         * This usually means the response is a `City` object.)
         * </em>
         */
        R.locations.updateById = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::updateById::Company::locations"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Company.industries
     * @header lbServices.Company.industries
     * @object
     * @description
     *
     * The object `Company.industries` groups methods
     * manipulating `Industry` instances related to `Company`.
     *
     * Call {@link lbServices.Company#industries Company.industries()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Company#industries
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Queries industries of Company.
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
         * This usually means the response is a `Industry` object.)
         * </em>
         */
        R.industries = function() {
          var TargetResource = $injector.get("Industry");
          var action = TargetResource["::get::Company::industries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.industries#count
         * @methodOf lbServices.Company.industries
         *
         * @description
         *
         * Counts industries of Company.
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
        R.industries.count = function() {
          var TargetResource = $injector.get("Industry");
          var action = TargetResource["::count::Company::industries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.industries#create
         * @methodOf lbServices.Company.industries
         *
         * @description
         *
         * Creates a new instance in industries of this model.
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
         * This usually means the response is a `Industry` object.)
         * </em>
         */
        R.industries.create = function() {
          var TargetResource = $injector.get("Industry");
          var action = TargetResource["::create::Company::industries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.industries#destroyAll
         * @methodOf lbServices.Company.industries
         *
         * @description
         *
         * Deletes all industries of this model.
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
        R.industries.destroyAll = function() {
          var TargetResource = $injector.get("Industry");
          var action = TargetResource["::delete::Company::industries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.industries#destroyById
         * @methodOf lbServices.Company.industries
         *
         * @description
         *
         * Delete a related item by id for industries
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for industries
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
        R.industries.destroyById = function() {
          var TargetResource = $injector.get("Industry");
          var action = TargetResource["::destroyById::Company::industries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.industries#exists
         * @methodOf lbServices.Company.industries
         *
         * @description
         *
         * Check the existence of industries relation to an item by id
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for industries
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
         * This usually means the response is a `Industry` object.)
         * </em>
         */
        R.industries.exists = function() {
          var TargetResource = $injector.get("Industry");
          var action = TargetResource["::exists::Company::industries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.industries#findById
         * @methodOf lbServices.Company.industries
         *
         * @description
         *
         * Find a related item by id for industries
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for industries
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
         * This usually means the response is a `Industry` object.)
         * </em>
         */
        R.industries.findById = function() {
          var TargetResource = $injector.get("Industry");
          var action = TargetResource["::findById::Company::industries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.industries#link
         * @methodOf lbServices.Company.industries
         *
         * @description
         *
         * Add a related item by id for industries
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for industries
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
         * This usually means the response is a `Industry` object.)
         * </em>
         */
        R.industries.link = function() {
          var TargetResource = $injector.get("Industry");
          var action = TargetResource["::link::Company::industries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.industries#unlink
         * @methodOf lbServices.Company.industries
         *
         * @description
         *
         * Remove the industries relation to an item by id
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for industries
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
        R.industries.unlink = function() {
          var TargetResource = $injector.get("Industry");
          var action = TargetResource["::unlink::Company::industries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.industries#updateById
         * @methodOf lbServices.Company.industries
         *
         * @description
         *
         * Update a related item by id for industries
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for industries
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
         * This usually means the response is a `Industry` object.)
         * </em>
         */
        R.industries.updateById = function() {
          var TargetResource = $injector.get("Industry");
          var action = TargetResource["::updateById::Company::industries"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Company.suggestedEdits
     * @header lbServices.Company.suggestedEdits
     * @object
     * @description
     *
     * The object `Company.suggestedEdits` groups methods
     * manipulating `SuggestedEdit` instances related to `Company`.
     *
     * Call {@link lbServices.Company#suggestedEdits Company.suggestedEdits()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Company#suggestedEdits
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Queries suggestedEdits of Company.
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
         * This usually means the response is a `SuggestedEdit` object.)
         * </em>
         */
        R.suggestedEdits = function() {
          var TargetResource = $injector.get("SuggestedEdit");
          var action = TargetResource["::get::Company::suggestedEdits"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.suggestedEdits#count
         * @methodOf lbServices.Company.suggestedEdits
         *
         * @description
         *
         * Counts suggestedEdits of Company.
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
        R.suggestedEdits.count = function() {
          var TargetResource = $injector.get("SuggestedEdit");
          var action = TargetResource["::count::Company::suggestedEdits"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.suggestedEdits#create
         * @methodOf lbServices.Company.suggestedEdits
         *
         * @description
         *
         * Creates a new instance in suggestedEdits of this model.
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
         * This usually means the response is a `SuggestedEdit` object.)
         * </em>
         */
        R.suggestedEdits.create = function() {
          var TargetResource = $injector.get("SuggestedEdit");
          var action = TargetResource["::create::Company::suggestedEdits"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.suggestedEdits#destroyAll
         * @methodOf lbServices.Company.suggestedEdits
         *
         * @description
         *
         * Deletes all suggestedEdits of this model.
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
        R.suggestedEdits.destroyAll = function() {
          var TargetResource = $injector.get("SuggestedEdit");
          var action = TargetResource["::delete::Company::suggestedEdits"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.suggestedEdits#destroyById
         * @methodOf lbServices.Company.suggestedEdits
         *
         * @description
         *
         * Delete a related item by id for suggestedEdits
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for suggestedEdits
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
        R.suggestedEdits.destroyById = function() {
          var TargetResource = $injector.get("SuggestedEdit");
          var action = TargetResource["::destroyById::Company::suggestedEdits"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.suggestedEdits#findById
         * @methodOf lbServices.Company.suggestedEdits
         *
         * @description
         *
         * Find a related item by id for suggestedEdits
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for suggestedEdits
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
         * This usually means the response is a `SuggestedEdit` object.)
         * </em>
         */
        R.suggestedEdits.findById = function() {
          var TargetResource = $injector.get("SuggestedEdit");
          var action = TargetResource["::findById::Company::suggestedEdits"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.suggestedEdits#updateById
         * @methodOf lbServices.Company.suggestedEdits
         *
         * @description
         *
         * Update a related item by id for suggestedEdits
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for suggestedEdits
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
         * This usually means the response is a `SuggestedEdit` object.)
         * </em>
         */
        R.suggestedEdits.updateById = function() {
          var TargetResource = $injector.get("SuggestedEdit");
          var action = TargetResource["::updateById::Company::suggestedEdits"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Company.events
     * @header lbServices.Company.events
     * @object
     * @description
     *
     * The object `Company.events` groups methods
     * manipulating `Event` instances related to `Company`.
     *
     * Call {@link lbServices.Company#events Company.events()}
     * to query all related instances.
     */


    /**
     * @ngdoc method
     * @name lbServices.Company#events
     * @methodOf lbServices.Company
     *
     * @description
     *
     * Queries events of Company.
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
     * This usually means the response is a `Event` object.)
     * </em>
     */
    R.events = function () {
      var TargetResource = $injector.get("Event");
      var action = TargetResource["::get::Company::events"];
      return action.apply(R, arguments);
    };

    /**
     * @ngdoc method
     * @name lbServices.Company.events#count
     * @methodOf lbServices.Company.events
     *
     * @description
     *
     * Counts events of Company.
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
    R.events.count = function () {
      var TargetResource = $injector.get("Event");
      var action = TargetResource["::count::Company::events"];
      return action.apply(R, arguments);
    };

    /**
     * @ngdoc method
     * @name lbServices.Company.events#create
     * @methodOf lbServices.Company.events
     *
     * @description
     *
     * Creates a new instance in events of this model.
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
     * This usually means the response is a `Event` object.)
     * </em>
     */
    R.events.create = function () {
      var TargetResource = $injector.get("Event");
      var action = TargetResource["::create::Company::events"];
      return action.apply(R, arguments);
    };

    /**
     * @ngdoc method
     * @name lbServices.Company.events#destroyAll
     * @methodOf lbServices.Company.events
     *
     * @description
     *
     * Deletes all events of this model.
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
    R.events.destroyAll = function () {
      var TargetResource = $injector.get("Event");
      var action = TargetResource["::delete::Company::events"];
      return action.apply(R, arguments);
    };

    /**
     * @ngdoc method
     * @name lbServices.Company.events#destroyById
     * @methodOf lbServices.Company.events
     *
     * @description
     *
     * Delete a related item by id for events
     *
     * @param {Object=} parameters Request parameters.
     *
     *  - `id` – `{*}` - PersistedModel id
     *
     *  - `fk` – `{*}` - Foreign key for events
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
    R.events.destroyById = function () {
      var TargetResource = $injector.get("Event");
      var action = TargetResource["::destroyById::Company::events"];
      return action.apply(R, arguments);
    };

    /**
     * @ngdoc method
     * @name lbServices.Company.events#findById
     * @methodOf lbServices.Company.events
     *
     * @description
     *
     * Find a related item by id for events
     *
     * @param {Object=} parameters Request parameters.
     *
     *  - `id` – `{*}` - PersistedModel id
     *
     *  - `fk` – `{*}` - Foreign key for events
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
     * This usually means the response is a `Event` object.)
     * </em>
     */
    R.events.findById = function () {
      var TargetResource = $injector.get("Event");
      var action = TargetResource["::findById::Company::events"];
      return action.apply(R, arguments);
    };

    /**
     * @ngdoc method
     * @name lbServices.Company.events#updateById
     * @methodOf lbServices.Company.events
     *
     * @description
     *
     * Update a related item by id for events
     *
     * @param {Object=} parameters Request parameters.
     *
     *  - `id` – `{*}` - PersistedModel id
     *
     *  - `fk` – `{*}` - Foreign key for events
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
     * This usually means the response is a `Event` object.)
     * </em>
     */
    R.events.updateById = function () {
      var TargetResource = $injector.get("Event");
      var action = TargetResource["::updateById::Company::events"];
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

        // INTERNAL. Use Review.user() instead.
        "prototype$__get__user": {
          url: urlBase + "/Reviews/:id/user",
          method: "GET"
        },

        // INTERNAL. Use Review.payType() instead.
        "prototype$__get__payType": {
          url: urlBase + "/Reviews/:id/payType",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Review#prototype$__findById__likes
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Find a related item by id for likes
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for likes
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
        "prototype$__findById__likes": {
          url: urlBase + "/Reviews/:id/likes/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Review#prototype$__destroyById__likes
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Delete a related item by id for likes
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for likes
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
        "prototype$__destroyById__likes": {
          url: urlBase + "/Reviews/:id/likes/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Review#prototype$__updateById__likes
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Update a related item by id for likes
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for likes
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
        "prototype$__updateById__likes": {
          url: urlBase + "/Reviews/:id/likes/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Review#prototype$__get__likes
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Queries likes of Review.
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
        "prototype$__get__likes": {
          isArray: true,
          url: urlBase + "/Reviews/:id/likes",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Review#prototype$__create__likes
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Creates a new instance in likes of this model.
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
        "prototype$__create__likes": {
          url: urlBase + "/Reviews/:id/likes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Review#prototype$__delete__likes
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Deletes all likes of this model.
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
        "prototype$__delete__likes": {
          url: urlBase + "/Reviews/:id/likes",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Review#prototype$__count__likes
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Counts likes of Review.
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
        "prototype$__count__likes": {
          url: urlBase + "/Reviews/:id/likes/count",
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

        /**
         * @ngdoc method
         * @name lbServices.Review#prototype$like
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Like or unlike this review as the current user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method does not accept any data. Supply an empty object.
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
         *  - `msg` – `{string=}` -
         *
         *  - `isLiked` – `{boolean=}` -
         */
        "prototype$like": {
          url: urlBase + "/Reviews/:id/like",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Review#prototype$isLikedByUser
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Check if this review was liked by the current user.
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
         * Data properties:
         *
         *  - `isLiked` – `{boolean=}` -
         */
        "prototype$isLikedByUser": {
          url: urlBase + "/Reviews/:id/isLikedByUser",
          method: "GET"
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
         * @ngdoc method
         * @name lbServices.Review#user
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Fetches belongsTo relation user
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
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.user = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::Review::user"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Review#payType
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Fetches belongsTo relation payType
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
         * This usually means the response is a `PayType` object.)
         * </em>
         */
        R.payType = function() {
          var TargetResource = $injector.get("PayType");
          var action = TargetResource["::get::Review::payType"];
          return action.apply(R, arguments);
        };

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

        // INTERNAL. Use Major.college() instead.
        "prototype$__get__college": {
          url: urlBase + "/Majors/:id/college",
          method: "GET"
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

        // INTERNAL. Use College.majors.findById() instead.
        "::findById::College::majors": {
          url: urlBase + "/Colleges/:id/majors/:fk",
          method: "GET"
        },

        // INTERNAL. Use College.majors.destroyById() instead.
        "::destroyById::College::majors": {
          url: urlBase + "/Colleges/:id/majors/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use College.majors.updateById() instead.
        "::updateById::College::majors": {
          url: urlBase + "/Colleges/:id/majors/:fk",
          method: "PUT"
        },

        // INTERNAL. Use College.majors() instead.
        "::get::College::majors": {
          isArray: true,
          url: urlBase + "/Colleges/:id/majors",
          method: "GET"
        },

        // INTERNAL. Use College.majors.create() instead.
        "::create::College::majors": {
          url: urlBase + "/Colleges/:id/majors",
          method: "POST"
        },

        // INTERNAL. Use College.majors.destroyAll() instead.
        "::delete::College::majors": {
          url: urlBase + "/Colleges/:id/majors",
          method: "DELETE"
        },

        // INTERNAL. Use College.majors.count() instead.
        "::count::College::majors": {
          url: urlBase + "/Colleges/:id/majors/count",
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

        /**
         * @ngdoc method
         * @name lbServices.Major#college
         * @methodOf lbServices.Major
         *
         * @description
         *
         * Fetches belongsTo relation college
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
         * This usually means the response is a `College` object.)
         * </em>
         */
        R.college = function() {
          var TargetResource = $injector.get("College");
          var action = TargetResource["::get::Major::college"];
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

/**
 * @ngdoc object
 * @name lbServices.University
 * @header lbServices.University
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `University` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "University",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Universities/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use University.colleges.findById() instead.
        "prototype$__findById__colleges": {
          url: urlBase + "/Universities/:id/colleges/:fk",
          method: "GET"
        },

        // INTERNAL. Use University.colleges.destroyById() instead.
        "prototype$__destroyById__colleges": {
          url: urlBase + "/Universities/:id/colleges/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use University.colleges.updateById() instead.
        "prototype$__updateById__colleges": {
          url: urlBase + "/Universities/:id/colleges/:fk",
          method: "PUT"
        },

        // INTERNAL. Use University.colleges() instead.
        "prototype$__get__colleges": {
          isArray: true,
          url: urlBase + "/Universities/:id/colleges",
          method: "GET"
        },

        // INTERNAL. Use University.colleges.create() instead.
        "prototype$__create__colleges": {
          url: urlBase + "/Universities/:id/colleges",
          method: "POST"
        },

        // INTERNAL. Use University.colleges.destroyAll() instead.
        "prototype$__delete__colleges": {
          url: urlBase + "/Universities/:id/colleges",
          method: "DELETE"
        },

        // INTERNAL. Use University.colleges.count() instead.
        "prototype$__count__colleges": {
          url: urlBase + "/Universities/:id/colleges/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.University#create
         * @methodOf lbServices.University
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
         * This usually means the response is a `University` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Universities",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.University#upsert
         * @methodOf lbServices.University
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
         * This usually means the response is a `University` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Universities",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.University#exists
         * @methodOf lbServices.University
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
          url: urlBase + "/Universities/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.University#findById
         * @methodOf lbServices.University
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
         * This usually means the response is a `University` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Universities/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.University#find
         * @methodOf lbServices.University
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
         * This usually means the response is a `University` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Universities",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.University#findOne
         * @methodOf lbServices.University
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
         * This usually means the response is a `University` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Universities/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.University#updateAll
         * @methodOf lbServices.University
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
          url: urlBase + "/Universities/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.University#deleteById
         * @methodOf lbServices.University
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
          url: urlBase + "/Universities/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.University#count
         * @methodOf lbServices.University
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
          url: urlBase + "/Universities/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.University#prototype$updateAttributes
         * @methodOf lbServices.University
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
         * This usually means the response is a `University` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Universities/:id",
          method: "PUT"
        },

        // INTERNAL. Use College.university() instead.
        "::get::College::university": {
          url: urlBase + "/Colleges/:id/university",
          method: "GET"
        },

        // INTERNAL. Use Event.university() instead.
        "::get::Event::university": {
          url: urlBase + "/Events/:id/university",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.University#updateOrCreate
         * @methodOf lbServices.University
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
         * This usually means the response is a `University` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.University#update
         * @methodOf lbServices.University
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
         * @name lbServices.University#destroyById
         * @methodOf lbServices.University
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
         * @name lbServices.University#removeById
         * @methodOf lbServices.University
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
    * @name lbServices.University#modelName
    * @propertyOf lbServices.University
    * @description
    * The name of the model represented by this $resource,
    * i.e. `University`.
    */
    R.modelName = "University";

    /**
     * @ngdoc object
     * @name lbServices.University.colleges
     * @header lbServices.University.colleges
     * @object
     * @description
     *
     * The object `University.colleges` groups methods
     * manipulating `College` instances related to `University`.
     *
     * Call {@link lbServices.University#colleges University.colleges()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.University#colleges
         * @methodOf lbServices.University
         *
         * @description
         *
         * Queries colleges of University.
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
         * This usually means the response is a `College` object.)
         * </em>
         */
        R.colleges = function() {
          var TargetResource = $injector.get("College");
          var action = TargetResource["::get::University::colleges"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.University.colleges#count
         * @methodOf lbServices.University.colleges
         *
         * @description
         *
         * Counts colleges of University.
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
        R.colleges.count = function() {
          var TargetResource = $injector.get("College");
          var action = TargetResource["::count::University::colleges"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.University.colleges#create
         * @methodOf lbServices.University.colleges
         *
         * @description
         *
         * Creates a new instance in colleges of this model.
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
         * This usually means the response is a `College` object.)
         * </em>
         */
        R.colleges.create = function() {
          var TargetResource = $injector.get("College");
          var action = TargetResource["::create::University::colleges"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.University.colleges#destroyAll
         * @methodOf lbServices.University.colleges
         *
         * @description
         *
         * Deletes all colleges of this model.
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
        R.colleges.destroyAll = function() {
          var TargetResource = $injector.get("College");
          var action = TargetResource["::delete::University::colleges"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.University.colleges#destroyById
         * @methodOf lbServices.University.colleges
         *
         * @description
         *
         * Delete a related item by id for colleges
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for colleges
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
        R.colleges.destroyById = function() {
          var TargetResource = $injector.get("College");
          var action = TargetResource["::destroyById::University::colleges"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.University.colleges#findById
         * @methodOf lbServices.University.colleges
         *
         * @description
         *
         * Find a related item by id for colleges
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for colleges
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
         * This usually means the response is a `College` object.)
         * </em>
         */
        R.colleges.findById = function() {
          var TargetResource = $injector.get("College");
          var action = TargetResource["::findById::University::colleges"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.University.colleges#updateById
         * @methodOf lbServices.University.colleges
         *
         * @description
         *
         * Update a related item by id for colleges
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for colleges
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
         * This usually means the response is a `College` object.)
         * </em>
         */
        R.colleges.updateById = function() {
          var TargetResource = $injector.get("College");
          var action = TargetResource["::updateById::University::colleges"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.College
 * @header lbServices.College
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `College` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "College",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Colleges/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use College.university() instead.
        "prototype$__get__university": {
          url: urlBase + "/Colleges/:id/university",
          method: "GET"
        },

        // INTERNAL. Use College.majors.findById() instead.
        "prototype$__findById__majors": {
          url: urlBase + "/Colleges/:id/majors/:fk",
          method: "GET"
        },

        // INTERNAL. Use College.majors.destroyById() instead.
        "prototype$__destroyById__majors": {
          url: urlBase + "/Colleges/:id/majors/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use College.majors.updateById() instead.
        "prototype$__updateById__majors": {
          url: urlBase + "/Colleges/:id/majors/:fk",
          method: "PUT"
        },

        // INTERNAL. Use College.majors() instead.
        "prototype$__get__majors": {
          isArray: true,
          url: urlBase + "/Colleges/:id/majors",
          method: "GET"
        },

        // INTERNAL. Use College.majors.create() instead.
        "prototype$__create__majors": {
          url: urlBase + "/Colleges/:id/majors",
          method: "POST"
        },

        // INTERNAL. Use College.majors.destroyAll() instead.
        "prototype$__delete__majors": {
          url: urlBase + "/Colleges/:id/majors",
          method: "DELETE"
        },

        // INTERNAL. Use College.majors.count() instead.
        "prototype$__count__majors": {
          url: urlBase + "/Colleges/:id/majors/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.College#create
         * @methodOf lbServices.College
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
         * This usually means the response is a `College` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Colleges",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.College#upsert
         * @methodOf lbServices.College
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
         * This usually means the response is a `College` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Colleges",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.College#exists
         * @methodOf lbServices.College
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
          url: urlBase + "/Colleges/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.College#findById
         * @methodOf lbServices.College
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
         * This usually means the response is a `College` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Colleges/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.College#find
         * @methodOf lbServices.College
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
         * This usually means the response is a `College` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Colleges",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.College#findOne
         * @methodOf lbServices.College
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
         * This usually means the response is a `College` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Colleges/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.College#updateAll
         * @methodOf lbServices.College
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
          url: urlBase + "/Colleges/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.College#deleteById
         * @methodOf lbServices.College
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
          url: urlBase + "/Colleges/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.College#count
         * @methodOf lbServices.College
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
          url: urlBase + "/Colleges/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.College#prototype$updateAttributes
         * @methodOf lbServices.College
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
         * This usually means the response is a `College` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Colleges/:id",
          method: "PUT"
        },

        // INTERNAL. Use Major.college() instead.
        "::get::Major::college": {
          url: urlBase + "/Majors/:id/college",
          method: "GET"
        },

        // INTERNAL. Use University.colleges.findById() instead.
        "::findById::University::colleges": {
          url: urlBase + "/Universities/:id/colleges/:fk",
          method: "GET"
        },

        // INTERNAL. Use University.colleges.destroyById() instead.
        "::destroyById::University::colleges": {
          url: urlBase + "/Universities/:id/colleges/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use University.colleges.updateById() instead.
        "::updateById::University::colleges": {
          url: urlBase + "/Universities/:id/colleges/:fk",
          method: "PUT"
        },

        // INTERNAL. Use University.colleges() instead.
        "::get::University::colleges": {
          isArray: true,
          url: urlBase + "/Universities/:id/colleges",
          method: "GET"
        },

        // INTERNAL. Use University.colleges.create() instead.
        "::create::University::colleges": {
          url: urlBase + "/Universities/:id/colleges",
          method: "POST"
        },

        // INTERNAL. Use University.colleges.destroyAll() instead.
        "::delete::University::colleges": {
          url: urlBase + "/Universities/:id/colleges",
          method: "DELETE"
        },

        // INTERNAL. Use University.colleges.count() instead.
        "::count::University::colleges": {
          url: urlBase + "/Universities/:id/colleges/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.College#updateOrCreate
         * @methodOf lbServices.College
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
         * This usually means the response is a `College` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.College#update
         * @methodOf lbServices.College
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
         * @name lbServices.College#destroyById
         * @methodOf lbServices.College
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
         * @name lbServices.College#removeById
         * @methodOf lbServices.College
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
    * @name lbServices.College#modelName
    * @propertyOf lbServices.College
    * @description
    * The name of the model represented by this $resource,
    * i.e. `College`.
    */
    R.modelName = "College";


        /**
         * @ngdoc method
         * @name lbServices.College#university
         * @methodOf lbServices.College
         *
         * @description
         *
         * Fetches belongsTo relation university
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
         * This usually means the response is a `University` object.)
         * </em>
         */
        R.university = function() {
          var TargetResource = $injector.get("University");
          var action = TargetResource["::get::College::university"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.College.majors
     * @header lbServices.College.majors
     * @object
     * @description
     *
     * The object `College.majors` groups methods
     * manipulating `Major` instances related to `College`.
     *
     * Call {@link lbServices.College#majors College.majors()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.College#majors
         * @methodOf lbServices.College
         *
         * @description
         *
         * Queries majors of College.
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
          var action = TargetResource["::get::College::majors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.College.majors#count
         * @methodOf lbServices.College.majors
         *
         * @description
         *
         * Counts majors of College.
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
          var action = TargetResource["::count::College::majors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.College.majors#create
         * @methodOf lbServices.College.majors
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
          var action = TargetResource["::create::College::majors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.College.majors#destroyAll
         * @methodOf lbServices.College.majors
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
          var action = TargetResource["::delete::College::majors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.College.majors#destroyById
         * @methodOf lbServices.College.majors
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
          var action = TargetResource["::destroyById::College::majors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.College.majors#findById
         * @methodOf lbServices.College.majors
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
          var action = TargetResource["::findById::College::majors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.College.majors#updateById
         * @methodOf lbServices.College.majors
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
          var action = TargetResource["::updateById::College::majors"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Country
 * @header lbServices.Country
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Country` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Country",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Countries/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Country.regions.findById() instead.
        "prototype$__findById__regions": {
          url: urlBase + "/Countries/:id/regions/:fk",
          method: "GET"
        },

        // INTERNAL. Use Country.regions.destroyById() instead.
        "prototype$__destroyById__regions": {
          url: urlBase + "/Countries/:id/regions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Country.regions.updateById() instead.
        "prototype$__updateById__regions": {
          url: urlBase + "/Countries/:id/regions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Country.regions() instead.
        "prototype$__get__regions": {
          isArray: true,
          url: urlBase + "/Countries/:id/regions",
          method: "GET"
        },

        // INTERNAL. Use Country.regions.create() instead.
        "prototype$__create__regions": {
          url: urlBase + "/Countries/:id/regions",
          method: "POST"
        },

        // INTERNAL. Use Country.regions.destroyAll() instead.
        "prototype$__delete__regions": {
          url: urlBase + "/Countries/:id/regions",
          method: "DELETE"
        },

        // INTERNAL. Use Country.regions.count() instead.
        "prototype$__count__regions": {
          url: urlBase + "/Countries/:id/regions/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Country#create
         * @methodOf lbServices.Country
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
         * This usually means the response is a `Country` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Countries",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Country#upsert
         * @methodOf lbServices.Country
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
         * This usually means the response is a `Country` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Countries",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Country#exists
         * @methodOf lbServices.Country
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
          url: urlBase + "/Countries/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Country#findById
         * @methodOf lbServices.Country
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
         * This usually means the response is a `Country` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Countries/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Country#find
         * @methodOf lbServices.Country
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
         * This usually means the response is a `Country` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Countries",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Country#findOne
         * @methodOf lbServices.Country
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
         * This usually means the response is a `Country` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Countries/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Country#updateAll
         * @methodOf lbServices.Country
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
          url: urlBase + "/Countries/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Country#deleteById
         * @methodOf lbServices.Country
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
          url: urlBase + "/Countries/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Country#count
         * @methodOf lbServices.Country
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
          url: urlBase + "/Countries/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Country#prototype$updateAttributes
         * @methodOf lbServices.Country
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
         * This usually means the response is a `Country` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Countries/:id",
          method: "PUT"
        },

        // INTERNAL. Use Region.country() instead.
        "::get::Region::country": {
          url: urlBase + "/Regions/:id/country",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Country#updateOrCreate
         * @methodOf lbServices.Country
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
         * This usually means the response is a `Country` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Country#update
         * @methodOf lbServices.Country
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
         * @name lbServices.Country#destroyById
         * @methodOf lbServices.Country
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
         * @name lbServices.Country#removeById
         * @methodOf lbServices.Country
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
    * @name lbServices.Country#modelName
    * @propertyOf lbServices.Country
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Country`.
    */
    R.modelName = "Country";

    /**
     * @ngdoc object
     * @name lbServices.Country.regions
     * @header lbServices.Country.regions
     * @object
     * @description
     *
     * The object `Country.regions` groups methods
     * manipulating `Region` instances related to `Country`.
     *
     * Call {@link lbServices.Country#regions Country.regions()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Country#regions
         * @methodOf lbServices.Country
         *
         * @description
         *
         * Queries regions of Country.
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
         * This usually means the response is a `Region` object.)
         * </em>
         */
        R.regions = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::get::Country::regions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Country.regions#count
         * @methodOf lbServices.Country.regions
         *
         * @description
         *
         * Counts regions of Country.
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
        R.regions.count = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::count::Country::regions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Country.regions#create
         * @methodOf lbServices.Country.regions
         *
         * @description
         *
         * Creates a new instance in regions of this model.
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
         * This usually means the response is a `Region` object.)
         * </em>
         */
        R.regions.create = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::create::Country::regions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Country.regions#destroyAll
         * @methodOf lbServices.Country.regions
         *
         * @description
         *
         * Deletes all regions of this model.
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
        R.regions.destroyAll = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::delete::Country::regions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Country.regions#destroyById
         * @methodOf lbServices.Country.regions
         *
         * @description
         *
         * Delete a related item by id for regions
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for regions
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
        R.regions.destroyById = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::destroyById::Country::regions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Country.regions#findById
         * @methodOf lbServices.Country.regions
         *
         * @description
         *
         * Find a related item by id for regions
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for regions
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
         * This usually means the response is a `Region` object.)
         * </em>
         */
        R.regions.findById = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::findById::Country::regions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Country.regions#updateById
         * @methodOf lbServices.Country.regions
         *
         * @description
         *
         * Update a related item by id for regions
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for regions
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
         * This usually means the response is a `Region` object.)
         * </em>
         */
        R.regions.updateById = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::updateById::Country::regions"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Region
 * @header lbServices.Region
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Region` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Region",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Regions/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Region.country() instead.
        "prototype$__get__country": {
          url: urlBase + "/Regions/:id/country",
          method: "GET"
        },

        // INTERNAL. Use Region.cities.findById() instead.
        "prototype$__findById__cities": {
          url: urlBase + "/Regions/:id/cities/:fk",
          method: "GET"
        },

        // INTERNAL. Use Region.cities.destroyById() instead.
        "prototype$__destroyById__cities": {
          url: urlBase + "/Regions/:id/cities/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Region.cities.updateById() instead.
        "prototype$__updateById__cities": {
          url: urlBase + "/Regions/:id/cities/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Region.cities() instead.
        "prototype$__get__cities": {
          isArray: true,
          url: urlBase + "/Regions/:id/cities",
          method: "GET"
        },

        // INTERNAL. Use Region.cities.create() instead.
        "prototype$__create__cities": {
          url: urlBase + "/Regions/:id/cities",
          method: "POST"
        },

        // INTERNAL. Use Region.cities.destroyAll() instead.
        "prototype$__delete__cities": {
          url: urlBase + "/Regions/:id/cities",
          method: "DELETE"
        },

        // INTERNAL. Use Region.cities.count() instead.
        "prototype$__count__cities": {
          url: urlBase + "/Regions/:id/cities/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Region#create
         * @methodOf lbServices.Region
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
         * This usually means the response is a `Region` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Regions",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Region#upsert
         * @methodOf lbServices.Region
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
         * This usually means the response is a `Region` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Regions",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Region#exists
         * @methodOf lbServices.Region
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
          url: urlBase + "/Regions/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Region#findById
         * @methodOf lbServices.Region
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
         * This usually means the response is a `Region` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Regions/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Region#find
         * @methodOf lbServices.Region
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
         * This usually means the response is a `Region` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Regions",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Region#findOne
         * @methodOf lbServices.Region
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
         * This usually means the response is a `Region` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Regions/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Region#updateAll
         * @methodOf lbServices.Region
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
          url: urlBase + "/Regions/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Region#deleteById
         * @methodOf lbServices.Region
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
          url: urlBase + "/Regions/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Region#count
         * @methodOf lbServices.Region
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
          url: urlBase + "/Regions/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Region#prototype$updateAttributes
         * @methodOf lbServices.Region
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
         * This usually means the response is a `Region` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Regions/:id",
          method: "PUT"
        },

        // INTERNAL. Use Country.regions.findById() instead.
        "::findById::Country::regions": {
          url: urlBase + "/Countries/:id/regions/:fk",
          method: "GET"
        },

        // INTERNAL. Use Country.regions.destroyById() instead.
        "::destroyById::Country::regions": {
          url: urlBase + "/Countries/:id/regions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Country.regions.updateById() instead.
        "::updateById::Country::regions": {
          url: urlBase + "/Countries/:id/regions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Country.regions() instead.
        "::get::Country::regions": {
          isArray: true,
          url: urlBase + "/Countries/:id/regions",
          method: "GET"
        },

        // INTERNAL. Use Country.regions.create() instead.
        "::create::Country::regions": {
          url: urlBase + "/Countries/:id/regions",
          method: "POST"
        },

        // INTERNAL. Use Country.regions.destroyAll() instead.
        "::delete::Country::regions": {
          url: urlBase + "/Countries/:id/regions",
          method: "DELETE"
        },

        // INTERNAL. Use Country.regions.count() instead.
        "::count::Country::regions": {
          url: urlBase + "/Countries/:id/regions/count",
          method: "GET"
        },

        // INTERNAL. Use City.region() instead.
        "::get::City::region": {
          url: urlBase + "/Cities/:id/region",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Region#updateOrCreate
         * @methodOf lbServices.Region
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
         * This usually means the response is a `Region` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Region#update
         * @methodOf lbServices.Region
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
         * @name lbServices.Region#destroyById
         * @methodOf lbServices.Region
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
         * @name lbServices.Region#removeById
         * @methodOf lbServices.Region
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
    * @name lbServices.Region#modelName
    * @propertyOf lbServices.Region
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Region`.
    */
    R.modelName = "Region";


        /**
         * @ngdoc method
         * @name lbServices.Region#country
         * @methodOf lbServices.Region
         *
         * @description
         *
         * Fetches belongsTo relation country
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
         * This usually means the response is a `Country` object.)
         * </em>
         */
        R.country = function() {
          var TargetResource = $injector.get("Country");
          var action = TargetResource["::get::Region::country"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Region.cities
     * @header lbServices.Region.cities
     * @object
     * @description
     *
     * The object `Region.cities` groups methods
     * manipulating `City` instances related to `Region`.
     *
     * Call {@link lbServices.Region#cities Region.cities()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Region#cities
         * @methodOf lbServices.Region
         *
         * @description
         *
         * Queries cities of Region.
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
         * This usually means the response is a `City` object.)
         * </em>
         */
        R.cities = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::get::Region::cities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Region.cities#count
         * @methodOf lbServices.Region.cities
         *
         * @description
         *
         * Counts cities of Region.
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
        R.cities.count = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::count::Region::cities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Region.cities#create
         * @methodOf lbServices.Region.cities
         *
         * @description
         *
         * Creates a new instance in cities of this model.
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
         * This usually means the response is a `City` object.)
         * </em>
         */
        R.cities.create = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::create::Region::cities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Region.cities#destroyAll
         * @methodOf lbServices.Region.cities
         *
         * @description
         *
         * Deletes all cities of this model.
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
        R.cities.destroyAll = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::delete::Region::cities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Region.cities#destroyById
         * @methodOf lbServices.Region.cities
         *
         * @description
         *
         * Delete a related item by id for cities
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for cities
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
        R.cities.destroyById = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::destroyById::Region::cities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Region.cities#findById
         * @methodOf lbServices.Region.cities
         *
         * @description
         *
         * Find a related item by id for cities
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for cities
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
         * This usually means the response is a `City` object.)
         * </em>
         */
        R.cities.findById = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::findById::Region::cities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Region.cities#updateById
         * @methodOf lbServices.Region.cities
         *
         * @description
         *
         * Update a related item by id for cities
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for cities
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
         * This usually means the response is a `City` object.)
         * </em>
         */
        R.cities.updateById = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::updateById::Region::cities"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.PayType
 * @header lbServices.PayType
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `PayType` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "PayType",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/PayTypes/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.PayType#create
         * @methodOf lbServices.PayType
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
         * This usually means the response is a `PayType` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/PayTypes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.PayType#upsert
         * @methodOf lbServices.PayType
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
         * This usually means the response is a `PayType` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/PayTypes",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.PayType#exists
         * @methodOf lbServices.PayType
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
          url: urlBase + "/PayTypes/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.PayType#findById
         * @methodOf lbServices.PayType
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
         * This usually means the response is a `PayType` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/PayTypes/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.PayType#find
         * @methodOf lbServices.PayType
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
         * This usually means the response is a `PayType` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/PayTypes",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.PayType#findOne
         * @methodOf lbServices.PayType
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
         * This usually means the response is a `PayType` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/PayTypes/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.PayType#updateAll
         * @methodOf lbServices.PayType
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
          url: urlBase + "/PayTypes/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.PayType#deleteById
         * @methodOf lbServices.PayType
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
          url: urlBase + "/PayTypes/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.PayType#count
         * @methodOf lbServices.PayType
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
          url: urlBase + "/PayTypes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.PayType#prototype$updateAttributes
         * @methodOf lbServices.PayType
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
         * This usually means the response is a `PayType` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/PayTypes/:id",
          method: "PUT"
        },

        // INTERNAL. Use Review.payType() instead.
        "::get::Review::payType": {
          url: urlBase + "/Reviews/:id/payType",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.PayType#updateOrCreate
         * @methodOf lbServices.PayType
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
         * This usually means the response is a `PayType` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.PayType#update
         * @methodOf lbServices.PayType
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
         * @name lbServices.PayType#destroyById
         * @methodOf lbServices.PayType
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
         * @name lbServices.PayType#removeById
         * @methodOf lbServices.PayType
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
    * @name lbServices.PayType#modelName
    * @propertyOf lbServices.PayType
    * @description
    * The name of the model represented by this $resource,
    * i.e. `PayType`.
    */
    R.modelName = "PayType";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.City
 * @header lbServices.City
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `City` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "City",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Cities/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use City.region() instead.
        "prototype$__get__region": {
          url: urlBase + "/Cities/:id/region",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.City#create
         * @methodOf lbServices.City
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
         * This usually means the response is a `City` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Cities",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.City#upsert
         * @methodOf lbServices.City
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
         * This usually means the response is a `City` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Cities",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.City#exists
         * @methodOf lbServices.City
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
          url: urlBase + "/Cities/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.City#findById
         * @methodOf lbServices.City
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
         * This usually means the response is a `City` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Cities/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.City#find
         * @methodOf lbServices.City
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
         * This usually means the response is a `City` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Cities",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.City#findOne
         * @methodOf lbServices.City
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
         * This usually means the response is a `City` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Cities/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.City#updateAll
         * @methodOf lbServices.City
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
          url: urlBase + "/Cities/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.City#deleteById
         * @methodOf lbServices.City
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
          url: urlBase + "/Cities/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.City#count
         * @methodOf lbServices.City
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
          url: urlBase + "/Cities/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.City#prototype$updateAttributes
         * @methodOf lbServices.City
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
         * This usually means the response is a `City` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Cities/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.City#search
         * @methodOf lbServices.City
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `query` – `{string=}` -
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
         *  - `results` – `{object=}` -
         */
        "search": {
          url: urlBase + "/Cities/search",
          method: "GET"
        },

        // INTERNAL. Use Company.locations.findById() instead.
        "::findById::Company::locations": {
          url: urlBase + "/Companies/:id/locations/:fk",
          method: "GET"
        },

        // INTERNAL. Use Company.locations.destroyById() instead.
        "::destroyById::Company::locations": {
          url: urlBase + "/Companies/:id/locations/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Company.locations.updateById() instead.
        "::updateById::Company::locations": {
          url: urlBase + "/Companies/:id/locations/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Company.locations.link() instead.
        "::link::Company::locations": {
          url: urlBase + "/Companies/:id/locations/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Company.locations.unlink() instead.
        "::unlink::Company::locations": {
          url: urlBase + "/Companies/:id/locations/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Company.locations.exists() instead.
        "::exists::Company::locations": {
          url: urlBase + "/Companies/:id/locations/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Company.locations() instead.
        "::get::Company::locations": {
          isArray: true,
          url: urlBase + "/Companies/:id/locations",
          method: "GET"
        },

        // INTERNAL. Use Company.locations.create() instead.
        "::create::Company::locations": {
          url: urlBase + "/Companies/:id/locations",
          method: "POST"
        },

        // INTERNAL. Use Company.locations.destroyAll() instead.
        "::delete::Company::locations": {
          url: urlBase + "/Companies/:id/locations",
          method: "DELETE"
        },

        // INTERNAL. Use Company.locations.count() instead.
        "::count::Company::locations": {
          url: urlBase + "/Companies/:id/locations/count",
          method: "GET"
        },

        // INTERNAL. Use Region.cities.findById() instead.
        "::findById::Region::cities": {
          url: urlBase + "/Regions/:id/cities/:fk",
          method: "GET"
        },

        // INTERNAL. Use Region.cities.destroyById() instead.
        "::destroyById::Region::cities": {
          url: urlBase + "/Regions/:id/cities/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Region.cities.updateById() instead.
        "::updateById::Region::cities": {
          url: urlBase + "/Regions/:id/cities/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Region.cities() instead.
        "::get::Region::cities": {
          isArray: true,
          url: urlBase + "/Regions/:id/cities",
          method: "GET"
        },

        // INTERNAL. Use Region.cities.create() instead.
        "::create::Region::cities": {
          url: urlBase + "/Regions/:id/cities",
          method: "POST"
        },

        // INTERNAL. Use Region.cities.destroyAll() instead.
        "::delete::Region::cities": {
          url: urlBase + "/Regions/:id/cities",
          method: "DELETE"
        },

        // INTERNAL. Use Region.cities.count() instead.
        "::count::Region::cities": {
          url: urlBase + "/Regions/:id/cities/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.City#updateOrCreate
         * @methodOf lbServices.City
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
         * This usually means the response is a `City` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.City#update
         * @methodOf lbServices.City
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
         * @name lbServices.City#destroyById
         * @methodOf lbServices.City
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
         * @name lbServices.City#removeById
         * @methodOf lbServices.City
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
    * @name lbServices.City#modelName
    * @propertyOf lbServices.City
    * @description
    * The name of the model represented by this $resource,
    * i.e. `City`.
    */
    R.modelName = "City";


        /**
         * @ngdoc method
         * @name lbServices.City#region
         * @methodOf lbServices.City
         *
         * @description
         *
         * Fetches belongsTo relation region
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
         * This usually means the response is a `Region` object.)
         * </em>
         */
        R.region = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::get::City::region"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Industry
 * @header lbServices.Industry
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Industry` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Industry",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Industries/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Industry#create
         * @methodOf lbServices.Industry
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
         * This usually means the response is a `Industry` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Industries",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Industry#upsert
         * @methodOf lbServices.Industry
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
         * This usually means the response is a `Industry` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Industries",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Industry#exists
         * @methodOf lbServices.Industry
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
          url: urlBase + "/Industries/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Industry#findById
         * @methodOf lbServices.Industry
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
         * This usually means the response is a `Industry` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Industries/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Industry#find
         * @methodOf lbServices.Industry
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
         * This usually means the response is a `Industry` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Industries",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Industry#findOne
         * @methodOf lbServices.Industry
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
         * This usually means the response is a `Industry` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Industries/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Industry#updateAll
         * @methodOf lbServices.Industry
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
          url: urlBase + "/Industries/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Industry#deleteById
         * @methodOf lbServices.Industry
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
          url: urlBase + "/Industries/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Industry#count
         * @methodOf lbServices.Industry
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
          url: urlBase + "/Industries/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Industry#prototype$updateAttributes
         * @methodOf lbServices.Industry
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
         * This usually means the response is a `Industry` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Industries/:id",
          method: "PUT"
        },

        // INTERNAL. Use Company.industries.findById() instead.
        "::findById::Company::industries": {
          url: urlBase + "/Companies/:id/industries/:fk",
          method: "GET"
        },

        // INTERNAL. Use Company.industries.destroyById() instead.
        "::destroyById::Company::industries": {
          url: urlBase + "/Companies/:id/industries/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Company.industries.updateById() instead.
        "::updateById::Company::industries": {
          url: urlBase + "/Companies/:id/industries/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Company.industries.link() instead.
        "::link::Company::industries": {
          url: urlBase + "/Companies/:id/industries/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Company.industries.unlink() instead.
        "::unlink::Company::industries": {
          url: urlBase + "/Companies/:id/industries/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Company.industries.exists() instead.
        "::exists::Company::industries": {
          url: urlBase + "/Companies/:id/industries/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Company.industries() instead.
        "::get::Company::industries": {
          isArray: true,
          url: urlBase + "/Companies/:id/industries",
          method: "GET"
        },

        // INTERNAL. Use Company.industries.create() instead.
        "::create::Company::industries": {
          url: urlBase + "/Companies/:id/industries",
          method: "POST"
        },

        // INTERNAL. Use Company.industries.destroyAll() instead.
        "::delete::Company::industries": {
          url: urlBase + "/Companies/:id/industries",
          method: "DELETE"
        },

        // INTERNAL. Use Company.industries.count() instead.
        "::count::Company::industries": {
          url: urlBase + "/Companies/:id/industries/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Industry#updateOrCreate
         * @methodOf lbServices.Industry
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
         * This usually means the response is a `Industry` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Industry#update
         * @methodOf lbServices.Industry
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
         * @name lbServices.Industry#destroyById
         * @methodOf lbServices.Industry
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
         * @name lbServices.Industry#removeById
         * @methodOf lbServices.Industry
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
    * @name lbServices.Industry#modelName
    * @propertyOf lbServices.Industry
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Industry`.
    */
    R.modelName = "Industry";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.SuggestedEdit
 * @header lbServices.SuggestedEdit
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `SuggestedEdit` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "SuggestedEdit",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/SuggestedEdits/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use SuggestedEdit.company() instead.
        "prototype$__get__company": {
          url: urlBase + "/SuggestedEdits/:id/company",
          method: "GET"
        },

        // INTERNAL. Use SuggestedEdit.user() instead.
        "prototype$__get__user": {
          url: urlBase + "/SuggestedEdits/:id/user",
          method: "GET"
        },

        // INTERNAL. Use SuggestedEdit.user.create() instead.
        "prototype$__create__user": {
          url: urlBase + "/SuggestedEdits/:id/user",
          method: "POST"
        },

        // INTERNAL. Use SuggestedEdit.user.update() instead.
        "prototype$__update__user": {
          url: urlBase + "/SuggestedEdits/:id/user",
          method: "PUT"
        },

        // INTERNAL. Use SuggestedEdit.user.destroy() instead.
        "prototype$__destroy__user": {
          url: urlBase + "/SuggestedEdits/:id/user",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.SuggestedEdit#create
         * @methodOf lbServices.SuggestedEdit
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
         * This usually means the response is a `SuggestedEdit` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/SuggestedEdits",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.SuggestedEdit#upsert
         * @methodOf lbServices.SuggestedEdit
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
         * This usually means the response is a `SuggestedEdit` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/SuggestedEdits",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.SuggestedEdit#exists
         * @methodOf lbServices.SuggestedEdit
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
          url: urlBase + "/SuggestedEdits/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SuggestedEdit#findById
         * @methodOf lbServices.SuggestedEdit
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
         * This usually means the response is a `SuggestedEdit` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/SuggestedEdits/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SuggestedEdit#find
         * @methodOf lbServices.SuggestedEdit
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
         * This usually means the response is a `SuggestedEdit` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/SuggestedEdits",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SuggestedEdit#findOne
         * @methodOf lbServices.SuggestedEdit
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
         * This usually means the response is a `SuggestedEdit` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/SuggestedEdits/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SuggestedEdit#updateAll
         * @methodOf lbServices.SuggestedEdit
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
          url: urlBase + "/SuggestedEdits/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.SuggestedEdit#deleteById
         * @methodOf lbServices.SuggestedEdit
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
          url: urlBase + "/SuggestedEdits/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.SuggestedEdit#count
         * @methodOf lbServices.SuggestedEdit
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
          url: urlBase + "/SuggestedEdits/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SuggestedEdit#prototype$updateAttributes
         * @methodOf lbServices.SuggestedEdit
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
         * This usually means the response is a `SuggestedEdit` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/SuggestedEdits/:id",
          method: "PUT"
        },

        // INTERNAL. Use Company.suggestedEdits.findById() instead.
        "::findById::Company::suggestedEdits": {
          url: urlBase + "/Companies/:id/suggestedEdits/:fk",
          method: "GET"
        },

        // INTERNAL. Use Company.suggestedEdits.destroyById() instead.
        "::destroyById::Company::suggestedEdits": {
          url: urlBase + "/Companies/:id/suggestedEdits/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Company.suggestedEdits.updateById() instead.
        "::updateById::Company::suggestedEdits": {
          url: urlBase + "/Companies/:id/suggestedEdits/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Company.suggestedEdits() instead.
        "::get::Company::suggestedEdits": {
          isArray: true,
          url: urlBase + "/Companies/:id/suggestedEdits",
          method: "GET"
        },

        // INTERNAL. Use Company.suggestedEdits.create() instead.
        "::create::Company::suggestedEdits": {
          url: urlBase + "/Companies/:id/suggestedEdits",
          method: "POST"
        },

        // INTERNAL. Use Company.suggestedEdits.destroyAll() instead.
        "::delete::Company::suggestedEdits": {
          url: urlBase + "/Companies/:id/suggestedEdits",
          method: "DELETE"
        },

        // INTERNAL. Use Company.suggestedEdits.count() instead.
        "::count::Company::suggestedEdits": {
          url: urlBase + "/Companies/:id/suggestedEdits/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.SuggestedEdit#updateOrCreate
         * @methodOf lbServices.SuggestedEdit
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
         * This usually means the response is a `SuggestedEdit` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.SuggestedEdit#update
         * @methodOf lbServices.SuggestedEdit
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
         * @name lbServices.SuggestedEdit#destroyById
         * @methodOf lbServices.SuggestedEdit
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
         * @name lbServices.SuggestedEdit#removeById
         * @methodOf lbServices.SuggestedEdit
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
    * @name lbServices.SuggestedEdit#modelName
    * @propertyOf lbServices.SuggestedEdit
    * @description
    * The name of the model represented by this $resource,
    * i.e. `SuggestedEdit`.
    */
    R.modelName = "SuggestedEdit";


        /**
         * @ngdoc method
         * @name lbServices.SuggestedEdit#company
         * @methodOf lbServices.SuggestedEdit
         *
         * @description
         *
         * Fetches belongsTo relation company
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
         * This usually means the response is a `Company` object.)
         * </em>
         */
        R.company = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::get::SuggestedEdit::company"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.SuggestedEdit.user
     * @header lbServices.SuggestedEdit.user
     * @object
     * @description
     *
     * The object `SuggestedEdit.user` groups methods
     * manipulating `User` instances related to `SuggestedEdit`.
     *
     * Call {@link lbServices.SuggestedEdit#user SuggestedEdit.user()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.SuggestedEdit#user
         * @methodOf lbServices.SuggestedEdit
         *
         * @description
         *
         * Fetches hasOne relation user
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
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.user = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::SuggestedEdit::user"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SuggestedEdit.user#create
         * @methodOf lbServices.SuggestedEdit.user
         *
         * @description
         *
         * Creates a new instance in user of this model.
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
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.user.create = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::create::SuggestedEdit::user"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SuggestedEdit.user#destroy
         * @methodOf lbServices.SuggestedEdit.user
         *
         * @description
         *
         * Deletes user of this model.
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
        R.user.destroy = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::destroy::SuggestedEdit::user"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SuggestedEdit.user#update
         * @methodOf lbServices.SuggestedEdit.user
         *
         * @description
         *
         * Update user of this model.
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
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.user.update = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::update::SuggestedEdit::user"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

  /**
   * @ngdoc object
   * @name lbServices.Event
   * @header lbServices.Event
   * @object
   *
   * @description
   *
   * A $resource object for interacting with the `Event` model.
   *
   * ## Example
   *
   * See
   * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
   * for an example of using this object.
   *
   */
  module.factory(
    "Event",
    ['LoopBackResource', 'LoopBackAuth', '$injector', function (Resource, LoopBackAuth, $injector) {
      var R = Resource(
        urlBase + "/Events/:id",
        {'id': '@id'},
        {

          // INTERNAL. Use Event.company() instead.
          "prototype$__get__company": {
            url: urlBase + "/Events/:id/company",
            method: "GET"
          },

          // INTERNAL. Use Event.university() instead.
          "prototype$__get__university": {
            url: urlBase + "/Events/:id/university",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.Event#create
           * @methodOf lbServices.Event
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
           * This usually means the response is a `Event` object.)
           * </em>
           */
          "create": {
            url: urlBase + "/Events",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name lbServices.Event#upsert
           * @methodOf lbServices.Event
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
           * This usually means the response is a `Event` object.)
           * </em>
           */
          "upsert": {
            url: urlBase + "/Events",
            method: "PUT"
          },

          /**
           * @ngdoc method
           * @name lbServices.Event#exists
           * @methodOf lbServices.Event
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
            url: urlBase + "/Events/:id/exists",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.Event#findById
           * @methodOf lbServices.Event
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
           * This usually means the response is a `Event` object.)
           * </em>
           */
          "findById": {
            url: urlBase + "/Events/:id",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.Event#find
           * @methodOf lbServices.Event
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
           * This usually means the response is a `Event` object.)
           * </em>
           */
          "find": {
            isArray: true,
            url: urlBase + "/Events",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.Event#findOne
           * @methodOf lbServices.Event
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
           * This usually means the response is a `Event` object.)
           * </em>
           */
          "findOne": {
            url: urlBase + "/Events/findOne",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.Event#updateAll
           * @methodOf lbServices.Event
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
            url: urlBase + "/Events/update",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name lbServices.Event#deleteById
           * @methodOf lbServices.Event
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
            url: urlBase + "/Events/:id",
            method: "DELETE"
          },

          /**
           * @ngdoc method
           * @name lbServices.Event#count
           * @methodOf lbServices.Event
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
            url: urlBase + "/Events/count",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.Event#prototype$updateAttributes
           * @methodOf lbServices.Event
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
           * This usually means the response is a `Event` object.)
           * </em>
           */
          "prototype$updateAttributes": {
            url: urlBase + "/Events/:id",
            method: "PUT"
          },

          // INTERNAL. Use Company.events.findById() instead.
          "::findById::Company::events": {
            url: urlBase + "/Companies/:id/events/:fk",
            method: "GET"
          },

          // INTERNAL. Use Company.events.destroyById() instead.
          "::destroyById::Company::events": {
            url: urlBase + "/Companies/:id/events/:fk",
            method: "DELETE"
          },

          // INTERNAL. Use Company.events.updateById() instead.
          "::updateById::Company::events": {
            url: urlBase + "/Companies/:id/events/:fk",
            method: "PUT"
          },

          // INTERNAL. Use Company.events() instead.
          "::get::Company::events": {
            isArray: true,
            url: urlBase + "/Companies/:id/events",
            method: "GET"
          },

          // INTERNAL. Use Company.events.create() instead.
          "::create::Company::events": {
            url: urlBase + "/Companies/:id/events",
            method: "POST"
          },

          // INTERNAL. Use Company.events.destroyAll() instead.
          "::delete::Company::events": {
            url: urlBase + "/Companies/:id/events",
            method: "DELETE"
          },

          // INTERNAL. Use Company.events.count() instead.
          "::count::Company::events": {
            url: urlBase + "/Companies/:id/events/count",
            method: "GET"
          },
        }
      );


      /**
       * @ngdoc method
       * @name lbServices.Event#updateOrCreate
       * @methodOf lbServices.Event
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
       * This usually means the response is a `Event` object.)
       * </em>
       */
      R["updateOrCreate"] = R["upsert"];

      /**
       * @ngdoc method
       * @name lbServices.Event#update
       * @methodOf lbServices.Event
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
       * @name lbServices.Event#destroyById
       * @methodOf lbServices.Event
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
       * @name lbServices.Event#removeById
       * @methodOf lbServices.Event
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
       * @name lbServices.Event#modelName
       * @propertyOf lbServices.Event
       * @description
       * The name of the model represented by this $resource,
       * i.e. `Event`.
       */
      R.modelName = "Event";


      /**
       * @ngdoc method
       * @name lbServices.Event#company
       * @methodOf lbServices.Event
       *
       * @description
       *
       * Fetches belongsTo relation company
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
       * This usually means the response is a `Company` object.)
       * </em>
       */
      R.company = function () {
        var TargetResource = $injector.get("Company");
        var action = TargetResource["::get::Event::company"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name lbServices.Event#university
       * @methodOf lbServices.Event
       *
       * @description
       *
       * Fetches belongsTo relation university
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
       * This usually means the response is a `University` object.)
       * </em>
       */
      R.university = function () {
        var TargetResource = $injector.get("University");
        var action = TargetResource["::get::Event::university"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Email
 * @header lbServices.Email
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Email` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Email",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Emails/:id",
      { 'id': '@id' },
      {
      }
    );




    /**
    * @ngdoc property
    * @name lbServices.Email#modelName
    * @propertyOf lbServices.Email
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Email`.
    */
    R.modelName = "Email";


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
