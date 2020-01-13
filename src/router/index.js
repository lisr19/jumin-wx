import Vue from 'vue'
import Router from 'vue-router'
import home from './home'
import company from './company'
import my from './my'
import train from './train'
import SearchResult from '../pages/search_result/SearchResult.vue'
import {Dialog} from 'vant'

Vue.use(Router)

const router = new Router({
  routes: [
    ...home,
    ...company,
    ...my,
    ...train,
    {
      path:'/search_result',
      name:'search_result',
      component:SearchResult
    }
  ]
})



export default router
