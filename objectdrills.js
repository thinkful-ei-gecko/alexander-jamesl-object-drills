//Object initializers and methods
let loaf = {
    flour: 300,
    water: 210,
    hydration() {
      return this.water / this.flour * 100;
    }
  };
  
  console.log(loaf.hydration());

//Iterating over Obj prop
  let obj = {
      foo: 'boo',
      bar: 'far',
      fun: 'plum',
      quux: 'flux',
      spam: 'pam'
  }

  for(let keys in obj)
  console.log(keys)

