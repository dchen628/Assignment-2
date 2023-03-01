/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/

// MAP //
Array.prototype.myMap = function(callbackFn) {
  // Place your code here.
  let arr = [];
    for(let i = 0; i < this.length; i++)
    {
        if(this[i] === undefined) continue;
        arr.push(callbackFn(this[i], i, this));
    }
    return arr;
};

// FILTER //
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

// SOME //
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

// EVERY //
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

// REDUCE //
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

// INCLUDES //
Array.prototype.myIncludes = function(searchElement, fromIndex) {
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
    for(i = 0; i < this.length; i++)
    {
        if(this[i] === searchElement)
        {
            return true;
        }
    }
    return false;
};

// INDEXOF //
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

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement, fromIndex) {
  // Place your code here.
  let index = -1;
    let i;
    if(fromIndex < 0)
    {
        i = this.length + fromIndex;
    }
    else if(fromIndex < this.length)
    {
        i = fromIndex;
    }
    else if(fromIndex < -this.length)
    {
        return index;
    }
    else if(fromIndex === undefined)
    {
        i = 0;
    }
    else
    {
        i = this.length - 1;
    }
    for(i; i < this.length; i++)
    {
        if(this[i] === searchElement)
        {
            index = i;
        }
    }
    return index;
};

// KEYS //
Object.myKeys = function(object) {
  // Place your code here.
  let arr = [];
    for(let i = 0; i < this.length; i++)
    {
        arr.push(object(this[i]));
    }
    return arr;
};

// VALUES //
Object.myValues = function(object) {
  // Place your code here.
};