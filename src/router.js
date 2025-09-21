import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import AbsencePage from './components/AbsencePage.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/absence',
        name: 'Absence',
        component: AbsencePage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
