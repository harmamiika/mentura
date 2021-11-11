const analyzeMatcher = require('./analyzeMatcher');
const match = require('./match');
const resultLogger = require('./resultLogger');

// read args
const stringToMatch = process.argv[2];
const matcher = process.argv[3];

const matcherObject = analyzeMatcher(matcher);

const result = match(stringToMatch, matcherObject);

resultLogger(result);
