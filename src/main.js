import './assets/main.css'
import { auth } from './firebase/firestore'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'



router.beforeEach((to, from, next) =>{
    const isAuthenticated = auth.currentUser
    const isAuthRequired = to.matched.some(record => record.meta.requiresAuth)
  
    if (!isAuthenticated && isAuthRequired) next({ name: 'login'})
  
    else next()
  })



const app = createApp(App)

app.use(router)

app.mount('#app')
