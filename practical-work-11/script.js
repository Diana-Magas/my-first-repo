(function (global) {
    const SortLibrary = {};

    const isSorted = function (array, reversed) {
        return reversed
            ? array.every((value, index, item) => !index || item[index - 1] >= value)
            : array.every((value, index, item) => !index || item[index - 1] <= value);
    };

    function getCompare(reversed) {
        return reversed ? (left, right) => left < right : (left, right) => left > right;
    }

    SortLibrary.bubbleSort = function (array, reversed) {
        const compare = getCompare(reversed);
        let compareCount = 0;
        let swapCount = 0;
        while (!isSorted(array, reversed)) {
            for (let index = 0; index < array.length - 1; index++) {
                compareCount++;
                if (compare(array[index], array[index + 1])) {
                    swapCount++;
                    let tempElem = array[index];
                    array[index] = array[index + 1];
                    array[index + 1] = tempElem;
                }
            }
        }
        console.log(`Bubble Sort - Compare count: ${compareCount}`);
        console.log(`Bubble Sort - Swap count: ${swapCount}`);
        return array;
    };

    SortLibrary.selectionSort = function (array, reversed) {
        const compare = getCompare(!reversed);
        let compareCount = 0;
        let swapCount = 0;
        for (let index = 0; index < array.length - 1; index++) {
            let min = index;
            for (let current = index + 1; current < array.length; current++) {
                compareCount++;
                if (compare(array[current], array[min])) {
                    min = current;
                }
            }
            swapCount++;
            let tempElem = array[index];
            array[index] = array[min];
            array[min] = tempElem;
        }
        console.log(`Selection Sort - Compare count: ${compareCount}`);
        console.log(`Selection Sort - Swap count: ${swapCount}`);
        return array;
    };

    SortLibrary.insertionSort = function (array, reversed) {
        const compare = getCompare(reversed);
        let compareCount = 0;
        let swapCount = 0;
        for (let index = 1; index < array.length; index++) {
            let left = index - 1;
            if(isSorted(array, reversed)){
                break;
            }
            while (left > -1 && compare(array[left], array[left + 1])) {
                compareCount++;
                swapCount++;
                let tempElem = array[left + 1];
                array[left + 1] = array[left];
                array[left] = tempElem;
                left--;
            }
        }
        console.log(`Insertion Sort - Compare count: ${compareCount}`);
        console.log(`Insertion Sort - Swap count: ${swapCount}`);
        return array;
    };

    SortLibrary.shellSort = function (array, reversed) {
        const compare = getCompare(reversed);
        let compareCount = 0;
        let swapCount = 0;
        const n = array.length;
        let gap = Math.floor(n / 2);

        while (gap > 0) {
            for (let i = gap; i < n; i++) {
                let temp = array[i];
                let j = i;

                while (j >= gap && compare(array[j - gap], temp)) {
                    compareCount++;
                    swapCount++;
                    array[j] = array[j - gap];
                    j -= gap;
                }

                array[j] = temp;
            }
            gap = Math.floor(gap / 2);
        }

        console.log(`Shell Sort - Compare count: ${compareCount}`);
        console.log(`Shell Sort - Swap count: ${swapCount}`);
        return array;
    };

    function quickSort(array, reversed, compare, start = 0, end = array.length - 1) {
        if (start >= end) {
            return;
        }

        const pivotIndex = partition(array, reversed, compare, start, end);

        quickSort(array, reversed, compare, start, pivotIndex - 1);
        quickSort(array, reversed, compare, pivotIndex + 1, end);
    }

    function partition(array, reversed, compare, start, end) {
        const pivot = array[end];
        let i = start;

        for (let j = start; j < end; j++) {
            if (compare(array[j], pivot)) {
                [array[i], array[j]] = [array[j], array[i]];
                i++;
            }
        }

        [array[i], array[end]] = [array[end], array[i]];
        return i;
    }

    SortLibrary.quickSort = function (array, reversed) {
        const compare = getCompare(reversed);
        let compareCount = 0;

        quickSort(array, reversed, compare);

        console.log(`Quick Sort - Compare count: ${compareCount}`);
        return array;
    };

    global.SortLibrary = SortLibrary;
})(window);
//1.2.5
    const array = generateRandomArray(100);
const outputDiv = document.getElementById('output');
    
    outputDiv.innerHTML += "<h2>Bubble Sort</h2>";
    outputDiv.innerHTML += "Sorted Array: " + SortLibrary.bubbleSort([...array]).join(', ') + "<br>";

    outputDiv.innerHTML += "<h2>Selection Sort</h2>";
    outputDiv.innerHTML += "Sorted Array: " + SortLibrary.selectionSort([...array]).join(', ') + "<br>";

    outputDiv.innerHTML += "<h2>Insertion Sort</h2>";
    outputDiv.innerHTML += "Sorted Array: " + SortLibrary.insertionSort([...array]).join(', ') + "<br>";

    outputDiv.innerHTML += "<h2>Shell Sort</h2>";
    outputDiv.innerHTML += "Sorted Array: " + SortLibrary.shellSort([...array]).join(', ') + "<br>";

    outputDiv.innerHTML += "<h2>Quick Sort</h2>";
    outputDiv.innerHTML += "Sorted Array: " + SortLibrary.quickSort([...array]).join(', ') + "<br>";
//1.2.6
    function generateRandomArray(length) {
        const array = [];
        for (let i = 0; i < length; i++) {
            array.push(Math.floor(Math.random() * 1000)); 
        }
        return array;
    }

