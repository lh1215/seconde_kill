<!--suppress ALL -->
<template>
  <div id="second_product">
    <!--<mt-swipe :auto="4000" style="width: 100%; height: 13rem">-->
      <!--<mt-swipe-item></mt-swipe-item>-->
    <!--</mt-swipe>-->
    <div style="width: 100%; height: 13rem">
      <img :src="image" alt="" style="width: 100%; height: 100%">
    </div>

    <ProductComponent/>
  </div>
</template>

<script>
  import ProductComponent from './comp_product'
  export default {
    components: {
      ProductComponent
    },
  //  name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        image: require('../assets/banner.png'),
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
