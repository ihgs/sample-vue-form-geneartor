import Vue from 'vue'
import Router from 'vue-router'
import DynamicForm from '@/components/DynamicForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DynamicForm',
      component: DynamicForm
    }
  ]
})
