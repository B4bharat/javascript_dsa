function pageCount(n, p) {
    // n -> number of pages
    // p -> page we want to reach at
    /**
     * - Find the difference between the p and 1 and n and p
     * - check if p is even or odd
     * - if even, add 1 to the difference
     * - 5-3 = 2
     * - 3-1 = 2+1
     */
    let endDiff = n-p;
    let startDiff = p-1;
    let pagesToTurn;

    if ( endDiff < startDiff || endDiff === startDiff ) {
        if (n%2 === 0) {
            pagesToTurn = Math.floor((endDiff+1)/2);
        } else {
            pagesToTurn = Math.floor(endDiff/2);
        }
    } else {
        pagesToTurn = Math.floor((startDiff+1)/2);
    }

    return pagesToTurn;
}
// 1 -> 2,3 -> 4
// 6,7 -> 4,5

pageCount(7, 4)