const arrone = [1, 2, [3, 4, [5, 6], 7, 8], 9, 10];

Array.prototype.flatOne = function (deep) {
  let arr = [];
  let current = deep;
  function deepFalt(num) {
    if (typeof num == "object" && current > 0) {
      current--;
      for (let i = 0; i < num.length; i++) {
        deepFalt(num[i]);
      }
    } else {
      arr.push(num);
    }
  }

  for (let i = 0; this.length > i; i++) {
    deepFalt(this[i]);
  }

  return arr;
};

console.log(arrone.flatOne(3));

// another approach
Array.prototype.flatTwo = function (
  maxlevel = 1,
  currentlevel = 1,
  result = []
) {
  for (element of this) {
    if (Array.isArray(element) && currentlevel <= maxlevel) {
      element.flatTwo(maxlevel, currentlevel + 1, result);
    } else {
      result.push(element);
    }
  }
  return result
};

console.log(arrone.flatTwo(3))
console.log(arrone.flatTwo())
console.log(arrone.flatTwo(0))

