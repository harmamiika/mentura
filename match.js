// find pattern - includes?
// if not => insta exit

const match = (stringToMatch, matcher) => {
  console.log(stringToMatch, 'string');
  console.log(matcher, 'matcher');

  const matcherStartIndex = stringToMatch.indexOf(matcher.matchString);
  if (matcherStartIndex === -1) {
    return false;
  }

  return;
};

// do another loop based on carachter === do a switch statement based on carachter
const compareGlob = (stringToMatch, glob, index) => {
  switch (glob) {
    case '/':
      return;
    case '*':
      return;
    case '+':
      return;
    default:
      return;
  }
};

// if matcher.startGlob === ? => if slicedstring.lenght === 1 {return success}
// ? -> if one letter -> good -> if more bad? {  }

// + -> one charachter after is a match with the spesific one on string -> loop?
// if slicedstring.lenghth >= 1 => returns success

// * -> anything is good after => {return success}
// \ -> ??? mitä tarkoittaa tämä - escapes? - cancel loop?
// else continue to the next one until the end

// do the same but opposite side + => -
// you can reuse loop

module.exports = { match };
