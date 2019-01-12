<template>
  <BaseSection>
    <h1 v-show="listLength">
      You have {{ listLength }} favorite
      {{ listLength === 1 ? 'gif' : 'gifs' }}!
    </h1>
    <h1 v-show="!listLength">You don't have any favorite gifs :(</h1>
    <BaseGifsHolder>
      <FavoriteGif
        v-for="gif in favoriteGifs.favoriteGifs"
        :key="gif.id"
        :gif="gif"
      /> </BaseGifsHolder
  ></BaseSection>
</template>

<script>
import { mapState } from 'vuex';
import { FavoriteGif } from './components';

export default {
  components: {
    FavoriteGif
  },
  computed: {
    listLength() {
      return this.favoriteGifs.favoriteGifs.length;
    },
    ...mapState(['favoriteGifs'])
  }
};
</script>

<style scoped>
h1 {
  margin-top: 0;
  margin-bottom: 0;
  text-transform: uppercase;
  font-size: 40px;
  font-weight: 900;
}
</style>
