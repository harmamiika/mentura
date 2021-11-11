const match = (stringToMatch, matcher) => {
  const matcherStartIndex = stringToMatch.indexOf(matcher.matcherString);

  if (matcherStartIndex === -1) {
    return false;
  }

  const firstGlobPasses = compareGlob(
    matcher.firstGlob,
    matcher.firstGlob ? matcherStartIndex - 1 : matcherStartIndex
  );
  const lastGlobPasses = compareGlob(
    matcher.lastGlob,
    matcher.lastGlob
      ? matcherStartIndex + matcher.matcherString.length + 1
      : matcherStartIndex + matcher.matcherString.length,
    false,
    stringToMatch
  );

  return firstGlobPasses && lastGlobPasses;
};

const compareGlob = (glob, index, isFirst = true, stringToMatch) => {
  if (isFirst) {
    switch (glob) {
      case '?':
        return index === 0;
      case '+':
        return index >= 0;
      case '*':
        return index >= -1;
      case null:
        return index === 0;
      default:
        return;
    }
  } else {
    switch (glob) {
      case '?':
        return index === stringToMatch.length;
      case '+':
        return index <= stringToMatch.length;
      case '*':
        return index <= stringToMatch.length + 1;
      case null:
        return index === stringToMatch.length;
      default:
        return;
    }
  }
};

module.exports = match;
