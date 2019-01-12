export const namespaced = true;

export const state = {
  favoriteGifs: []
};

export const mutations = {
  PUSH_FAVORITE_GIF(state, gif) {
    state.favoriteGifs.push(gif);
  },
  REMOVE_FAVORITE_GIF(state, gif) {
    state.favoriteGifs = state.favoriteGifs.filter(favoriteGif => {
      return favoriteGif.id !== gif.id;
    });
  },
  SET_FAVORITE_GIFS(state, favoriteGifs) {
    state.favoriteGifs = favoriteGifs;
  }
};

export const actions = {
  addFavoriteGif({ commit, dispatch, state }, { gif }) {
    if (!state.favoriteGifs.find(favoriteGif => favoriteGif.id === gif.id)) {
      commit('PUSH_FAVORITE_GIF', gif);
      dispatch('gifs/markFavorite', gif, { root: true });
      localStorage.setItem('favoriteGifs', JSON.stringify(state.favoriteGifs));
    }
  },
  removeFavoriteGif({ commit, dispatch, state }, { gif }) {
    commit('REMOVE_FAVORITE_GIF', gif);
    dispatch('gifs/unmarkFavorite', gif, { root: true });
    localStorage.setItem('favoriteGifs', JSON.stringify(state.favoriteGifs));
  },
  setFavoriteGifs({ commit }, { favoriteGifs }) {
    commit('SET_FAVORITE_GIFS', favoriteGifs);
  }
};
