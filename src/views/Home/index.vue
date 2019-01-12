<template>
  <BaseSection
    ><SearchBar />
    <BaseGifsHolder>
      <Gif v-for="gif in gifs.gifs" :key="gif.id" :gif="gif"
    /></BaseGifsHolder>
    <div class="navigation-buttons-holder">
      <button
        v-show="hasPreviousPage"
        @click="onPreviousClick"
        class="navigation-button"
      >
        Prev
      </button>
      <button
        v-show="hasNextPage"
        @click="onNextClick"
        class="navigation-button"
      >
        Next
      </button>
    </div>
  </BaseSection>
</template>

<script>
import { mapState } from 'vuex';
import { SearchBar, Gif } from './components';

export default {
  components: {
    SearchBar,
    Gif
  },
  methods: {
    onNextClick() {
      this.$store.dispatch('gifs/fetchNextPage');
    },
    onPreviousClick() {
      this.$store.dispatch('gifs/fetchPreviousPage');
    }
  },
  computed: {
    hasNextPage(state) {
      const { offset, total_count, count } = state.gifs.pagination;
      return offset < total_count - count;
    },
    hasPreviousPage(state) {
      const { offset, count } = state.gifs.pagination;
      return offset - count >= 0;
    },
    ...mapState(['gifs', 'favoriteGifs'])
  }
};
</script>

<style>
.gifs-holder {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 50px;
  max-width: 1200px;
}
.navigation-buttons-holder {
  display: flex;
  padding-top: 50px;
}
.navigation-button {
  width: 150px;
  background-color: none;
  border: none;
  cursor: pointer;
  font-weight: bold;
  color: #f0a293;
  margin: 5px;
  font-size: 18px;
}
</style>
