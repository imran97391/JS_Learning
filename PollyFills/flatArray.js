const arrone = [1, 2, [3, 4, [5, 6], 7, 8], 9, 10];

Array.prototype.flatOne =  function (deep) {
  let arr = [];
  let current = deep;
  function deepFalt(num) {
    if (typeof num == "object" && current>0) {
      current--;
      for (let i = 0; i < num.length; i++) {
        deepFalt(num[i])
      }
    } else {
      arr.push(num)
    }
  }

  for (let i = 0; this.length > i; i++) {
    deepFalt(this[i]);
  }

  return arr;
}

console.log(arrone.flatOne(3))