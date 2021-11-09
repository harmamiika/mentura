const { analyzeMatcher } = require('./analyzeMatcher');
const { match } = require('./match');
const resultLogger = require('./resultLogger');

// read args
const stringToMatch = process.argv[2];
const matcher = process.argv[3];

// log args
console.log(stringToMatch, 'string');
console.log(matcher, 'matcher');

// const matchObject = analyzeMatcher(matcher) => return matcher = { letters, beginningGlob, endGlob }

const matcherObject = analyzeMatcher(matcher);

const result = match(stringToMatch, matcherObject);

// const answer = matchString(string, matchObject)

// log match tai not match
// clg(answer)
resultLogger(result);

// first make it accept string with args in the beginning only, then reuse loop
