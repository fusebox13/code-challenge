<template>
  <div id="app">
    <big-ds-credit-card-box/>
  </div>
</template>

<script>
//Import your components and showcase them here!
import BigDsCreditCardBox from "./components/BigDsCreditCardBox.vue";

export default {
  name: "app",
  components: {
    BigDsCreditCardBox
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
