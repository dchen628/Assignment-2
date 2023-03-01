Array.prototype.myEvery = function(callbackFn) {
    // Place your code here.
    for(let i = 0; i < this.length; i++)
    {
        if(!callbackFn(this[i], i, this))
        {
            return false;
        }
    }
    return true;
  };
  
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [30, 39, 29, 10, 13, 39];

console.log(array1.myEvery(isBelowThreshold));


function isBigEnough(element, index, array) {
    return element >= 10;
  }
  console.log([12, 5, 8, 130, 44].myEvery(isBigEnough));
  console.log([12, 54, 18, 130, 44].myEvery(isBigEnough));

  const arrayLike = {
    length: 3,
    0: "a",
    1: "b",
    2: "c",
  };
  console.log(
    Array.prototype.myEvery.call(arrayLike, (x) => typeof x === "string"),
  );