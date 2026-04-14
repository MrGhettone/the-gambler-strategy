<script>
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  name: 'EmailSentView',
  setup() {
    const email = ref('')
    onMounted(() => {
      email.value = sessionStorage.getItem('magic_link_email') || ''
    })
    return { email }
  }
})
</script>

<template>
  <main class="auth-view">
    <div class="auth-card auth-card--center">
      <div class="auth-icon-large">✉️</div>

      <h1 class="auth-title">Controlla la tua email</h1>

      <p class="auth-subtitle" v-if="email">
        Abbiamo inviato un link di accesso a
        <strong class="auth-email">{{ email }}</strong>.
      </p>
      <p class="auth-subtitle" v-else>
        Abbiamo inviato un link di accesso alla tua email.
      </p>

      <ul class="auth-steps">
        <li><span class="step-num">1</span> Apri la tua casella email</li>
        <li><span class="step-num">2</span> Clicca sul link "Accedi a Gambler's Strategy"</li>
        <li><span class="step-num">3</span> Verrai reindirizzato automaticamente</li>
      </ul>

      <p class="auth-note">
        Il link scade dopo 1 ora. Non hai ricevuto nulla?
        <a href="/login" class="auth-link">Prova di nuovo</a>.
      </p>
    </div>
  </main>
</template>
