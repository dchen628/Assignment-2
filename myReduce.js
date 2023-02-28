Array.prototype.myReduce = function(callbackFn, initialValue) {
    // Place your code here.
    let accumulator;
    if(initialValue === undefined)
    {
      accumulator = initialValue;
    }
    else
    {
      accumulator = initialValue;
    }
    for(let i = 0; i < this.length; i++)
    {
        if(accumulator !== undefined)
        {
          accumulator = callbackFn.call(undefined, accumulator, this[i], i, this)
        }
        else
        {
          accumulator = this[i]
        }
    }
    return accumulator;
  };

  const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.myReduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);

const getMax = (a, b) => Math.max(a, b);

// callback is invoked for each element in the array starting at index 0
console.log([1, 100].myReduce(getMax, 50)); // 100
console.log([50].myReduce(getMax, 10)); // 50

// callback is invoked once for element at index 1
console.log([1, 100].myReduce(getMax)); // 100

// callback is not invoked
console.log([50].myReduce(getMax)); // 50
console.log([].myReduce(getMax, 1)); // 1

console.log([].myReduce(getMax)); // TypeError