import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Download from '@/views/home/download'
import Found from '@/views/home/found'
import Friend from '@/views/home/friend'
import LocalList from '@/views/home/localList'
import MV from '@/views/home/MV'
import Personer from '@/views/home/personer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,

      children:[
        {
          path: '/',
          name: 'Found',
          component: Found
        },
        {
          path: 'download',
          name: 'Download',
          component: Download
        },
        {
          path: 'found',
          name: 'Found',
          component: Found
        },
        {
          path: 'friend',
          name: 'Friend',
          component: Friend
        },
        {
          path: 'localList',
          name: 'LocalList',
          component: LocalList
        },
        {
          path: 'MV',
          name: 'MV',
          component: MV
        },
        {
          path: 'personer',
          name: 'Personer',
          component: Personer
        }
      ]
    },
    // {
    //   path: '/home',
    //   name: 'Home',
    //   component: Home,

    //   children:[
      
    //   ]
    // },
    
  ]
})
