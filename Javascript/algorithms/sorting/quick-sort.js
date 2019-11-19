function qSort(arr) {
    if (arr.length == 0) {
        return [];
    }

    var left = [];
    var right = [];
    var pivot = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return qSort(left).concat(pivot, qSort(right));
}

let sortedArray = qSort([68,80,12,80,95,70,79,27,88,93]);
console.log(sortedArray);