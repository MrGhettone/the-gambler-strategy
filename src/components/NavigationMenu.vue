<script>
import { defineComponent, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { authStore } from '../stores/auth'

export default defineComponent({
  name: 'NavigationMenu',
  components: { RouterLink },
  data() {
    return {
      isMobileMenuOpen: false,
      isGamesDropdownOpen: false,
      isUserDropdownOpen: false,
      games: [
        { name: 'Blackjack',    slug: 'blackjack',    icon: '🃏' },
        { name: 'Poker',        slug: 'poker',         icon: '🎰' },
        { name: 'Roulette',     slug: 'roulette',      icon: '🎡' },
        { name: 'Slot Machine', slug: 'slot-machine',  icon: '🎯' },
        { name: 'Baccarat',     slug: 'baccarat',      icon: '🎲' },
        { name: 'Craps',        slug: 'craps',         icon: '🎪' }
      ]
    }
  },
  computed: {
    isLoggedIn()  { return authStore.isLoggedIn },
    isAdmin()     { return authStore.isAdmin },
    userInitial() { return authStore.user?.email?.[0]?.toUpperCase() ?? '?' }
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
      if (!this.isMobileMenuOpen) {
        this.isGamesDropdownOpen = false
        this.isUserDropdownOpen  = false
      }
    },
    closeMobileMenu() {
      this.isMobileMenuOpen    = false
      this.isGamesDropdownOpen = false
      this.isUserDropdownOpen  = false
    },
    toggleGamesDropdown() { this.isGamesDropdownOpen = !this.isGamesDropdownOpen },
    toggleUserDropdown()  { this.isUserDropdownOpen  = !this.isUserDropdownOpen  },
    async logout() {
      this.closeMobileMenu()
      await authStore.signOut()
      window.location.href = '/'
    }
  }
})
</script>

<template>
  <nav class="navbar">
    <div class="navbar-container">
      <!-- Logo -->
      <RouterLink to="/" class="navbar-logo" @click="closeMobileMenu">
        <span class="logo-icon">🎰</span>
        <span class="logo-text">Gambler's Strategy</span>
      </RouterLink>

      <!-- Hamburger (Mobile) -->
      <div class="hamburger" :class="{ active: isMobileMenuOpen }" @click="toggleMobileMenu">
        <span></span><span></span><span></span>
      </div>

      <!-- Nav Links -->
      <ul class="nav-menu" :class="{ active: isMobileMenuOpen }">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link" @click="closeMobileMenu">Home</RouterLink>
        </li>

        <!-- Dropdown Giochi -->
        <li class="nav-item nav-item--dropdown">
          <button
            class="nav-link nav-link--dropdown-trigger"
            @click="toggleGamesDropdown"
            aria-haspopup="true"
            :aria-expanded="isGamesDropdownOpen"
          >
            Giochi <span class="dropdown-arrow">▾</span>
          </button>
          <ul class="dropdown-menu" :class="{ open: isGamesDropdownOpen }">
            <li v-for="game in games" :key="game.slug">
              <RouterLink
                :to="`/giochi/${game.slug}`"
                class="dropdown-item"
                @click="closeMobileMenu"
              >
                <span class="dropdown-item-icon">{{ game.icon }}</span>
                {{ game.name }}
              </RouterLink>
            </li>
          </ul>
        </li>

        <li class="nav-item">
          <a href="/#strategie" class="nav-link" @click="closeMobileMenu">Strategie</a>
        </li>
        <li class="nav-item">
          <RouterLink to="/about" class="nav-link" @click="closeMobileMenu">Chi Siamo</RouterLink>
        </li>

        <!-- Utente NON loggato -->
        <li v-if="!isLoggedIn" class="nav-item">
          <RouterLink to="/login" class="nav-link nav-link-contact" @click="closeMobileMenu">
            Accedi
          </RouterLink>
        </li>

        <!-- Utente loggato: avatar + dropdown -->
        <li v-else class="nav-item nav-item--dropdown nav-item--user">
          <button
            class="nav-user-trigger"
            @click="toggleUserDropdown"
            aria-haspopup="true"
            :aria-expanded="isUserDropdownOpen"
          >
            <span class="nav-avatar">{{ userInitial }}</span>
            <span class="dropdown-arrow">▾</span>
          </button>
          <ul class="dropdown-menu dropdown-menu--right" :class="{ open: isUserDropdownOpen }">
            <li class="dropdown-user-info">
              <span class="dropdown-user-email">{{ authStore.user?.email }}</span>
              <span v-if="isAdmin" class="dropdown-badge-admin">Admin</span>
            </li>
            <li>
              <RouterLink to="/dashboard" class="dropdown-item" @click="closeMobileMenu">
                <span class="dropdown-item-icon">🎴</span> Dashboard
              </RouterLink>
            </li>
            <li v-if="isAdmin">
              <RouterLink to="/admin" class="dropdown-item" @click="closeMobileMenu">
                <span class="dropdown-item-icon">⚙️</span> Pannello Admin
              </RouterLink>
            </li>
            <li class="dropdown-divider"></li>
            <li>
              <button class="dropdown-item dropdown-item--logout" @click="logout">
                <span class="dropdown-item-icon">🚪</span> Esci
              </button>
            </li>
          </ul>
        </li>

      </ul>
    </div>
  </nav>
</template>
