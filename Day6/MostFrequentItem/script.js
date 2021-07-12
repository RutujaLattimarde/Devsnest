var arr = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
var mostFreq = 1;
var count = 0;
var freqEle;
for (var i = 0; i < arr.length; i++) {
  for (var j = i; j < arr.length; j++) {
    if (arr[i] == arr[j]) 
        count++;
    if (mostFreq < count) {
      mostFreq = count;
      freqEle = arr[i];
    }
  }
  count = 0;
}

console.log(`${freqEle} ( ${mostFreq} times )`);