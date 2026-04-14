<script>
import { defineComponent, onMounted, ref } from 'vue'
import { supabase } from '../../api/supabase'
import { authStore } from '../../stores/auth'

export default defineComponent({
  name: 'AuthCallbackView',
  setup() {
    const error = ref(null)

    onMounted(async () => {
      // Supabase JS v2: con magic link il token arriva come
      // fragment (#access_token=...) oppure come code PKCE (?code=...).
      // getSession() lo processa automaticamente da entrambi i formati.
      const { data: { session }, error: err } = await supabase.auth.getSession()

      if (err) {
        error.value = err.message
        return
      }

      if (session) {
        authStore.user = session.user
        await authStore._loadProfile()
        window.location.href = '/dashboard'
        return
      }

      // Fallback: aspetta l'evento SIGNED_IN se la sessione non è ancora pronta
      const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
        if (event === 'SIGNED_IN' && session) {
          subscription.unsubscribe()
          authStore.user = session.user
          await authStore._loadProfile()
          window.location.href = '/dashboard'
        }
        if (event === 'SIGNED_OUT' || event === 'TOKEN_REFRESHED') {
          subscription.unsubscribe()
          error.value = 'Link non valido o scaduto.'
        }
      })

      // Timeout di sicurezza: dopo 8 secondi mostra errore
      setTimeout(() => {
        if (!authStore.isLoggedIn) {
          error.value = 'Link scaduto o già utilizzato. Richiedi un nuovo link.'
        }
      }, 8000)
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
