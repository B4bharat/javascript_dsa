function countingSort(array, minimumValue, maximumValue) {
    /**
     * - initialize a 'count' array from minimumVal to maxVal, to 0.
     * - loop through the given array and create a hash array out of the 'count' array.
     * - shift the counts from left to right.
     * - 
     */
    let i = minimumValue,
        j = 0,
        len = array.length,
        count = [];

    for (i; i <= maximumValue; i++) {
        count[i] = 0;
    }
    console.log('setting up count', count);
    

    for(i = minimumValue; i < len; i++) {
        count[array[i]]++;
    }
    console.log('filled up count', count);

    for (i = minimumValue; i <= maximumValue; i++) {
        while (count[i] > 0) {
            array[j] = i;
            j++;
            count[i]--;
        }
    }
    console.log(array)
    
}

countingSort([5,3,2,0,6,4,3,6,10,0,3,2], 0, 10)