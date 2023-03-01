Object.myKeys = function(object) {
    // Place your code here.
    if(typeof object !== 'object' || object === null)
        throw new TypeError('TypeError')
    let arr = [];
    let i = 0;
    for( key in object )
    {
        arr.push(key)
    }
    return arr;
  };

  const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
  console.log(Object.myKeys(object1));
  // Expected output: Array ["a", "b", "c"]

  const obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.myKeys(obj)); // ['0', '1', '2']

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
  console.log(Object.myKeys(myObj)); // ['foo']

