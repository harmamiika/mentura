const analyzeMatcher = (matcher) => {
  const firstGlob = getGlob(matcher);

  const lastGlob = getGlob(matcher, false);

  const matcherString = matcher.slice(
    firstGlob ? 1 : 0,
    lastGlob ? matcher.length - 1 : matcher.length
  );

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

module.exports = analyzeMatcher;
