<template>
  <div class="home" ref="homeDiv" :style="{'background-image':`url(${global.bgImage})`}">
    <h1>Vincent Largillet</h1>   
    <div class="container" v-show="global.showContainer">
      <SwitchTheme />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapMutations } from "vuex";
import SwitchTheme from '../components/SwitchTheme.vue';


export default {
  name: 'Home',
  components: {
    SwitchTheme
  },
  computed: {
    ...mapGetters(['global'])
  },
  methods: {
    ...mapMutations(['setTrueShowContainer']),

    fadeOut(el, ms) {
      if (ms) {
        el.style.transition = `opacity ${ms}ms`
        el.addEventListener(
          'transitionend',
          function() {
            el.style.display = 'none'
          },
          false
        )
        el.style.opacity = '0'
      }
    },
    fadeIn(elem, ms) {
      elem.style.opacity = 0

      if (ms) {
        let opacity = 0
        const timer = setInterval(function() {
          opacity += 50 / ms
          if (opacity >= 1) {
            clearInterval(timer)
            opacity = 1
          }
          elem.style.opacity = opacity
        }, 50)
      } else {
        elem.style.opacity = 1
      }
    }
  },
  mounted() {
    var homeDiv = this.$refs.homeDiv
    var h1Home = document.querySelector('.home h1')
    var containerHome = document.querySelector('.home .container')
    setTimeout(()=>{
      homeDiv.classList.add('expand')
      this.fadeOut(h1Home, 1000)
      setTimeout(()=>{
        this.setTrueShowContainer()
        this.fadeIn(containerHome, 1000)
      }, 1000)
    }, 2500)
  }
};
</script>

<style lang="scss">
  @import "@/assets/scss/home";
</style>
