function catAndMouse(x, y, z) {
    /**
     * - Find a diff between x and z AND y and z
     * - print catA if 1st diff is greater, catB if 2nd diff is greater, mouse if both are equal
     */

    let catADiff = Math.abs(z - x);
    let catBDiff = Math.abs(z - y);

    if (catADiff === catBDiff) {
        console.log('Mouse C');
    } else if(catADiff > catBDiff) {
        console.log('Cat B');
    } else if (catADiff < catBDiff) {
        console.log('Cat A');
    }

}

catAndMouse()