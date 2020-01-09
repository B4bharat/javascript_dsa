function weightedUniformStrings(s, queries) {
/**
 * - Create the 'combinations' array.
 *   - sort the array in alphabetical order.
 *   - find the frequency of each alphabet
 *      - Loop through each alphabet from 1 to n, and multiply each instance with the weight of the alphabet and push it to the 'combinations' array.
 * - find each element from the 'queries' array in the 'combinations' array.
 */

  let combinations = [];
  let alphaWeights = {
    a:1, b:2, c:3, d:4, e:5, f:6, g:7, h:8, i:9, j:10, k:11, l:12, m:13, n:14, o:15, p:16, q:17, r:18, s:19, t:20, u:21, v:22, w:23, x:24, y:25, z:26
  };
  let givenString = s.toLowerCase().split('').sort().join('');
  let alphaFreq = {};
  
  for (const char of givenString) {
    if (!alphaFreq[char]) {
      alphaFreq[char] = 1;
    } else {
      alphaFreq[char]++;
    }
  }

  for (const key in alphaFreq) {
    if (alphaFreq.hasOwnProperty(key)) {
      for (let i = 1; i <= alphaFreq[key]; i++) {
        let weight = alphaWeights[key];
        combinations.push(weight * i);
      }
    }
  }

  let result = queries.map(query => {
    if (combinations.includes(query)) {
     return 'Yes';
    } else {
     return 'No';
    }
  });
  
  return result;

}

let result = weightedUniformStrings('accBddde', [1, 3, 12, 5, 9, 10]);