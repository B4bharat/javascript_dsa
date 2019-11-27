function angryProfessor(k, a) {

  /**
   * keep a count of numbers which are equal to or greater than 0
   * if count >= k, return 'NO', else 'YES'
   */

  let onTime = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] <= 0) {
      onTime++;
    }
  }

  if (onTime >= k) {
    return 'NO';
  } else {
    return 'YES';
  }

}

angryProfessor(3, [-1, -3, 4, 2]);