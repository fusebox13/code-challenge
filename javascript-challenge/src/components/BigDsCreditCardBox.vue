<template>
  <section :class="{ valid: isValid }">
    <!-- <h1>{{matchedCardType.niceType}}</h1>
    <img :src="getIconUri()"/> -->
    <input 
      type="text" 
      class="cardHolderName" 
      :class="{ valid: isValid }"
      v-model="cardHolderName" 
      placeholder="Cardholder Name"
      tabindex="1"
    />
    <img 
      :src="getIconUri()"
      :class="{ valid: isValid }"
    />
    <input 
      type="text" 
      class="creditCardNumber"
      :class="{ valid: isValid }"
      v-model="creditCardNumber" 
      placeholder="Credit card number" 
      v-mask="mask" 
      :maxlength="maxLength"
      tabindex="2"
    />
    <input 
      type="text" 
      class="expiration" 
      :class="{ valid: isValid }"
      v-model="expirationDate" 
      v-mask="'##/##'"
      placeholder="Expiration date"
      tabindex="3" />
    <input 
      type="text" 
      class="securityCode"
      :class="{ valid: isValid }"
      v-model="securityCode"
      v-mask = "'######'"
      :placeholder="matchedCardType.code.name.toLowerCase()"
      :maxlength="matchedCardType.code.size"
      tabindex="4   " />
    
    <button 
      type="button" 
      class="submit-button"
      :class="{ valid: isValid }"
      :disabled="!isValid"
    >
      Submit
    </button>

    <svg v-if="isValid" class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
  </section>
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
      maxLength: 16,
    }
  },
  computed: {
    matchedCardType() {
      try {
        let type = creditCardType(this.creditCardNumber.replace(/-/g, '')).shift();
        this.mask = getMask(type);
        let gaps = typeof type === 'undefined'?0:type.gaps.length;
        this.maxLength = typeof type === 'undefined'?16:type.lengths[type.lengths.length - 1] + gaps;
        return type;
      } catch (err) {
        //
      }
      
    },
    isValid() {
      let splitDate = this.expirationDate.split('/');
      let month = Number(splitDate[0]);
      let year = Number(splitDate[1]);
      let yearLength = splitDate[1]?splitDate[1].length:0;

      const validMonth = (month >= 1 && month <= 12);
      const validYear = (year >= 0 && year <= 99 && yearLength === 2)

      return  luhn(this.creditCardNumber.replace(/-/g, ''))
        && this.securityCode.length >= 3
        && this.cardHolderName.length > 1
        && validMonth && validYear;
       
    },
  },
  methods: {
    getIconUri() {
      if (this.creditCardNumber.length === 0) {
        return ''
      }
      return `creditcards/${this.matchedCardType.type}.png`;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

$color--green: #7ac142;
$curve: cubic-bezier(0.650, 0.000, 0.450, 1.000);

.checkmark__circle {
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 2;
  stroke-miterlimit: 10;
  stroke: $color--green;
  fill: none;
  animation: stroke .6s $curve forwards;
}

.checkmark {
  width: 26px;
  height: 26px;
  margin-right: 30px !important;
  border-radius: 50%;
  display: block;
  stroke-width: 2;
  stroke: #fff;
  stroke-miterlimit: 10;
  margin: 10% auto;
  box-shadow: inset 0px 0px 0px $color--green;
  animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
  grid-row: 2;
  grid-column: 2;
  justify-self: end;
  align-self: center;;
}

.checkmark__check {
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: stroke .3s $curve .8s forwards;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes scale {
  0%, 100% {
    transform: none;
  }
  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
}

@keyframes fill {
  100% {
    box-shadow: inset 0px 0px 0px 30px $color--green;
  }
}

  @-webkit-keyframes squiggle {
    0%   { 
      border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
      box-shadow: 0 8px 6px -6px grey

    }
    50% { 
      border-radius: 255px 25px 125px 0px/25px 225px 25px 155px;
      box-shadow: 0 5px 6px -6px grey

    }
    100% { 
      border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
      box-shadow: 0 8px 6px -6px grey

    }
  }

  @-webkit-keyframes scintillate {
    0%   { 
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
    10% { 
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
    20% { 
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
    30% { 
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
    40% { 
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
    50% { 
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
    60% { 
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
    70% { 
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
    80% { 
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
    90% { 
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
    100% { 
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
  }

   @-webkit-keyframes scintillate2 {
    0%   {
      color:  rgb(random(255), random(255), random(255));
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
    10% {
      color:  rgb(random(255), random(255), random(255));
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
    20% {
      color:  rgb(random(255), random(255), random(255));
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
    30% {
      color:  rgb(random(255), random(255), random(255));
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
    40% {
      color:  rgb(random(255), random(255), random(255));
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
    50% {
      color:  rgb(random(255), random(255), random(255));
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
    60% {
      color:  rgb(random(255), random(255), random(255));
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
    70% {
      color:  rgb(random(255), random(255), random(255));
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
    80% {
      color:  rgb(random(255), random(255), random(255));
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
    90% {
      color:  rgb(random(255), random(255), random(255));
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
    100% {
      color:  rgb(random(255), random(255), random(255));
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
  }

  @-webkit-keyframes scintillate3 {
    0%   {
      color:  rgb(random(255), random(255), random(255));
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
    10% {
      color:  rgb(random(255), random(255), random(255));
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
    20% {
      color:  rgb(random(255), random(255), random(255));
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
    30% {
      color:  rgb(random(255), random(255), random(255));
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
    40% {
      color:  rgb(random(255), random(255), random(255));
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
    50% {
      color:  rgb(random(255), random(255), random(255));
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
    60% {
      color:  rgb(random(255), random(255), random(255));
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
    70% {
      color:  rgb(random(255), random(255), random(255));
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
    80% {
      color:  rgb(random(255), random(255), random(255));
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
    90% {
      color:  rgb(random(255), random(255), random(255));
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
    100% {
      color:  rgb(random(255), random(255), random(255));
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
  }

  @-webkit-keyframes scintillate4 {
    0%   {
      color:  rgb(random(255), random(255), random(255));
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
    10% {
      color:  rgb(random(255), random(255), random(255));
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
    20% {
      color:  rgb(random(255), random(255), random(255));
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
    30% {
      color:  rgb(random(255), random(255), random(255));
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
    40% {
      color:  rgb(random(255), random(255), random(255));
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
    50% {
      color:  rgb(random(255), random(255), random(255));
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
    60% {
      color:  rgb(random(255), random(255), random(255));
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
    70% {
      color:  rgb(random(255), random(255), random(255)); 
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
    80% {
      color:  rgb(random(255), random(255), random(255)); 
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
    90% {
      color:  rgb(random(255), random(255), random(255)); 
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
    100% { 
      color:  rgb(random(255), random(255), random(255));
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
  }

  @-webkit-keyframes scintillate5 {
    0%   {
      color:  rgb(random(255), random(255), random(255));
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
    10% { 
      color:  rgb(random(255), random(255), random(255));
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
    20% { 
      color:  rgb(random(255), random(255), random(255));
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
    30% { 
      color:  rgb(random(255), random(255), random(255));
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
    40% { 
      color:  rgb(random(255), random(255), random(255));
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
    50% { 
      color:  rgb(random(255), random(255), random(255));
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
    60% { 
      color:  rgb(random(255), random(255), random(255));
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
    70% { 
      color:  rgb(random(255), random(255), random(255));
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
    80% { 
      color:  rgb(random(255), random(255), random(255));
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
    90% { 
      color:  rgb(random(255), random(255), random(255));
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
    100% { 
      color:  rgb(random(255), random(255), random(255));
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
  }

  @-webkit-keyframes scintillate-text {
    0%   {
      color: rgb(255,105,180)
    }
    10% { 
      color:  rgb(random(255), random(255), random(255));
    }
    20% { 
      color:  rgb(random(255), random(255), random(255));
    }
    30% { 
      color:  rgb(random(255), random(255), random(255));
    }
    40% { 
      color:  rgb(random(255), random(255), random(255));
    }
    50% { 
      color:  rgb(random(255), random(255), random(255));
    }
    60% { 
      color:  rgb(random(255), random(255), random(255));
    }
    70% { 
      color:  rgb(random(255), random(255), random(255));
    }
    80% { 
      color:  rgb(random(255), random(255), random(255));
    }
    90% { 
      color:  rgb(random(255), random(255), random(255));
    }
    100% { 
      color:  rgb(random(255), random(255), random(255));
      border-left-color: rgb(random(255), random(255), random(255));
      border-right-color: rgb(random(255), random(255), random(255));
      border-top-color: rgb(random(255), random(255), random(255));
      border-bottom-color: rgb(random(255), random(255), random(255));
    }
  }


  section {
    display: inline-grid;
    grid-template-columns: auto 150px;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
    box-shadow: 20px 38px 34px -26px hsla(0,0%,0%,.2);

    border: 2px solid darkslategray;
    padding: 1rem 1rem;

    &.valid {
      animation: scintillate 10s infinite;

    }

    & img {
      align-self: center;
      margin-left: 30px;
      width: 50px;
      grid-row: 2;
      grid-column: 1 / span 2;
      -webkit-filter: grayscale(1); /* Google Chrome, Safari 6+ & Opera 15+ */
      filter: grayscale(1);
      transition: 1s ease-in-out;

      &.valid {
        -webkit-filter: none; /* Google Chrome, Safari 6+ & Opera 15+ */
        filter: none;
      }
    }

    & button {
      margin: 16px;
      color: lightgrey;
      transition: transform 0.25s ease-in-out, color 1s ease-in-out;
      cursor: not-allowed;
      &.valid {
        color: rgb(255,105,180);
        animation: scintillate-text 10s infinite;
        animation-delay: 1s;
        cursor: pointer;
        &:hover {
          transform: scale(1.15);
        } 
      }
      &.submit-button {
        font-family: 'Cedarville Cursive', cursive;
        font-size: 2.5em;
        background: white;
        border: none;
        justify-self: end;
        grid-row: 4;
        grid-column: 1 / span 2;
        
  
      }

      &:focus {
        outline: 0;
      }
    }

    & input {
      font-family: 'Cedarville Cursive', cursive;
      font-size: 1.5em;
      margin-bottom: 0.50em;
      border: 2px solid darkslategray;
      border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
      text-align: center;

      align-self:center;
      background:transparent;
      padding:0.5rem 1rem;
      margin:1rem 1rem;
      color:#41403E;
      letter-spacing:1px;
      outline:none;
      transition: 0.25s ease-in-out;
      backface-visibility: hidden;


      &:hover {
        box-shadow: 0 8px 6px -6px grey;
      }
      &:focus {
        animation: squiggle 0.75s infinite;
        box-shadow: 0 8px 6px -6px grey;      
      }

      &.cardHolderName {
        grid-row: 1;
        grid-column: 1 / span 2;

        &.valid {
          animation: scintillate2 10s infinite;
        }
      }
      &.creditCardNumber {
        grid-row: 2;
        grid-column: 1 / span 2;
        
        &.valid {
          animation: scintillate3 10s infinite; 
        }
      }
      &.expiration {
        grid-row: 3;
        grid-column: 1 / 2;

        &.valid {
          animation: scintillate4 10s infinite; 
        }
      }
      &.securityCode {
        grid-row: 3;
        grid-column: 2;
        
        &.valid {
          animation: scintillate5 10s infinite; 
        }
      }
    }
    
  }

  h1 {
    text-align: left;
  }
  ::-webkit-input-placeholder {
    font-family: 'Cedarville Cursive', cursive;
    text-align: center;
    color: darkslategray;
  }

  :-moz-placeholder { /* Firefox 18- */
    font-family: 'Cedarville Cursive', cursive;
    text-align: center;
    color: darkslategray;
  }

  ::-moz-placeholder {  /* Firefox 19+ */
    font-family: 'Cedarville Cursive', cursive;
    text-align: center;
    color: darkslategray;  
  }

  :-ms-input-placeholder {  
    font-family: 'Cedarville Cursive', cursive;
    text-align: center;
    color: darkslategray;
  }
  ::selection {
    background: lightgrey; /* WebKit/Blink Browsers */
  }
  ::-moz-selection {
    background: lightgrey; /* Gecko Browsers */
  }
</style>
