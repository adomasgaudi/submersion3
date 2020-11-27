"use strict";

var key = '0mLIzwXfZgItNIGGgYDZYqGSxHhiIkmE';

var getCity = function getCity(city) {
  var base, query, response, data;
  return regeneratorRuntime.async(function getCity$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
          query = "?apikey=".concat(key, "&q=").concat(city);
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch(base + query));

        case 4:
          response = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(response.json());

        case 7:
          data = _context.sent;
          return _context.abrupt("return", data[0]);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
};

var getCurrent = function getCurrent(lockey) {
  var base, query, response;
  return regeneratorRuntime.async(function getCurrent$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          base = 'http://dataservice.accuweather.com/currentconditions/v1/';
          query = "".concat(lockey, "?apikey=").concat(key);
          console.log("".concat(base).concat(query));
          _context2.next = 5;
          return regeneratorRuntime.awrap(fetch("".concat(base).concat(query)));

        case 5:
          response = _context2.sent;
          _context2.next = 8;
          return regeneratorRuntime.awrap(response.json());

        case 8:
          return _context2.abrupt("return", data = _context2.sent);

        case 9:
        case "end":
          return _context2.stop();
      }
    }
  });
};

getCity('vilnius').then(function (data) {
  console.log(data.Key);
  return getCurrent(data.Key);
}).then(function (resp) {
  console.log(resp);
})["catch"](function (err) {
  return console.log(err);
});

var updateCity = function updateCity(city) {
  var cityDets, weather;
  return regeneratorRuntime.async(function updateCity$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(getCity(city));

        case 2:
          cityDets = _context3.sent;
          _context3.next = 5;
          return regeneratorRuntime.awrap(getCurrent(cityDets.Key));

        case 5:
          weather = _context3.sent;
          return _context3.abrupt("return", {
            cityDets: "".concat(cityDets.AdministrativeArea.EnglishName, ", ").concat(cityDets.Country.ID),
            // cityData: cityDets,
            // weather: weather,
            weatherText: weather[0].WeatherText
          });

        case 7:
        case "end":
          return _context3.stop();
      }
    }
  });
};

updateCity('vilnius').then(function (data) {
  console.log('data be:', data);
});