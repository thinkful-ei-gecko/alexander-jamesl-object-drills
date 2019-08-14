let cipher ={
    a: 2,
    b: 3,
    c: 4,
    d: 5,
    else: ' '
};

function decode(word){
  for(let ltr in cipher){
      if(word[0]===ltr){
          return word[cipher[ltr]-1]
      }
  }
}

function decodeWords(sent){
  let wordArr = sent.split(" ");
  return wordArr.reduce(function(accumulator, currentValue){
      return accumulator + decode(currentValue)
  }, '');
}
let code = 'craft block argon meter bells brown croon droop'
console.log(decodeWords(code))