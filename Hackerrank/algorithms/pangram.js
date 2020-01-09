function pangrams(s) {
  /**
   * - create a frequency object
   * - Object.values(object1).every(val => val >= 0)
   */
  let alphaFreq = {};
  let trimmed = s.replace(/\s/gi, '').toLowerCase();

  for (const char of trimmed.split('')) {
    if (alphaFreq[char] > 0) {
      alphaFreq[char]++;
    } else {
      alphaFreq[char] = 1;
    }
  }

  if (Object.keys(alphaFreq).length === 26 && Object.values(alphaFreq).every(val => val > 0)) {
    return 'pangram';
  } else {
    return 'not pangram';
  }
}

let someString = 'qmExzBIJmdELxyOFWv LOCmefk TwPhargKSPEqSxzveiun';
let result = pangrams(someString);
result