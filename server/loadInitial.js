var server = require('./server');
var dataSource = server.dataSources.db;
var Company = server.models.Company;
var Perk = server.models.Perk;
var Major = server.models.Major;

var majors = [
  {
    code: 'SWEN',
    name: 'Software Engineer'
  }
];

var count = majors.length;
dataSource.automigrate('Major', function(er) {
  if (er) throw er;
  majors.forEach(function(major) {
    Major.create(major, function(er, result) {
      if (er) return;
      console.log('Record created:', result);
      count--;
      if(count === 0) {
        console.log('done');
        dataSource.disconnect();
      }
    });
  });
});

var companies = [
  {
    name: 'Datto, Inc.',
    url: 'http://www.datto.com/',
    logo: 'datto.png'
  },
  {
    name: 'Microsoft Corporation',
    url: 'http://www.microsoft.com/',
    logo: 'microsoft.png'
  }
];

var count = companies.length;
dataSource.automigrate('Company', function(er) {
  if (er) throw er;
  companies.forEach(function(company) {
    Company.create(company, function(er, result) {
      if (er) return;
      console.log('Record created:', result);
      count--;
      if(count === 0) {
        console.log('done');
        dataSource.disconnect();
      }
    });
  });
});

var perks = [
  {
    name: 'Free Food',
    icon: 'food'
  },
  {
    name: 'Free Snacks',
    icon: 'coffee'
  },
  {
    name: 'Provided Housing',
    icon: 'home'
  },
  {
    name: 'Subsidized Housing',
    icon: 'inverted home'
  },
  {
    name: 'Relocation',
    icon: 'plane'
  },
  {
    name: 'Insurance',
    icon: 'doctor'
  },
  {
    name: 'Hardware',
    icon: 'disk outline'
  },
  {
    name: 'Swag',
    icon: 'angelist'
  },
  {
    name: 'Standing Desk',
    icon: 'cube'
  }
];

var count = perks.length;
dataSource.automigrate('Perk', function(er) {
  if (er) throw er;
  perks.forEach(function(perk) {
    Perk.create(perk, function(er, result) {
      if (er) return;
      console.log('Record created:', result);
      count--;
      if(count === 0) {
        console.log('done');
        dataSource.disconnect();
      }
    });
  });
});
