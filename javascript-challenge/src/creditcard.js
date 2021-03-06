let creditCardType = require('credit-card-type');
let luhn = require('luhn-alg');
let COLORS = require('./assets/colors.js');

let creditCardTypes = creditCardType('33');
console.log(creditCardTypes);

const getMask = creditCardType => {

  if(!creditCardType){
    return '################';
  }

  let keys = Object.keys(creditCardType);
  if (!keys.includes('gaps') || !keys.includes('lengths')) {
    throw new Error('You done #$%^ed up A A RON!  Use a creditCardType object.  Run "npm i credit-card-type --save" to make the magic work!');
  }
  const maxLength = creditCardType.lengths.pop();
  let mask = '';
  for (let i = 0; i < maxLength; i++ ) {
    mask += creditCardType.gaps.includes(i)?'-#':'#';
  }
  return mask;
} 

console.log(getMask(creditCardTypes.shift()));

console.log('luhn check: ', luhn('4111111111111112'));