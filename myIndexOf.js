Array.prototype.myIndexOf = function(searchElement, fromIndex) {
    // Place your code here.
    let i;
    if(fromIndex === undefined || fromIndex < -this.length)
    {
        i = 0;
    }
    else if(fromIndex < 0)
    {
        i = fromIndex + this.length
    }
    else
    {
        if(fromIndex >= this.length)
        {
            return false;
        }
        i = fromIndex;
    }
    for(i ; i < this.length; i++)
    {
        if(this[i] == searchElement)
        {
            return i;
        }
    }
    return -1;
  };

  const array = [2, 9, 9];
console.log(array.myIndexOf(2)); // 0
console.log(array.myIndexOf(7)); // -1
console.log(array.myIndexOf(9, 2)); // 2
console.log(array.myIndexOf(2, -1)); // -1
console.log(array.myIndexOf(2, -3)); // 0

const indices = [];
const array1 = ["a", "b", "a", "c", "a", "d"];
const element = "a";
let idx = array1.myIndexOf(element);
while (idx !== -1) {
  indices.push(idx);
  idx = array1.myIndexOf(element, idx + 1);
}
console.log(indices);

console.log(" ");
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.myIndexOf('bison'));
// Expected output: 1

console.log(beasts.myIndexOf('bison', 2));
// Expected output: 4

console.log(beasts.myIndexOf('giraffe'));
// Expected output: -1