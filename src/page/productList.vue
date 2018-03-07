<!--suppress ALL -->
<template>
  <div id="second_product">
    <div class="swiper">
      <mt-swipe :auto="4000" style="width: 100%; height: 9rem">
        <mt-swipe-item>
          <img :src="image" alt="" style="width: 100%; height: 9rem">
        </mt-swipe-item>
        <mt-swipe-item>
          <img :src="image" alt="" style="width: 100%; height: 9rem;">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!--<div></div>-->
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
        <!--<div class="nowrap">-->
          <!--<span class="active_content font_15 pl_1">明源云客秒杀了iphone 6plus</span>-->
        <!--</div>-->
      </div>
    </div>
    <ul class="productList">
      <li><ProductComponent/></li>
      <li><ProductComponent/></li>
      <li><ProductComponent/></li>
      <li><ProductComponent/></li>
      <li><ProductComponent/></li>
    </ul>
    <section class="advance">
      <div class="advanceImage" style="background-color: red; margin-right: 0.05rem">
        <img src="" style="height: 5.5rem; background-color: #2d3845"/>
      </div>
      <div class="advanceImage" style="background-color: yellow; margin-left: 0.05rem">

      </div>
    </section>
    <section class="logo">
      <img src="" alt="" style="height: 3rem; width: 7rem; background-color: red">
    </section>
    <div class="bottomBtn">
      <span class="bottomText">查看我抢到的宝贝 >></span>
    </div>
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
.swiper {

}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: block;
}

a {
  color: #42b983;
}
.productList {
  -webkit-margin-before: 0.5rem;
}

.advance {
  display: flex;
  height: 5.5rem;
  width: 100%;
}
  .advanceImage {
    flex: 1;
  }

  .logo {
    height: 4rem;
    background: green;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .bottomBtn {
    height: 2.5rem;
    width: 100%;
    background-color: #fc343a;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .bottomText {
    font-size: 0.8rem;
    color: #ffffff;
  }
</style>
