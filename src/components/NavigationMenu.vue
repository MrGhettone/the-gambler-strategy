<script>
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

export default defineComponent({
  name: 'NavigationMenu',
  components: {
    RouterLink
  },
  data() {
    return {
      isMobileMenuOpen: false,
      isGamesDropdownOpen: false,
      games: [
        { name: 'Blackjack', slug: 'blackjack', icon: '🃏' },
        { name: 'Poker', slug: 'poker', icon: '🎰' },
        { name: 'Roulette', slug: 'roulette', icon: '🎡' },
        { name: 'Slot Machine', slug: 'slot-machine', icon: '🎯' },
        { name: 'Baccarat', slug: 'baccarat', icon: '🎲' },
        { name: 'Craps', slug: 'craps', icon: '🎪' }
      ]
    }
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
      if (!this.isMobileMenuOpen) {
        this.isGamesDropdownOpen = false
      }
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false
      this.isGamesDropdownOpen = false
    },
    toggleGamesDropdown() {
      this.isGamesDropdownOpen = !this.isGamesDropdownOpen
    }
  }
})
</script>

<template>
  <nav class="navbar">
    <div class="navbar-container">
      <!-- Logo -->
      <RouterLink to="/#hero" class="navbar-logo">
        <span class="logo-icon">🎰</span>
        <span class="logo-text">Gambler's Strategy</span>
      </RouterLink>

      <!-- Hamburger Menu (Mobile) -->
      <div class="hamburger" :class="{ active: isMobileMenuOpen }" @click="toggleMobileMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <!-- Navigation Links -->
      <ul class="nav-menu" :class="{ active: isMobileMenuOpen }">
        <li class="nav-item">
          <RouterLink to="/#hero" class="nav-link" @click="closeMobileMenu">
            Home
          </RouterLink>
        </li>

        <!-- Giochi con tendina -->
        <li class="nav-item nav-item--dropdown">
          <button
            class="nav-link nav-link--dropdown-trigger"
            @click="toggleGamesDropdown"
            aria-haspopup="true"
            :aria-expanded="isGamesDropdownOpen"
          >
            Giochi
            <span class="dropdown-arrow">▾</span>
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
          <a href="/#strategie" class="nav-link" @click="closeMobileMenu">
            Strategie
          </a>
        </li>
        <li class="nav-item">
          <RouterLink to="/about" class="nav-link" @click="closeMobileMenu">
            Chi Siamo
          </RouterLink>
        </li>
        <li class="nav-item">
          <a href="/contatti" class="nav-link nav-link-contact" @click="closeMobileMenu">
            Contatti
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
