Array.prototype.myFilter = function(callbackFn) {
    // Place your code here.
    let arr = [];
    for(let i = 0; i < this.length; i++)
    {
        if(callbackFn(this[i], i, this))
        {
            arr.push(this[i]);
        }
    }
    return arr;
  };

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.myFilter(word => word.length > 6);

console.log(result);

function isBigEnough(value) {
    return value >= 10;
  }
  
const filtered = [12, 5, 8, 130, 44].myFilter(isBigEnough);
console.log(filtered);

const arrayLike = {
    length: 3,
    0: "a",
    1: "b",
    2: "c",
  };
  console.log(Array.prototype.myFilter.call(arrayLike, (x) => x <= "b"));