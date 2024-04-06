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

    function isSorted(array, ascending) {
        const compare = ascending ? (a, b) => a <= b : (a, b) => a >= b;
        for (let i = 1; i < array.length; i++) {
            if (!compare(array[i - 1], array[i])) {
                return false;
            }
        }
        return true;
    }

    function swap(array, i, j) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    SortLibrary.bubbleSort = function(array, ascending = true) {
        const compare = ascending ? (a, b) => a > b : (a, b) => a < b;
        let compareCount = 0;
        let swapCount = 0;
        let sorted = false;
        for (let i = 0; i < array.length - 1 && !sorted; i++) {
            sorted = true;
            for (let j = 0; j < array.length - 1 - i; j++) {
                compareCount++;
                if (compare(array[j], array[j + 1])) {
                    swap(array, j, j + 1);
                    swapCount++;
                    sorted = false;
                }
            }
        }
        console.log(`Bubble sort compare count: ${compareCount}`);
        console.log(`Bubble sort swap count: ${swapCount}`);
        return array;
    };

    SortLibrary.selectionSort = function(array, ascending = true) {
        const compare = ascending ? (a, b) => a > b : (a, b) => a < b;
        let compareCount = 0;
        let swapCount = 0;
        for (let i = 0; i < array.length - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < array.length; j++) {
                compareCount++;
                if (compare(array[j], array[minIndex])) {
                    minIndex = j;
                }
            }
            if (i !== minIndex) {
                swap(array, i, minIndex);
                swapCount++;
            }
        }
        console.log(`Selection sort compare count: ${compareCount}`);
        console.log(`Selection sort swap count: ${swapCount}`);
        return array;
    };

    SortLibrary.insertionSort = function(array, ascending = true) {
        const compare = ascending ? (a, b) => a > b : (a, b) => a < b;
        let compareCount = 0;
        let swapCount = 0;
        for (let i = 1; i < array.length; i++) {
            let currentValue = array[i];
            let j = i - 1;
            while (j >= 0 && compare(array[j], currentValue)) {
                compareCount++;
                array[j + 1] = array[j];
                swapCount++;
                j--;
            }
            array[j + 1] = currentValue;
        }
        console.log(`Insertion sort compare count: ${compareCount}`);
        console.log(`Insertion sort swap count: ${swapCount}`);
        return array;
    };


    let array = generateArray(100);

    console.log(SortLibrary.bubbleSort([...array], true));
    console.log(SortLibrary.bubbleSort([...array]));
    console.log(SortLibrary.selectionSort([...array], true));
    console.log(SortLibrary.selectionSort([...array]));
    console.log(SortLibrary.insertionSort([...array], true));
    console.log(SortLibrary.insertionSort([...array]));
})(window);

