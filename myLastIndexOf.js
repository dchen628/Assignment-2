Array.prototype.myLastIndexOf = function(searchElement, fromIndex) {
    // Place your code here.
    let index = -1;
    let i;
    if(fromIndex < 0)
    {
        i = this.length + fromIndex;
    }
    else if(fromIndex < -(this.length))
    {
        return index;
    }
    else if(fromIndex >= this.length || fromIndex === undefined)
    {
        i = this.length - 1;
    }
    else
        i = fromIndex;
    for(i; i >= 0 ; i--)
    {
        if(this[i] === searchElement)
        {
            return i;
        }
    }
    return index;
  };

  const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.myLastIndexOf('Dodo'));
// Expected output: 3

console.log(animals.myLastIndexOf('Tiger'));
// Expected output: 1

console.log(" ");
const numbers = [2, 5, 9, 2];
console.log(numbers.myLastIndexOf(2)); // 3
console.log(numbers.myLastIndexOf(7)); // -1
console.log(numbers.myLastIndexOf(2, 3)); // 3
console.log(numbers.myLastIndexOf(2, 2)); // 0
console.log(numbers.myLastIndexOf(2, -2)); // 0
console.log(numbers.myLastIndexOf(2, -1)); // 3