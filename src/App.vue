<template>
  <div id="app">
    <header />
    <router-view/>
    <footer />
  </div>
</template>

<script>
import header from './components/Header.vue'
import footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    header,
    footer
  }
}
</script>

