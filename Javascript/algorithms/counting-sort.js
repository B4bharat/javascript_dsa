function countingSort(array, minimumValue, maximumValue) {
    let i;
    let z = 0;
    var count = [];

    // creates a placeholder array to keep count of each array value
    for (i = minimumValue; i <= maximumValue; i++) {
        count[i] = 0;
    }

    console.log('placeholder count array', count);

    // Build up our index count array
    for (i = 0; i < array.length; i++) {
        count[array[i]]++;
    }

    console.log('filled count array', count);
    
    // Modify array and move elements into their sorted location.
    for (i = minimumValue; i <= maximumValue; i++) {
        console.log(count[i])
        while (count[i]-- > 0) {
            array[z++] = i;
        }
    }
    return array;
}

var array = [9,4,1,7,9,1,2,0]
countingSort(array, 0, 9)