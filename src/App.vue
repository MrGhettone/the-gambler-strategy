<script>
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import NavigationMenu from './components/NavigationMenu.vue'

export default defineComponent({
  name: 'App',
  components: {
    RouterView,
    NavigationMenu
  }
})
</script>

<template>
  <div class="app">
    <NavigationMenu />
    <RouterView />
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
