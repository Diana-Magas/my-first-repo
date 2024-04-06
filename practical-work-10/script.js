const SortLibrary = {
    bubbleSort: function(array, ascending = true) {
    },
    selectionSort: function(array, ascending = true) {
    },
    insertionSort: function(array, ascending = true) {
    }
};

(function(global) {
    function getRandomInt(max = 100) {
        return Math.floor(Math.random() * max);
    }

    function generateArray(n) {
        let array = [];
        for (let index = 0; index < n; index++) {
            array[index] = getRandomInt();
        }
        return array;
    }

    let array = generateArray(100);
    let array2 = [...array];
    let array3 = [...array];

    console.log(SortLibrary.bubbleSort(array, true));
    console.log(SortLibrary.bubbleSort(array));
    console.log(SortLibrary.selectionSort(array2, true));
    console.log(SortLibrary.selectionSort(array2));
    console.log(SortLibrary.insertionSort(array3, true));
    console.log(SortLibrary.insertionSort(array3));
})(window);

function generateRandomArray(length) {
    let array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * 1000));
    }
    return array;
}

let array = generateRandomArray(100);

console.log("Original Array:", array);
console.log("Bubble Sort (Ascending):", SortLibrary.bubbleSort([...array]));
console.log("Bubble Sort (Descending):", SortLibrary.bubbleSort([...array], false));
console.log("Selection Sort (Ascending):", SortLibrary.selectionSort([...array]));
console.log("Selection Sort (Descending):", SortLibrary.selectionSort([...array], false));
console.log("Insertion Sort (Ascending):", SortLibrary.insertionSort([...array]));
console.log("Insertion Sort (Descending):", SortLibrary.insertionSort([...array], false));


