<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import '@/scss/app.scss'
import './assets/js/app.js';
export default {
  computed: {
    layout() {
      return `layout-${this.$route.meta.layout || 'default'}`
    }
  }
}
</script>


<style>
  @import './assets/css/app.css';
</style>