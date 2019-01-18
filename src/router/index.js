import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test1 from '@/components/test1.vue';
import test2 from '@/components/test2.vue';
import test3 from '@/components/test3.vue';

Vue.use(Router)

export default new Router({
  base: '/ttms/',  //添加项目名路径
  mode : 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test1/:id',
      component: test1
    }, {
      path: '/test2/:name',
      name: 'test2',
      component: test2
    }, {
      path: '/test3',
      name: 'test3',
      component: test3
    },
  ]
})
