Array.prototype.mySome = function(callbackFn) {
    // Place your code here.
    for(let i = 0; i < this.length; i++)
    {
        if(callbackFn(this[i], i, this))
        {
            return true;
        }
    }
    return false;
  };

const array = [1, 2, 3, 4, 5];

const even = (element) => element % 2 === 0;

console.log(array.mySome(even));

function isBiggerThan10(element, index, array) {
    return element > 10;
  }
  
  console.log([2, 5, 8, 1, 4].mySome((x) => x > 10)) // false
  console.log([12, 5, 8, 1, 4].mySome(isBiggerThan10)) // true

  const fruits = ["apple", "banana", "mango", "guava"];

function checkAvailability(arr, val) {
  return arr.mySome((arrVal) => val === arrVal);
}

console.log(checkAvailability(fruits, "kela")); // false
console.log(checkAvailability(fruits, "banana")); // true
