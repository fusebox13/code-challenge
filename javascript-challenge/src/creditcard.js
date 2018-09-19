let creditCardType = require('credit-card-type');
let luhn = require('luhn-alg');

let creditCardTypes = creditCardType('6');
console.log(creditCardTypes[0].gaps);

console.log(creditCardTypes[0].lengths);

let mask = '';
for (let i = 0; i < creditCardTypes[0].lengths[1]; i++ ) {
  if (creditCardTypes[0].gaps.includes(i)){
    mask+='-#';
  }
  else {
    mask+='#';
  }
}

console.log(mask);


console.log('luhn check: ', luhn('4111111111111112'));