'use strict';

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

// let cipher ={
//       a: 1,
//       b: 2,
//       c: 3,
//       d: 4
//   };

// function decode(word){
//     for(let ltr in cipher){
//         if(word[0]===ltr){
//             return word[cipher[ltr]]
//         }
//     }
//     return ' '
// }

// function decodeWords(sent){
//     let wordArr = sent.split(" ");
//     return wordArr.reduce(function(accumulator, currentValue){
//         return accumulator + decode(currentValue)
//     }, '');
// }

// let code = 'craft block argon meter bells brown croon droop'
// console.log(decodeWords(code))

// Factory Functions with LOTR

function createCharacter(name, nickname, race, origin, attack, defense) {
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    describe(){
      console.log(`${this.name} is a ${this.race} from ${this.origin}`)
    },
    evaluateFight(character){
      return `Your opponent takes ${this.attack - character.defense} damage and you receive ${character.attack - this.defense} damage.`
    }
  };
}

let characters = [
  createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', '10', '6'),
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', '2', '1'),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', '3', '2'),
  createCharacter('Aragorn son of Arathorn',  'aragorn', 'Man', 'Dunnedain', '6', '8'),
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', '8', '5'),
  createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', '5', '5')
];


characters.find(character => character.nickname === 'aragorn').describe();

let hobbits = characters.filter(character => character.race === 'Hobbit');
//console.log(hobbits);

let aboveAverageStrength = characters.filter(character => character.attack > 5);
//console.log(aboveAverageStrength);