const match = (stringToMatch, matcher) => {
  console.log(stringToMatch, 'string');
  console.log(matcher, 'matcher');

  const matcherStartIndex = stringToMatch.indexOf(matcher.matcherString);
  console.log(matcherStartIndex);

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

  console.log(firstGlobPasses, 'pases');
  console.log(lastGlobPasses, 'passes');

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
        let letter = stringToMatch[index];
        let lastIndex = index;
        while (stringToMatch[lastIndex] === letter) {
          lastIndex++;
        }
        return lastIndex === stringToMatch.length;
      default:
        return;
    }
  }
};

module.exports = match;
