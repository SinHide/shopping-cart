import Vue from 'vue'
import Router from 'vue-router'
import address from '@/components/address'
import shoppingCart from '@/components/shoppingCart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/address',
      name: 'address',
      component: address
    },
    {
      path: '/shoppingCart',
      name: 'shoppingCart',
      component: shoppingCart
    }
  ]
})
