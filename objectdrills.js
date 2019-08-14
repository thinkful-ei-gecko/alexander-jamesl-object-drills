'use strict';

//Object initializers and methods
let loaf = {
  flour: 300,
  water: 210,
  hydration() {
    return this.water / this.flour * 100;
  }
};

console.log(loaf.hydration());