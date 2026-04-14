<script>
import { defineComponent, onMounted, ref } from 'vue'
import { supabase } from '../../api/supabase'
import { authStore } from '../../stores/auth'

export default defineComponent({
  name: 'AuthCallbackView',
  setup() {
    const error = ref(null)

    onMounted(async () => {
      // Con flowType: 'implicit', Supabase legge automaticamente il token
      // dall'hash (#access_token=...) quando la pagina carica.
      // getSession() è sufficiente per ottenere la sessione già pronta.

      const { data: { session }, error: sessionError } = await supabase.auth.getSession()

      if (sessionError) {
        error.value = sessionError.message
        return
      }

      if (session) {
        authStore.user = session.user
        await authStore._loadProfile()
        window.location.replace('/dashboard')
        return
      }

      // Fallback: aspetta l'evento SIGNED_IN (detectSessionInUrl processa async)
      let redirected = false
      const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
        if (redirected) return
        if (event === 'SIGNED_IN' && session) {
          redirected = true
          subscription.unsubscribe()
          authStore.user = session.user
          await authStore._loadProfile()
          window.location.replace('/dashboard')
        }
      })

      setTimeout(() => {
        if (!authStore.isLoggedIn) {
          subscription.unsubscribe()
          error.value = 'Link scaduto o già utilizzato. Richiedi un nuovo link.'
        }
      }, 10000)
    })

    return { error }
  }
})
</script>

<template>
  <main class="auth-view">
    <div class="auth-card auth-card--center">
      <template v-if="!error">
        <div class="auth-spinner-large"></div>
        <h1 class="auth-title">Accesso in corso…</h1>
        <p class="auth-subtitle">Stiamo verificando il tuo link magico.</p>
      </template>

      <template v-else>
        <div class="auth-icon-large">⚠️</div>
        <h1 class="auth-title">Link non valido</h1>
        <p class="auth-subtitle">{{ error }}</p>
        <a href="/login" class="auth-button auth-button--inline">Torna al Login</a>
      </template>
    </div>
  </main>
</template>
