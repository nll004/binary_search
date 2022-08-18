function findFloor(numArray, val) {
  let left = 0;
  let right = numArray.length -1;
  let mid = Math.floor((numArray.length - 1)/2);

  if (numArray[right] < val){
    return numArray[right]
  }

  while (left !== right - 1){
    if (numArray[mid] >= val && numArray[mid -1] < val){
        return numArray[mid -1]
    }
    else if(numArray[mid] < val){
        left = mid;
        mid = Math.floor((left + right)/2)
    }
    else if (numArray[mid] >= val){
        right = mid;
        mid = Math.floor((left + right)/2)
    }
  }
  return -1
}
// findFloor([1,2,3,4,5,6,7,8], 10)
// findFloor([1,2,3,4,5,6,7,8], 4)
// findFloor([1,2,3,4,5,6,7,8], 2)

module.exports = findFloor
