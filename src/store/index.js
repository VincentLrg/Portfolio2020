import Vue from 'vue';
import Vuex from 'vuex';

import * as getters from './getters'

import switchTheme from '@/assets/images/switchTheme.svg'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    global: {
      theme: "light",
      showContainer: false,
      switchTheme: switchTheme,
      bgImage: require('@/assets/images/background-light.svg'),
    },
    projects: {

    },
    cursorType: {

    },
  },
  getters,
  mutations: {
    setTrueShowContainer(state){
      state.global.showContainer = true
    },
    setTheme(state, payload){
      state.global.theme = payload
    },
    setBgImage(state, payload){
      state.global.bgImage = payload
    }
  },
  actions: {
    setTheme({ commit }, payload){
      commit('setTheme', payload)
    },
    setBgImage({ commit }, payload){
      commit('setBgImage', payload)
    }
  },
});
