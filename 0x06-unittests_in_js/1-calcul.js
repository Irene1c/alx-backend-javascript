// The function should round a and b and evaluate depending on `type`

const calculateNumber = (type, a, b) => {
  if (type === 'SUM') {
    return Math.round(a) + Math.round(b);
  } else if (type === 'SUBTRACT') {
      return Math.round(a) - Math.round(b);
  } else if (type === 'DIVIDE') {
      bRound = Math.round(b);
      if (bRound === 0) {
        return ('Error')
      }
      return Math.round(a) / bRound;
  }
}

module.exports = calculateNumber;
