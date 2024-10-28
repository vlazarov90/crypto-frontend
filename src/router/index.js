import { createRouter, createWebHistory } from 'vue-router';
import store from '../store/store';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Home from '../views/Home.vue';

const routes = [
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true } // Protect this route
  },
  // Other protected routes can be added here
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Global navigation guard to enforce authentication
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    // If the user is not authenticated, redirect to login
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;