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
// let people = [
//   pers1 = {
//     name: 'James',
//     jobTitle: 'Unemployed'
//   },

//   pers2 = {
//     name: 'Alexander',
//     jobTitle: 'Full time student'
//   },

//   pers3 = {
//     name: 'Andrea',
//     jobTitle: 'Instructor'
//   }
// ];

// for(let i=0; i<people.length; i++){
//     console.log(people[i])
// }

//Properties that aren't there

//working on class thing, please ignore for now

// function Bossify(person, bossName) {
//    person.boss = bossName;
//  }

//  let people = [
//   pers1 = {
//       name: 'James',
//       jobTitle: 'Unemployed'
//   },

//   pers2 = {
//       name: 'Alexander',
//       jobTitle: 'Full time student'
//   },

//   pers3 = {
//       name: 'Andrea',
//       jobTitle: 'Instructor'
//   }
// ]
// people[0].boss='no one'
// people[1].boss = 'Andrea'
// people[2].boss = 'Thinkful'

// for(let i=0; i<people.length; i++){
//  console.log(`${people[i].jobTitle} ${people[i].name} reports to ${people[i].boss}`)
// }

//Cracking the Code

let cipher ={
      a: 1,
      b: 2,
      c: 3,
      d: 4
  };

function decode(word){
    for(let ltr in cipher){
        if(word[0]===ltr){
            return word[cipher[ltr]]
        }
    }
    return ' '
}

function decodeWords(sent){
    let wordArr = sent.split(" ");
    return wordArr.reduce(function(accumulator, currentValue){
        return accumulator + decode(currentValue)
    }, '');
}

let code = 'craft block argon meter bells brown croon droop'
console.log(decodeWords(code))

