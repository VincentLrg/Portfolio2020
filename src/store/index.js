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
    wip: [
      {
        name: "Recipeat",
        link: "https://recipeatvl.netlify.app/"
      },
      {
        name: "Journée des Métiers - MMI Elbeuf",
        link: "https://www.mmirouen.fr/jdm2019/"
      },
      {
        name: "BE-ETC",
        link: "http://www.be-etc.com/"
      },
      {
        name: "Gobelins - Dataviz",
        link: "https://5continentsdeplastiques.surge.sh/"
      },
      {
        name: "Gobelins - Workshop Louvre",
        link: "https://vrmt.surge.sh/"
      },
      {
        name: "Gobelins - Ex Nihilo",
        link: "https://exnihilo.netlify.app/"
      },
    ],
    options: ["Recipeat", "Journée des Métiers - MMI Elbeuf", "BE-ETC", "Gobelins - Dataviz", "Gobelins - Workshop Louvre", "Gobelins - Ex Nihilo"]
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
