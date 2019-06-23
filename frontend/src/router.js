import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/instrutores',
      name: 'Instrutores',
      component: () => import('./views/Instrutores.vue')
    },
    {
      path: '/cursos',
      name: 'Cursos',
      component: () => import('./views/Cursos.vue')
    },
    {
      path: '/conteudos',
      name: 'Conteudos',
      component: () => import('./views/Conteudos.vue')
    }
  ]
})
