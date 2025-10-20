import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUp from '@/components/SignUp.vue'
import LogIn from '@/components/LogIn.vue'
import home from '@/components/home.vue'
import about from '@/components/about.vue'
import contact from '@/components/contact.vue'
import add from '@/components/add.vue'
import update from '@/components/update.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'login',component: LogIn,},
    { path: '/SignUp', name: 'signup',component: SignUp,},
    { path: '/home', name: 'home',component: home,},
    { path: '/about', name: 'about',component: about,},
    { path: '/contact', name: 'contact',component: contact,},
    { path: '/add', name: 'add',component: add,},
      { path: '/update/:id' , name: 'update',component: update,},

   { path: '/:pathMatch(.*)*', name: 'notfound', component: HomeView },
  ],
})

export default router
