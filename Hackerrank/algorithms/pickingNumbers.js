/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
  // Write your code here
  /**
   * - sort the array
   * - loop though the array and keep the first number as ref and keep diffing the subsequent indexes until the diff is greater than 1, and keep pushing it to a temp array
   * - when the diff is greater than 1, change the value of i and break the inner loop 
   */
  a = a.sort();
  console.log(a);
  let maxLength = 0;

  for (let i = 0; i < a.length; i++) {
    let temp = [a[i]];

    for (let j = i + 1; j < a.length; j++) {
      let diff = (a[j] - a[i]);

      if (diff <= 1) {
        temp.push(a[j]);
      } else {
        i = j - 1;
        break;
      }
    }

    maxLength < temp.length ? maxLength = temp.length : maxLength;

  }

  return maxLength;

}

let result = pickingNumbers([7, 12, 13, 19, 17, 7, 3, 18, 9, 18, 13, 12, 3, 13, 7, 9, 18, 9, 18, 9, 13, 18, 13, 13, 18, 18, 17, 17, 13, 3, 12, 13, 19, 17, 19, 12, 18, 13, 7, 3, 3, 12, 7, 13, 7, 3, 17, 9, 13, 13, 13, 12, 18, 18, 9, 7, 19, 17, 13, 18, 19, 9, 18, 18, 18, 19, 17, 7, 12, 3, 13, 19, 12, 3, 9, 17, 13, 19, 12, 18, 13, 18, 18, 18, 17, 13, 3, 18, 19, 7, 12, 9, 18, 3, 13, 13, 9, 7]);
console.log(result);