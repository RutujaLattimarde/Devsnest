function array_Clone(obj) {
    return [...obj]; //using spread Operator
  }
  
  console.log(array_Clone([1, 2, 4, 0]));
  console.log(array_Clone([1, 2, [4, 0]]));