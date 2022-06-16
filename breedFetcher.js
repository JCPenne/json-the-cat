const request = require('request');
const args = process.argv.slice(2);
console.log(args[0]);

const breedSearch = URL => {
  request(URL, (error, response, body) => {
    console.log(`URL = ${URL}`);
    console.log(`Response = ${response}`);
    if (error) {
      console.log(error);
    }
    console.log(body);
  });
};

breedSearch(args[0]);
