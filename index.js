// Write an algorithm that takes an array and moves all of the zeros to the end,
// preserving the order of the other elements.

function moveZeros(arr) {
  let numberIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[numberIndex] = arr[i];
      numberIndex++;
    }
  }
  while (numberIndex < arr.length) {
    arr[numberIndex] = 0;
    numberIndex++;
  }
  return arr;
}

console.log(moveZeros([0, 1, 2, 3, 0, 0, 3, 4, 5]));
