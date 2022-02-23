let arr = [2, 4, 1, 5, 4, 9, 7, 5, 2, 3];

for (i = 0; i < arr.length - 1; i++) {
  for (j = 0; j < arr.length - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; hai isko change kr le
    }
  }
}

console.log(arr);
