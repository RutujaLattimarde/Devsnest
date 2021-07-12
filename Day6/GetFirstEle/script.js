function firstEle(arr, n = 1) {
    var arrCopy = [];
  
    for (var i = 0; i < n; i++) {
      if (arr[i] === undefined) {
        break;
      }
      arrCopy[i] = arr[i];
    }
    return arrCopy;
  }
  
  console.log(firstEle([7, 9, 0, -2]));
  console.log(firstEle([], 3));
  console.log(firstEle([7, 9, 0, -2], 3));
  console.log(firstEle([7, 9, 0, -2], 6));
  console.log(firstEle([7, 9, 0, -2], -3));