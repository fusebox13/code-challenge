<template>
  <div id="app">
    <masked-input/>
  </div>
</template>

<script>
import MaskedInput from "./components/MaskedInput.vue";

export default {
  name: "app",
  components: {
    MaskedInput
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
