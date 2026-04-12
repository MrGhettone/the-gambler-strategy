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
      isMobileMenuOpen: false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false
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
        <li class="nav-item">
          <a href="/#games" class="nav-link" @click="closeMobileMenu">
            Giochi
          </a>
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

<style scoped lang="scss">
// Navigation Bar Styles
.navbar {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 1rem 0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

// Logo
.navbar-logo {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 800;
  color: white;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
}

.logo-icon {
  font-size: 2rem;
}

.logo-text {
  background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

// Navigation Menu
.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
  align-items: center;
}

.nav-item {
  position: relative;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 600;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: white;
    transition: width 0.3s ease;
  }

  &:hover {
    &:after {
      width: 100%;
    }
  }

  &.nav-link-contact {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 25px;
    padding: 0.5rem 1.5rem;

    &:hover {
      background: rgba(255, 255, 255, 0.3);

      &:after {
        display: none;
      }
    }
  }
}

// Hamburger Menu (Mobile)
.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 0.4rem;

  span {
    width: 25px;
    height: 3px;
    background: white;
    border-radius: 3px;
    transition: all 0.3s ease;
  }

  &.active {
    span:nth-child(1) {
      transform: rotate(45deg) translate(8px, 8px);
    }

    span:nth-child(2) {
      opacity: 0;
    }

    span:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -7px);
    }
  }
}

// Mobile Responsive
@media (max-width: 768px) {
  .navbar-container {
    padding: 0 1rem;
  }

  .hamburger {
    display: flex;
  }

  .nav-menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    flex-direction: column;
    gap: 0;
    padding: 1rem 0;
    height: 0;
    overflow: hidden;
    transition: height 0.3s ease;

    &.active {
      height: 250px;
    }
  }

  .nav-item {
    width: 100%;
  }

  .nav-link {
    display: block;
    padding: 1rem 2rem;
    width: 100%;

    &:after {
      display: none;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    &.nav-link-contact {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 0;
      padding: 1rem 2rem;
    }
  }
}
</style>
