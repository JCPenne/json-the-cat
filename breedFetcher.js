const request = require('request');
// console.log(args[0]);

const fetchBreedDescription = (breedName, callback) => {
  request(breedname, (error, response, body) => {
    if (error) {
      console.log(error);
    }
    const data = JSON.parse(body);
    console.log(data[0].description);
  });
};

module.exports = fetchBreedDescription;
