<template>
    <img class="vl-switch-theme" :src="global.switchTheme" v-on:click="changeTheme">
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'SwitchTheme',
    computed: {
        ...mapGetters(['global'])
    },
    methods: {
        ...mapActions(['setTheme', 'setBgImage']),

        changeTheme() {
            if(this.global.theme === 'light') {
                this.setTheme('dark')
                this.setBgImage(require('@/assets/images/background-dark.svg'))
            } else {
                this.setTheme('light')
                this.setBgImage(require('@/assets/images/background-light.svg'))
            }
        },
    },
}
</script>

<style lang="scss">
    @import '@/assets/scss/switchTheme';
</style>