const request = require('request-promise-native');
// const { printPass } = require('./index.js');

const fetchMyIP = () => request('https://api.ipify.org/?format=json');

const fetchCoordsByIP = (body) => {
  const ip = JSON.parse(body).ip;
  return request(`https://ipvigilante.com/${ip}`);
};

const fetchISSFlyOverTimes = (coords) => {
  // You can define a variable as an object with the name of the keys and when attaching it to the relevant data with the same name, will inherit those values (?)
  const { latitude, longitude } = JSON.parse(coords).data;
  const url = `http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`;
  return request(url);
};

const nextISSTimesForMyLocation = () => {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((data) => {
      const { response } = JSON.parse(data);
      return response;
    });
};


module.exports = { nextISSTimesForMyLocation };