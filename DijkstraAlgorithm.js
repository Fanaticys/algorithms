const data = {
  A: {
    B: 2,
    D: 8,
  },
  B: {
    A: 2,
    D: 5,
    E: 6,
  },
  D: {
    A: 8,
    B: 5,
    E: 3,
    F: 2,
  },
  E: {
    B: 6,
    D: 3,
    F: 1,
    C: 9,
  },
  F: {
    D:2,
    E:1,
    C:3,
  },
  C: {
    E:9,
    F:3,
  }
}

const search = (data, start, end) => {
  const info = Object.keys(data).reduce((acc, el) => {
    if (start == el) acc[el] = { prev: null, distance: 0 }
    else acc[el] = { prev: null, distance: Infinity }
    return acc
  }, {})
  const visited = []
  const unvisited = Object.keys(data)

  while (unvisited.length) {
    const item = Object.keys(info).reduce((acc, item) => {
      if (visited.includes(item)) return acc
      else if (!acc) return item
      else if (info[item].distance < info[acc].distance) return item
      return acc
    }, null)

    unvisited.splice(unvisited.findIndex((el) => el === item), 1)

    const directions = data[item]
    Object.keys(directions).forEach((direction) => {
      const distance = directions[direction] + info[item].distance
      if (distance < info[direction].distance) {
        info[direction].prev = item
        info[direction].distance = distance
      }
    })
    visited.push(item)
  }

  const path = []

  let next = end
  while (next !== start) {
    path.unshift({ point: next, distance: info[next].distance - info[info[next].prev].distance })
    next = info[next].prev
  }

  path.unshift({ point: start, distance: null })

  return path
}

console.log(search(data, 'A', 'C'))