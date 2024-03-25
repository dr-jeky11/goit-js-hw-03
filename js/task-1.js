function getLastElementMeta(array) {
    let lastElement = array[array.length - 1];
    let lastElementIndex = array.length - 1;
  return [lastElementIndex, lastElement]
}

console.log(getLastElementMeta(["apple"]));