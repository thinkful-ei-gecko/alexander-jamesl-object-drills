//Object initializers and methods
// let loaf = {
//     flour: 300,
//     water: 210,
//     hydration() {
//       return this.water / this.flour * 100;
//     }
//   };
  
//  console.log(loaf.hydration());

//Iterating over Obj prop
//   let obj = {
//       foo: 'boo',
//       bar: 'far',
//       fun: 'plum',
//       quux: 'flux',
//       spam: 'pam'
//   }

//   for(let keys in obj)
//  console.log(keys)

// Arrays in objects

// let obj2 = {
//   meals: [
//     'breakfast',
//     'second breakfast',
//     'elevenses',
//     'lunch',
//     'afternoon tea',
//     'dinner',
//     'supper'
//   ]
// };

//console.log(obj2.meals[3]);

//Arrays of Objects
let people = [
    pers1 = {
        name: 'James',
        jobTitle: 'Unemployed'
    },

    pers2 = {
        name: 'Alexander',
        jobTitle: 'Full time student'
    },

    pers3 = {
        name: 'Andrea',
        jobTitle: 'Instructor'
    }
]

for(let i=0; i<people.length; i++){
    console.log(people[i])
}