const data = {
  'Alex': ['John', 'William', 'James'],
  'John': ['William'],
  'William': ['John'],
  'James': ['Alex'],
  'Harper': ['James']
};

const friends = ['John', 'Harper', 'James'];

function isDoctor(person) {
  return person === 'Harper';
}

function search(list) {
  let queue = [...list];
  let result;
  const searchedItems = [];


  while(queue.length) {
    const item = queue.shift();

    if (searchedItems.includes(item)) continue;
    
    searchedItems.push(item);

    if(isDoctor(item)) {
      result = item;
      break;
    } else {
      queue = [...queue, ...data[item]];
    }
  }

  return result;
}

console.log(search(friends));