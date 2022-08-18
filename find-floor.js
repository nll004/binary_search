function findFloor(numArray, val) {
  let left = 0;
  let right = numArray.length -1;
  let mid = Math.floor((numArray.length - 1)/2);

  while (left < right){
    if (numArray[mid] === val && numArray[mid -1] !== val){
        console.log('Floored val',numArray[mid -1])
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
    console.log('Val', numArray[mid], "Index:", left, mid, right )
  }
  console.log('Floored val not found')

  return -1
}
findFloor([1,2,3,4,5,6,7,8], 10)

module.exports = findFloor
