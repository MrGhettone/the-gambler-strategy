import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { authStore, authReady } from '../stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/giochi/:game',
      name: 'game',
      component: () => import('../views/GameView.vue')
    },

    // ── Auth ─────────────────────────────────────────────────────────────
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/LoginView.vue'),
      meta: { requiresGuest: true }   // reindirizza al dashboard se già loggato
    },
    {
      path: '/email-inviata',
      name: 'email-sent',
      component: () => import('../views/auth/EmailSentView.vue')
    },
    {
      path: '/auth/callback',
      name: 'auth-callback',
      component: () => import('../views/auth/AuthCallbackView.vue')
    },

    // ── Area utente (richiede login) ──────────────────────────────────────
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue'),
      meta: { requiresAuth: true }
    },

    // ── Area admin (richiede ruolo admin) ─────────────────────────────────
    // Esempio di rotta protetta per admin — da espandere in futuro
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/DashboardView.vue'), // placeholder
      meta: { requiresAuth: true, requiresAdmin: true }
    }
  ]
})

// ── Navigation Guards ────────────────────────────────────────────────────────

router.beforeEach(async to => {
  // Aspetta che lo stato auth sia noto prima di decidere il redirect
  await authReady

  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    return { name: 'login', query: { redirect: to.fullPath } }
  }

  if (to.meta.requiresAdmin && !authStore.isAdmin) {
    return { name: 'home' }
  }

  if (to.meta.requiresGuest && authStore.isLoggedIn) {
    return { name: 'dashboard' }
  }
})

export default router
