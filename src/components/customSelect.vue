<template>
    <div class="select">
        <div class="custom-select" @blur="open = false">
            <div class="selected" :class="{open: open}" @click="open = !open">{{ selected }}</div>
            <div class="items" :class="{selectHide: !open}">
                <div
                    class="item"
                    v-for="(option, i) of this.options"
                    :key="i"
                    @click="selected=option; keyTo=i; open=false; $emit('input', option);"
                >{{ option }}</div>
            </div>
        </div>
        <a :href="this.wip[this.keyTo].link" target="_blank" rel="noopener nofollow">Go to <b>{{this.wip[this.keyTo].name}}</b></a>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: "customSelect",
    props: {
        options:{
            required: true
        }
    },
    computed: {
      ...mapGetters(['wip'])  
    },
    data() {
        return {
            selected: this.options.length > 0 ? this.options[0] : null,
            keyTo: this.options.length > 0 ? 0 : null,
            open: false,
        };
    },
    mounted() {
        this.$emit("input", this.selected);
        console.log(this.keyTo)
        console.log(this.wip)
    }
}
</script>

<style lang="scss">

</style>