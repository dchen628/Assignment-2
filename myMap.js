//Map

Array.prototype.myMap = function(callbackFn) {
    // Place your code here.
    let arr = [];
    for(let i = 0; i < this.length; i++)
    {
        if(this[i] === undefined) continue;
        arr.push(callbackFn(this[i], i, this));
    }
    return arr;
  };

const array1 = [1,2,3,4,5];
//console.log(typeof array1.myMap);
//const map1 = array1.myMap(x => x * 2);
//console.log(map1);

const map2 = array1.myMap(x => x * 2);
console.log(map2);

const map3 = array1.myMap((value, index, array) => {
  const multiplier = 7;
  const offset = 2;
  return value * multiplier + offset + index + array.length;
})

console.log(map3);