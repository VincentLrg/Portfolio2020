<template>
  <div id="app" :class="`theme-${global.theme}`">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['global'])
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/fonts";
  @import "@/assets/scss/app";
</style>
