import GiphyService from '@/services/GiphyService';
import { DEFAULT_LIMIT } from '@/services/GiphyService';

export const namespaced = true;

export const state = {
  gifs: [],
  fetchType: 'fetchRandomGifs',
  currentSearchValue: '',
  pagination: {
    count: DEFAULT_LIMIT,
    offset: 0,
    total_count: 0
  }
};

export const mutations = {
  SET_GIFS_LIST(state, gifs) {
    state.gifs = gifs;
  },
  SET_FETCH_TYPE(state, fetchType) {
    state.fetchType = fetchType;
  },
  SET_PAGINATION(state, pagination) {
    state.pagination = pagination;
  },
  SET_CURRENT_SEARCH_VALUE(state, searchValue) {
    state.currentSearchValue = searchValue;
  },
  MARK_FAVORITE(state, favoriteGif) {
    state.gifs = state.gifs.map(gif =>
      gif.id === favoriteGif.id ? { ...gif, isFavorite: true } : gif
    );
  },
  UNMARK_FAVORITE(state, notFavoriteGif) {
    state.gifs = state.gifs.map(gif =>
      gif.id === notFavoriteGif.id ? { ...gif, isFavorite: false } : gif
    );
  }
};

export const actions = {
  searchGifs({ commit, rootState }, { query, offset }) {
    GiphyService.searchGifs(query, offset)
      .then(response => {
        const gifs = response.data.data.map(gif => {
          return {
            id: gif.id,
            url: gif.images.fixed_height_downsampled.url,
            isFavorite: !!rootState.favoriteGifs.favoriteGifs.find(
              favoriteGif => favoriteGif.id === gif.id
            )
          };
        });
        commit('SET_GIFS_LIST', gifs);
        commit('SET_PAGINATION', response.data.pagination);
        commit('SET_FETCH_TYPE', 'searchGifs');
        commit('SET_CURRENT_SEARCH_VALUE', query);
      })
      .catch(error => {
        console.log('error: ', error);
      });
  },
  fetchRandomGifs({ commit, rootState }, { offset }) {
    GiphyService.fetchTrendingGifs(offset)
      .then(response => {
        const gifs = response.data.data.map(gif => {
          return {
            id: gif.id,
            url: gif.images.fixed_height_downsampled.url,
            isFavorite: !!rootState.favoriteGifs.favoriteGifs.find(
              favoriteGif => favoriteGif.id === gif.id
            )
          };
        });
        commit('SET_GIFS_LIST', gifs);
        commit('SET_PAGINATION', response.data.pagination);
        commit('SET_FETCH_TYPE', 'fetchRandomGifs');
      })
      .catch(error => {
        console.log('error: ', error);
      });
  },
  fetchNextPage({ dispatch, state, getters }) {
    const offset = getters.getNextOffset();

    switch (state.fetchType) {
      case 'fetchRandomGifs':
        return dispatch('fetchRandomGifs', { offset });
      case 'searchGifs':
        return dispatch('searchGifs', {
          query: state.currentSearchValue,
          offset
        });
      default:
        return;
    }
  },
  fetchPreviousPage({ dispatch, state, getters }) {
    const offset = getters.getPreviousOffset();

    switch (state.fetchType) {
      case 'fetchRandomGifs':
        return dispatch('fetchRandomGifs', { offset });
      case 'searchGifs':
        return dispatch('searchGifs', {
          query: state.currentSearchValue,
          offset
        });
      default:
        return;
    }
  },
  markFavorite({ commit }, gif) {
    commit('MARK_FAVORITE', gif);
  },
  unmarkFavorite({ commit }, gif) {
    commit('UNMARK_FAVORITE', gif);
  }
};

export const getters = {
  getNextOffset: state => () => {
    return state.pagination.offset + DEFAULT_LIMIT;
  },
  getPreviousOffset: state => () => {
    return state.pagination.offset - DEFAULT_LIMIT;
  }
};
