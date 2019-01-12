import Vue from 'vue';
import Vuex from 'vuex';
import * as gifs from '@/store/modules/gifs.js';
import * as favoriteGifs from '@/store/modules/favoriteGifs.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    gifs,
    favoriteGifs
  }
});
