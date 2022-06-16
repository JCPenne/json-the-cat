const fetcher = require('./breedFetcher');
const process = argv.process.slice(2);
const apiSearch = 'https://api.thecatapi.com/v1/breeds/search?q=';
const dynamicSearch = apiSearch + args;

