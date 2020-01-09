function separateNumbers(s) {
  /**
   * - split at '/n' and add everything to array, remove the first element later.
   * - 123
   * - 121314
   * - 91011
   * - 01234 X - directly 'NO'
   * - 99100101
   * - 99910001001
   * - 101112
   * - 10203
   * - 99999999999999100000000000000
   * - if a[anything other than 0th postion] = 0, return 'NO'
   * - while splitting if you encounter '9', immediately make the next split worth 2 characters, likewise with 99 -> 3 and 999 -> 4 and so on.
   * 
   */
  let input = s.split('\n');
  input.shift();
  console.log(input);

  for (let i = 0; i < input.length; i++) {
    const element = input[i];
    console.log(element);
    let currArray = [];
    let splitLength = 1;

    for (let j = 0; j < element.length; ) {
      let splitElem = element.split(j, splitLength);

      if (splitElem === "9") {
        currArray.push(splitElem);
        splitLength++;
      }
      

      // if (condition) {
      //   return 'YES '+element[0];
      // } else {
      //   return 'NO';
      // }
      
    }
    
  }

}

let someString =
`7
1234
91011
99100
101103
010203
13
1`;

separateNumbers(someString);