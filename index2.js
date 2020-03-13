const { nextISSTimesForMyLocation } = require('./iss_promised');
const { printPass } = require('./index.js');

// .then(onFulfilled(), onRejected())
// If onFulfilled/onRejected is not a function, it simply returns the received argument

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPass(passTimes);
  })
  // Wherever there is an error in the chain of promises, catch() will stop and return an error specifying where it failed
  .catch((error) => {
    console.log("It failed...", error);
  });