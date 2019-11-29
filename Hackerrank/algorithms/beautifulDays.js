function beautifulDays(i, j, k) {
  let beautifulDays = 0;

  for (let ind = i; ind <= j; ind++) {
    let rev = parseInt(ind.toString().split('').reverse().join(''));

    if (Number.isInteger((ind - rev) / k)) {
      beautifulDays++;
    }
    
  }

  return beautifulDays;
}

beautifulDays(20, 23, 6);