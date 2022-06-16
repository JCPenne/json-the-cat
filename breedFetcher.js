const request = require('request');
// console.log(args[0]);

const fetchBreedDescription = (breedName, callback) => {
  searchByBreed = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  request(searchByBreed, (error, response, body) => {
    const data = JSON.parse(body);

    if (data.length === 0) {
      return callback(error, null);
    }
    if (error) {
      return callback(error, null);
    }
    return callback(null, data[0].description);
  });
};

module.exports = fetchBreedDescription;
