function makeArray(firstArray, secondArray, maxLength){
    let theArray = [];
    let combinedArray = theArray.concat(firstArray, secondArray);
    //console.log(combinedArray);
    let maxedArray = combinedArray.slice(0, maxLength);
    //console.log(maxedArray);
    // console.log(combinedArray.length); 
    if (maxLength <= combinedArray.length) {
        
        //console.log("ok");
        return maxedArray;
    } else {
        return []
    }
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"] 
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
