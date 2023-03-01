Object.myKeys = function(object) {
    // Place your code here.
    let arr = [];
    for(let i = 0; i < this.length; i++)
    {
        arr.push(object(this[i]));
    }
    return arr;
  };

  const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
  console.log(Object.keys(object1));
  // Expected output: Array ["a", "b", "c"]

  const obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.keys(obj)); // ['0', '1', '2']

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
  myObj.foo = 1;
  console.log(Object.keys(myObj)); // ['foo']

