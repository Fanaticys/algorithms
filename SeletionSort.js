const selectionSort1 = (array) => {
  const arrayCopy = [...array];
  const result = [];

  while (arrayCopy.length) {
    let selectedIndex = 0;
    let selected = arrayCopy[selectedIndex];

    arrayCopy.forEach((value, index) => {
      if (value < selected) {
        selectedIndex = index;
        selected = value;
      }
    });

    arrayCopy.splice(selectedIndex, 1);
    result.push(selected);
  }

  return result;
};

const selectionSort2 = (array) => {
  const arr = array.slice();

  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  return arr;
};

const result = selectionSort1([3, 6, 1, 6, 8, 9, 10, 2, 4, 7, 11]);
const result2 = selectionSort2([3, 6, 1, 6, 8, 9, 10, 2, 4, 7, 11]);
console.log({ result, result2 });