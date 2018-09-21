<template>
  <div id="root">
    <div style="display: inline-block">
    <h1>{{matchedCardType.niceType}}</h1>
    <input type="text" v-model="creditCardNumber" placeholder="Credit card number" v-mask="mask" :maxlength="maxLength"/>
    <input type="text" v-model="cardHolderName" placeholder="Name"/>
    <input type="text" v-model="expirationDate" placeholder="Expiration date" />
    <input type="text" v-model="securityCode" placeholder="Security Code" />
    </div>
    
  </div>
</template>

<script>
let creditCardType = require('credit-card-type');
let luhn = require('luhn-alg');
import { getMask } from "@/code-challenge/toolbox";
export default {
  name: "big-ds-credit-card-box",
  data() {
    return {
      creditCardNumber: '',
      cardHolderName: '',
      expirationDate: '',
      securityCode: '',
      mask: '####-####-####-######',
      maxLength: 16
    }
  },
  computed: {
    matchedCardType() {
      console.log(this.creditCardNumber);
      let type = creditCardType(this.creditCardNumber.replace(/-/g, '')).shift();
      this.mask = getMask(type);
      let gaps = typeof type === 'undefined'?0:type.gaps.length;
      this.maxLength = typeof type === 'undefined'?16:type.lengths[type.lengths.length - 1] + gaps;
      return type;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h1 {
    text-align: left;
  }
  input {
    display: block;
    padding: 0.25em;
    margin-bottom: 0.50em;
    border-radius: 5px;
    background: grey;
    color: white;
  }
  ::-webkit-input-placeholder {
    text-align: center;
    color: white;
  }

  :-moz-placeholder { /* Firefox 18- */
    text-align: center;
    color: white;
  }

  ::-moz-placeholder {  /* Firefox 19+ */
    text-align: center;  
    color: white;
  }

  :-ms-input-placeholder {  
    text-align: center; 
    color: white;
  }
</style>
