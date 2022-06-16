const request = require('request');
const args = process.argv.slice(2);
// console.log(args[0]);
const apiSearch = 'https://api.thecatapi.com/v1/breeds/search?q=';
const dynamicSearch = apiSearch + args;

const breedSearch = URL => {
  request(URL, (error, response, body) => {
    if (error) {
      console.log(error);
    }
    const data = JSON.parse(body);
    console.log(data[0].description);
    console.log(typeof data);
  });
};

breedSearch(dynamicSearch);
