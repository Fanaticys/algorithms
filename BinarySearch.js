// O(log n)

const search = (data, target) => {
  let midIndex = Math.floor(data.length / 2);
  let start = 0;
  let end = data.length - 1;

  while (true) {
    if (data[midIndex] === target) {
      return midIndex;
    } else if (start === end) {
      return null;
    } else if (data[midIndex] < target) {
      start = midIndex + 1;
      midIndex = Math.floor((end + start) / 2);
    } else if (data[midIndex] > target) {
      end = midIndex - 1;
      midIndex = Math.floor((end + start) / 2);
    }
  }
};

const data = [-3, 1, 2, 4, 5, 6, 8];
const target = Number(process.argv[2]);
const result = search(data, target);
console.log(result);