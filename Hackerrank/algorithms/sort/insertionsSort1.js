// Complete the insertionSort1 function below.
// function insertionSort1(n, arr) {

//   let lastRef = arr[arr.length - 1];
//   let regex = /,/gi;

//   for (let i = (arr.length - 2); i >= 0; i--) {
//     console.log(arr[i]);
//     console.log(lastRef)
//     if (arr[i] > lastRef && i !== 0) {
//       arr[i+1] = arr[i];
//       console.log(arr.toString().replace(regex, ' '));
//     } else {
//       arr[i+1] = lastRef;
//       console.log(arr.toString().replace(regex, ' '));
//       break;
//     }
//   }
// }

function insertionSort1(n, arr) {
  let i = n - 1;
  let currElement = arr[i];

  let j = i-1;
  let regex = /,/gi;

  for (; j >=0 ; j--) {
    if (currElement < arr[j]) {
      arr[j + 1] = arr[j];
      console.log(arr.toString().replace(regex, ' '));
    } else {
      break;
    }
  }

  arr[j + 1] = currElement;
  console.log(arr.toString().replace(regex, ' '));
}

insertionSort1(5, [2, 4, 6, 8, 3]);
