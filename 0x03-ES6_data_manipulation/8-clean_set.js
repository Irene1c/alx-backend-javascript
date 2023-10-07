// Function that returns a string of all the set values that start with a specific string
// The string contains all the values of the set separated by -
// When a value starts with startString you only append the rest of the string

export default function cleanSet(set, startString) {
  const stringArray = [];
  const values = set.values();

  for (const value of values) {
    if (typeof startString !== 'string' || startString === '') {
      return '';
    }
    if (typeof value === 'string') {
      if (value.startsWith(startString)) {
        stringArray.push(value.slice(startString.length));
      }
    }
  }
  return stringArray.join('-');
}
