function filterArray(numbers, value) {
    //console.log(numbers);
    let theArray = [];
    //console.log(numbers.length);
    for (let i = 0; i < numbers.length; i++) {
        //console.log(numbers[i]);
        if (numbers[i] > value) {
            theArray.push(numbers[i]);
        }
    }
    return theArray;
}


console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
 console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76] 
