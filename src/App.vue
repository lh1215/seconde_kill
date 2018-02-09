<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <mt-header fixed title="融侨秒杀馆">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import productList from './page/productList'
import { Header } from 'mint-ui'

export default {
  name: 'app',
  components: {
    productList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*line-height: 0px;*/
}
#content {
  margin-top: 2.5rem;
}
</style>
