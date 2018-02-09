<!--suppress ALL -->
<template>
  <div id="second_product">
    <mt-swipe :auto="4000" style="width: 100%; height: 13rem">
      <mt-swipe-item><img :src="image" alt="" style="width: 100%; height: 100%"></mt-swipe-item>
    </mt-swipe>
    <!--<div style="width: 100%; height: 13rem">-->
      <!---->
    <!--</div>-->
    <div class="active_message row_box">
      <div class="active_title vertival_box nowrap center">
        <div class="font_14 PingFang">9999人参与了活动</div>
        <div class="font_12 MicrosoftYaHei" style="color: #fffc00;">活动规则 >></div>
      </div>
      <div class="active_content_view row_box center">
        <div class="nowrap">
          <span class="active_content font_15 pl_1">明源云客秒杀了iphone 6plus</span>
        </div>
        <div class="nowrap">
          <span class="active_content font_15 pl_1">明源云客秒杀了iphone 6plus</span>
        </div>
      </div>
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
}

a {
  color: #42b983;
}
</style>
