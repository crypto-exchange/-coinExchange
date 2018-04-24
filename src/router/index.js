import Vue from 'vue'
import Router from 'vue-router'
import User from '@/pages/user/User'
import Slider from '@/components/Slider'
import Login from '@/pages/user/Login'
import FindPwd from '@/pages/user/FindPwd'
import Regist from '@/pages/user/Regist'

import Property from '@/pages/property/Property'
import CoinOption from '@/pages/property/CoinOption'
import OrderList from '@/pages/property/OrderList'

import Main from '@/pages/Main'
import Home from '@/pages/Home'
import CoinExchange from '@/pages/exchange/CoinExchange'
Vue.use(Router)

const router =  new Router({
  routes: [
    // login
    {
      path: '/',
      component: Main,
      children:[
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: 'property',
          name: 'property',
          component: Property,
          children:[
            {
              path: 'coinoption',
              component: CoinOption
            },
            {
              path: 'coinoption/:dealId/:type',
              component: CoinOption
            },
            {
              path: 'orderlist',
              name: 'orderlist',
              component: OrderList
            }
          ]
        },
        {
          path: 'user',
          name: 'User',
          component: User,
          children:[
            {
              path: 'regist',
              name: 'regist',
              component: Regist
            },
            {
              path: 'login',
              name: 'login',
              component: Login
            }
          ]
        },
        {
          path: 'findpassword',
          name: 'findpassword',
          component: FindPwd
        },
        {
          path: 'exchange/coinexchange',
          name: 'coinexchange',
          component: CoinExchange
        }
      ]
    }
  ]
})
export default router 