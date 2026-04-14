<script>
import { defineComponent, ref } from 'vue'
import { supabase } from '../../api/supabase'

export default defineComponent({
  name: 'LoginView',
  setup() {
    const email     = ref('')
    const loading   = ref(false)
    const error     = ref(null)

    async function sendMagicLink() {
      error.value   = null
      loading.value = true

      const redirectTo = `${window.location.origin}/auth/callback`

      const { error: authError } = await supabase.auth.signInWithOtp({
        email: email.value.trim(),
        options: { emailRedirectTo: redirectTo }
      })

      loading.value = false

      if (authError) {
        error.value = authError.message
        return
      }

      // Salvo l'email in sessionStorage per mostrarla nella pagina di conferma
      sessionStorage.setItem('magic_link_email', email.value.trim())
      window.location.href = '/email-inviata'
    }

    return { email, loading, error, sendMagicLink }
  }
})
</script>

<template>
  <main class="auth-view">
    <div class="auth-card">
      <div class="auth-suits">♠ ♥ ♦ ♣</div>

      <h1 class="auth-title">Accedi</h1>
      <p class="auth-subtitle">
        Inserisci la tua email. Ti invieremo un link per accedere
        istantaneamente, senza password.
      </p>

      <form class="auth-form" @submit.prevent="sendMagicLink">
        <div class="form-group">
          <label for="email" class="form-label">Indirizzo Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            class="form-input"
            placeholder="la-tua@email.com"
            required
            autocomplete="email"
          />
        </div>

        <p v-if="error" class="form-error">{{ error }}</p>

        <button type="submit" class="auth-button" :disabled="loading">
          <span v-if="loading" class="btn-spinner"></span>
          <span v-else>Invia Magic Link ✉️</span>
        </button>
      </form>

      <p class="auth-note">
        Non hai un account? Basta inserire la tua email: verrà creato automaticamente.
      </p>
    </div>
  </main>
</template>
