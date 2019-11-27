function utopianTree(n) {
  /**
   * even (inc 0) +1
   * odd * 2
   */
  let height = 0;

  for (let i = 0; i <= n; i++) {
    if (i%2 === 0) {
      height++;
    } else {
      height = height*2;
    }
  }
  
  height

}
utopianTree(4);