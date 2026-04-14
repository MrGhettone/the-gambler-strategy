<script>
import { defineComponent } from 'vue'
import { authStore } from '../stores/auth'

export default defineComponent({
  name: 'DashboardView',
  setup() {
    async function logout() {
      await authStore.signOut()
      window.location.href = '/'
    }
    return { authStore, logout }
  }
})
</script>

<template>
  <main class="dashboard-view">
    <section class="dashboard-hero">
      <div class="dashboard-hero-content">
        <div class="dashboard-avatar">
          {{ authStore.profile?.email?.[0]?.toUpperCase() ?? '?' }}
        </div>
        <div>
          <h1>Bentornato</h1>
          <p class="dashboard-email">{{ authStore.user?.email }}</p>
        </div>
        <span v-if="authStore.isAdmin" class="badge-admin">Admin</span>
      </div>
    </section>

    <section class="dashboard-content">
      <div class="dashboard-wrapper">

        <!-- Info account -->
        <div class="dashboard-section">
          <h2>Il tuo account</h2>
          <div class="info-grid">
            <div class="info-card">
              <span class="info-label">Email</span>
              <span class="info-value">{{ authStore.user?.email }}</span>
            </div>
            <div class="info-card">
              <span class="info-label">Ruolo</span>
              <span class="info-value info-value--role" :class="authStore.isAdmin ? 'role-admin' : 'role-user'">
                {{ authStore.isAdmin ? 'Amministratore' : 'Utente' }}
              </span>
            </div>
            <div class="info-card">
              <span class="info-label">Membro dal</span>
              <span class="info-value">
                {{ new Date(authStore.profile?.created_at).toLocaleDateString('it-IT', { day: '2-digit', month: 'long', year: 'numeric' }) }}
              </span>
            </div>
          </div>
        </div>

        <!-- Area prodotti digitali (placeholder per sviluppi futuri) -->
        <div class="dashboard-section">
          <h2>I miei prodotti</h2>
          <div class="empty-state">
            <span class="empty-icon">🎴</span>
            <p>Non hai ancora acquistato prodotti digitali.</p>
            <a href="/#games" class="auth-button auth-button--inline">Esplora i giochi</a>
          </div>
        </div>

        <!-- Pannello admin (visibile solo agli admin) -->
        <div v-if="authStore.isAdmin" class="dashboard-section dashboard-section--admin">
          <h2>Pannello Amministratore</h2>
          <p class="admin-note">
            Hai accesso alle funzionalità di amministrazione del sito.
            Le sezioni admin saranno disponibili nelle prossime versioni.
          </p>
        </div>

        <button class="logout-button" @click="logout">Esci dall'account</button>
      </div>
    </section>
  </main>
</template>
