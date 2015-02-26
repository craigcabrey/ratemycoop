module.exports = function (app) {
  var environment = process.env.NODE_ENV;
  if (typeof(environment) === 'undefined') {
    console.log('Entering development mode.');

    // User instance (with autologin)
    app.models.User.create(
      {
        email: 'test@rit.edu',
        password: 'potato'
      },
      function(err, success) {
        app.models.User.login(
          {
            email: 'test@rit.edu',
            password: 'potato'
          },
          function(err, user) {
            console.log('Autologin token: ' + user.id);
          }
        );
      }
    );

    // Country, Region, and City instances
    app.models.Country.create(
      {
        name: "United States",
        code: "US"
      }
    );
    app.models.Region.create(
      {
        name: "Potato",
        code: "PO",
        countryId: 1
      }
    );
    app.models.City.create(
      {
        name: "Potatoville",
        regionId: 1
      }
    );

    // University, College, and Major instances
    app.models.University.create(
      {
        name: "Rochester Institute of Technology",
        shortName: "RIT",
        domain: "rit.edu"
      }
    );
    app.models.College.create(
      {
        name: "Golisano College of Computing & Information Sciences",
        code: "GCCIS",
        universityId: 1
      }
    );
    app.models.Major.create(
      {
        name: "Software Engineering",
        code: "SWEN",
        collegeId: 1
      }
    );

    // PayType instance
    app.models.PayType.create(
      {
        name: "hourly"
      }
    );

    // Company, Review, and Perk instances
    app.models.Perk.create(
      {
        name: "Free Lunch Friday",
        icon: "food"
      }
    );
    app.models.Company.create(
      {
        name: "Datto, Inc.",
        url: "http://www.datto.com/",
        description: "One two potato.",
        logo: "datto.png",
        overallRating: 5.0,
        perks: [ 1 ]
      }
    );
    app.models.Review.create(
      {
        companyId: 1,
        anonymous: true,
        description: "Full of potatoes.",
        payTypeId: 1,
        userId: 1
      }
    );
    app.models.CompanyMajor.create(
      {
        companyId: 1,
        majorId: 1
      }
    );
    app.models.Location.create(
      {
        companyId: 1,
        cityId: 1
      }
    );
  }
};

