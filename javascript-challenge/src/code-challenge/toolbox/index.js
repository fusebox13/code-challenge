export const getMask = creditCardType => {
  
  if(!creditCardType){
    return '################';
  }
  
  let keys = Object.keys(creditCardType);
  if (!keys.includes('gaps') || !keys.includes('lengths')) {
    throw new Error('You done #$%^ed up A A RON!  Use a creditCardType object.  Run "npm i credit-card-type --save" to make the magic work!');
  }
  
  const maxLength = creditCardType.lengths[creditCardType.lengths.length - 1];
  let mask = '';
  for (let i = 0; i < maxLength; i++ ) {
    mask += creditCardType.gaps.includes(i)?'-#':'#';
  }
  return mask;
}