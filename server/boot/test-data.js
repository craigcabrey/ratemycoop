module.exports = function (app) {
  var environment = process.env.NODE_ENV;
  if (typeof(environment) === 'undefined') {
    console.log('Entering development mode.');

    // User instances (with autologin)
    var testUsers = require("./dummydata/users.json");

    /**
     * Helper function
     * @param userobj
     */
    var mkUser = function(userobj) {
      app.models.User.create(userobj, function(err, success) {
        app.models.User.login(userobj, function(err, user) {
          console.log("User: " + userobj["email"] + "    password: " + userobj["password"]);
          console.log("    Autologin token: " + user.id);
        });
      });
    };

    for(var u in testUsers) {
      mkUser(testUsers[u]);
    }

    // Country, Region, and City instances

    // add countries
    var testCountries = require("./dummydata/countries.json");
    addAll(testCountries, app.models.Country);

    // add regions
    var testRegions = require("./dummydata/regions.json");
    addAll(testRegions, app.models.Region);

    // add cities
    var testCities = require("./dummydata/cities.json");
    addAll(testCities, app.models.City);

    // Universities
    var testUniversities = require("./dummydata/universities.json");
    addAll(testUniversities, app.models.University);

    // Colleges
    var testColleges = require("./dummydata/colleges.json");
    addAll(testColleges, app.models.College);

    // Majors
    var testMajors = require("./dummydata/majors.json");
    addAll(testMajors, app.models.Major);

    // PayTypes
    var testEnums = require("./dummydata/majors.json");
    addAll(testEnums, app.models.PayType);

    // Perks
    var testPerks = require("./dummydata/perks.json");
    addAll(testPerks, app.models.Perk);

    // Companies
    var testCompanies = require("./dummydata/companies.json");
    addAll(testCompanies, app.models.Company);

    // Reviews
    var testReviews = require("./dummydata/reviews.json");
    addAll(testReviews, app.models.Review);

    // Company Majors
    var testCompanyMajors = require("./dummydata/companyMajors.json");
    addAll(testCompanyMajors, app.models.CompanyMajor);

    // Locations
    var testLocations = require("./dummydata/locations.json");
    addAll(testLocations, app.models.Location);
  }
};


/**
 * Helper funciton for adding a list of data to their corresponding models
 * @param collection of models to add (list of json objects)
 * @param model of data being added (ex: app.models.Company)
 */
var addAll = function(collection, model) {
  for(var d in collection) {
    model.create(collection[d]);
  }
};
