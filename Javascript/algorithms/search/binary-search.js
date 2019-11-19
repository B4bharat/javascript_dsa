function binarySearch(array, searchValue) {
    let start = 0;
    let end = array.length - 1;
    let pivot = Math.floor((start + end) / 2);

    while (array[pivot] !== searchValue && start < end) {
        if (searchValue < array[pivot]) {
            end = pivot - 1
        } else {
            start = pivot + 1
        }

        pivot = Math.floor((start + end) / 2);
    }

    return array[pivot] === searchValue ? pivot : false;
}

let arrayToSearch = [3, 5, 7, 9, 11, 13, 15, 17, 19];
let searchValue = 11;

let result = binarySearch(arrayToSearch, searchValue);
console.log(result);