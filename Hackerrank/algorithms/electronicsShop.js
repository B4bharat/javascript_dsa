function getMoneySpent(keyboards, drives, b) {
    // keyboards - Array of Prices, drives - Array of drives, b - budget
    /**
     * - create a 'max' variable which saves the max value. [initial value]
     * - loop though one array over the other, check if the addition is greater than the 'max', then it becomes the new max.
     */
    let max = 0;

    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < drives.length; j++) {
            let currCombo = keyboards[i] + drives[j];

            if (currCombo > max && currCombo <= b) {
                max = currCombo;
            }
        }
        
    }

    return max === 0 ? -1 : max;

}

getMoneySpent([ 3, 1 ], [ 5, 2, 8 ], 10);