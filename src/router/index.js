import Vue from 'vue'
import Router from 'vue-router'
import ProductList from '../page/productList'
import Count from '../page/Counter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProductList',
      component: ProductList
    },
    {
      path: '/count',
      name: 'Count',
      component: Count
    }
  ]
})
