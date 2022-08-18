function countZeroes(numArray) {
  let left = 0;
  let right = numArray.length - 1;
  let mid = Math.floor((numArray.length -1)/2);

  while (left < right){
    numArray[mid] === 0 ? right = mid :  left = mid + 1;
    mid = Math.floor((left + right)/2);
  }
  let zeroCount = numArray[right] === 1 ? 0 : (numArray.length - left)
  return zeroCount
}

countZeroes([1,1,1,1,1,1,1,0,0,0,0]);

module.exports = countZeroes
