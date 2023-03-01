Object.myValues = function(object) {
    // Place your code here.
    let arr = [];
    for( key in object )
    {
        arr.push(object[key])
    }
    return arr;
  };

  const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
  console.log(Object.myValues(object1));
  // Expected output: Array ["somestring", 42, false]

  const obj = { foo: "bar", baz: 42 };
console.log(Object.myValues(obj)); // ['bar', 42]

// Array-like object
const arrayLikeObj1 = { 0: "a", 1: "b", 2: "c" };
console.log(Object.myValues(arrayLikeObj1)); // ['a', 'b', 'c']

// Array-like object with random key ordering
// When using numeric keys, the values are returned in the keys' numerical order
const arrayLikeObj2 = { 100: "a", 2: "b", 7: "c" };
console.log(Object.myValues(arrayLikeObj2)); // ['b', 'c', 'a']

// getFoo is a non-enumerable property
const myObj = Object.create(
  {},
  {
    getFoo: {
      value() {
        return this.foo;
      },
    },
  },
);
myObj.foo = "bar";
console.log(Object.myValues(myObj)); // ['bar']

// Strings have indices as enumerable own properties
console.log(Object.myValues("foo")); // ['f', 'o', 'o']

// Other primitives have no own properties
console.log(Object.myValues(100)); // []