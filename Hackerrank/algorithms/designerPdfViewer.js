// Complete the designerPdfViewer function below.
function designerPdfViewer(h, word) {
  /**
   * - create an array of alphabets
   * - create an array which will hold the heights of the given word
   * - loop through the string and find the relative position of alphabet and its respective position in 'h' array
   * - sort the array which contains the height, height.sort(function (a, b) {
    return a - b;
  })
    - grab the highest value and multiply it with the length of the word string
   */

  let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let charHeights = [];

  for (const char of word) {
    charHeights.push(h[alphabets.indexOf(char)]);
  }

  charHeights = charHeights.sort(function (a, b) {
    return a - b;
  });

  return charHeights[charHeights.length - 1] * word.length;

}

let h = [1,3,1,3,1,4,1,3,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,7];
let result = designerPdfViewer(h, 'zaba');
result