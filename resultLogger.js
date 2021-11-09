const resultLogger = (result) => {
  if (result) {
    console.log('match');
  } else {
    console.log('no match');
  }
};

module.exports = resultLogger;
