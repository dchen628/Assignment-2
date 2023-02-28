Array.prototype.myIncludes = function(searchElement, fromIndex) {
    // Place your code here.
    let i;
    if(fromIndex === undefined)
    {
        i = 0;
    }
    else
    {
        if(fromIndex >= this.length)
        {
            return false;
        }
        i = fromIndex;
    }
    for(i = 0; i < this.length; i++)
    {
        if(this[i] === searchElement)
        {
            return true;
        }
    }
    return false;
  };

  const array1 = [1, 2, 3];

console.log(array1.myIncludes(2));

const pets = ['cat', 'dog', 'bat'];

console.log(pets.myIncludes('cat'));

console.log(pets.myIncludes('at'));
console.log(" ");
console.log([1, 2, 3].myIncludes(2));
console.log([1, 2, 3].myIncludes(4));
console.log([1, 2, 3].myIncludes(3, 3));
console.log([1, 2, 3].myIncludes(3, -1));
console.log([1, 2, NaN].myIncludes(NaN));
console.log(["1", "2", "3"].myIncludes(3));

console.log(" ");
const arr = ["a", "b", "c"];

console.log(arr.myIncludes("c", 3));
console.log(arr.myIncludes("c", 100));
console.log(" ");

const arrayLike = {
    length: 3,
    0: 2,
    1: 3,
    2: 4,
  };
  console.log(Array.prototype.includes.call(arrayLike, 2));
  console.log(Array.prototype.includes.call(arrayLike, 1));
