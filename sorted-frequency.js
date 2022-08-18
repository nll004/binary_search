function sortedFrequency(numArray, val) {
    let left = 0;
    let right = numArray.length - 1;
    let mid = Math.floor(numArray.length/2);
    let start;
    let count = 0;

    while(left !== right -1){
        numArray[mid] < val ? left = mid : right = mid;
        mid = Math.floor((left + right)/2);
    }
    numArray[left] === val ? start = left : start = right;

    while(numArray[start] === val){
        count ++;
        start ++;
    }

    if (count === 0){
        count = -1
    }

    return count
}

// sortedFrequency([1,1,2,2,2,3,3,3,4], 3)
// sortedFrequency([1,1,2,2,2,3,3,3,4], 4)
// sortedFrequency([1,1,2,2,2,3,3,3,4], 1)
// sortedFrequency([1,1,2,2,2,3,3,3,4], 0)

module.exports = sortedFrequency
