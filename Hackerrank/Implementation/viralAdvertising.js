function viralAdvertising(n) {
/**
    Day Shared Liked Cumulative
    1      5     2       2
    2      6     3       5
    3      9     4       9
    4     12     6      15
    5     18     9      24
 */

  /**
   * let shared = 5;
   * cumulative = 0;
   * 
   * Loop through 1 to n
   * liked = floor(shared/2)
   * shared = shared * 3
   * cumulative += liked
   * 
   * 
   * after loop return culumative
   * 
   */
  let shared = 5;
  let cumulative = 0;

   for (let i=1; i <= n; i++) {
     let liked = Math.floor(shared/2);
     shared = liked*3;

     cumulative += liked;
   }

   return cumulative;
}

viralAdvertising(6);