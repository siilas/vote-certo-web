import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CandidatoView from '../views/CandidatoView.vue'
import ColaView from '../views/ColaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/candidato',
      name: 'candidato',
      component: CandidatoView
    },
    {
      path: '/candidato-cola',
      name: 'candidato-cola',
      component: ColaView
    },
    {
      path: "/:catchAll(.*)",
      redirect: '/',
    }
  ]
})

export default router
