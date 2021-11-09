const analyzeMatcher = (matcher) => {
  const firstGlob = getGlob(matcher);
  console.log(firstGlob);

  const lastGlob = getGlob(matcher, false);
  console.log(lastGlob);

  const matcherString = matcher.slice(1, matcher.length - 2);
  console.log(matcherString);

  return { matcherString, firstGlob, lastGlob };
};

const getGlob = (matcher, isFirst = true) => {
  let index = isFirst ? 0 : matcher.length - 1;

  if (
    matcher[index] === '?' ||
    matcher[index] === '*' ||
    matcher[index] === '+'
  ) {
    return matcher[index];
  } else {
    return null;
  }
};

module.exports = { analyzeMatcher };

// very confused about what escaping means in this context exactly - pretty sure it's not this but i don't really have anything better tbh
// I'd appreciate it if you could take the time and give feedback about this!

// const escapeBackslashes = (matcher) => {
//   const backslashIndex = matcher.indexOf('\\');
//   if (backslashIndex === -1) {
//     return matcher;
//   } else if (backslashIndex === matcher.length - 1) {
//     return null;
//   } else {
//     return matcher; ?????????
//   }
// };
