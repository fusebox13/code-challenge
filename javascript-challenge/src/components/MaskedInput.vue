<template>
  <div id="root">
    <input type="text" v-model="input"  v-mask="'####-##'"/>
    <span>{{input}}</span>
  </div>
</template>

<script>
export default {
  name: "masked-input",
  data() {
    return {
      input: ''
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
