import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/About.vue'
import SignUp from '../views/SignUp.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {requiresAuth: true}
    },
    {
      path: '/sign',
      name: 'sign',
      component: SignUp
    },
  ]
})

const getCurrentUser = () => {
  return new Promise ((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener(),
        resolve(user)
      },
      reject
    ) 
  })
}


router.beforeEach(async(to, from, next) =>{
  const isAuthenticated = await getCurrentUser()
  const isAuthRequired = to.matched.some(record => record.meta.requiresAuth)

  if (!isAuthenticated && isAuthRequired) next({ name: 'login'})

  else next()
})


export default router
