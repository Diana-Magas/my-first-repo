SortLibrary.bubbleSort = function (array, reversed) {
    const compare = getCompare(reversed);
    let compareCount = 0;
    let swapCount = 0;
    while (!isSorted(array, reversed)) {
        for (let index = 0; index < array.length - 1; index++) {
            compareCount++;
            if (array[index] === undefined || array[index + 1] === undefined) {
                continue; 
            }
            if (compare(array[index], array[index + 1])) {
                swapCount++;
                let tempElem = array[index];
                array[index] = array[index + 1];
                array[index + 1] = tempElem;
            }
        }
    }
    console.log(`Compare count: ${compareCount}`);
    console.log(`Swap count: ${swapCount}`);
    return array;
}

SortLibrary.selectionSort = function (array, reversed) {
    const compare = getCompare(!reversed);
    let compareCount = 0;
    let swapCount = 0;
    for (let index = 0; index < array.length - 1; index++) {
        let min = index;
        for (let current = index + 1; current < array.length; current++) {
            compareCount++;
            if (array[current] === undefined || array[min] === undefined) {
                continue; 
            }
            if (compare(array[current], array[min])) {
                min = current;
            }
        }
        if (array[index] !== undefined && array[min] !== undefined) {
            swapCount++;
            let tempElem = array[index];
            array[index] = array[min];
            array[min] = tempElem;
        }
    }
    console.log(`Compare count: ${compareCount}`);
    console.log(`Swap count: ${swapCount}`);
    return array;
}

SortLibrary.insertionSort = function (array, reversed) {
    const compare = getCompare(reversed);
    let compareCount = 0;
    let swapCount = 0;
    for (let index = 1; index < array.length; index++) {
        let left = index - 1;
        if (isSorted(array, reversed)) {
            break;
        }
        while (left > -1 && array[left] !== undefined && array[left + 1] !== undefined && compare(array[left], array[left + 1])) {
            compareCount++;
            swapCount++;
            let tempElem = array[left + 1];
            array[left + 1] = array[left];
            array[left] = tempElem;
            left--;
        }
    }
    console.log(`Compare count: ${compareCount}`);
    console.log(`Swap count: ${swapCount}`);
    return array;
}
