const { nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("It worked! Returned IP:", ip);
// });

// fetchCoordsByIP("66.207.199.230", (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }

// })

// fetchISSFlyOverTimes({ latitude: '49.27670', longitude: '-123.13000' }, (err, data) => {
//     if (err) {
//     console.log(err);
//     return;
//   } else {
//     console.log(data);
//   }
// })

// const printPass = passtimes => {
//   for (const pass of passtimes) {
//     const date = new Date(0);
//   }
// }

const printPass = function(passTimes) {
  for (const pass of passTimes) {
    const date = new Date(0);
    console.log(date)
    date.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${date} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  console.log(passTimes)
  if (error) {
    return console.log("It didn't work...", error);
  }

  printPass(passTimes);
});