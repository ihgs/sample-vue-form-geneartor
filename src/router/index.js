import Vue from 'vue'
import Router from 'vue-router'
import DynamicForm from '@/components/DynamicForm'
import UserList from '@/components/UserList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DynamicForm',
      component: DynamicForm
    },
    {
      path: '/users',
      name: 'User List',
      component: UserList
    }
  ]
})
