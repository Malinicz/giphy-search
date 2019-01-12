<template>
  <div class="gif-holder">
    <BaseGif :imageUrl="gif.url" />
    <BaseActionIcon
      name="star"
      :isActive="gif.isFavorite"
      class="action-icon"
      @click.native="onAddToFavoriteIconClick"
    />
  </div>
</template>

<script>
export default {
  props: {
    gif: {
      type: Object
    }
  },
  methods: {
    onAddToFavoriteIconClick() {
      this.gif.isFavorite
        ? this.$store.dispatch('favoriteGifs/removeFavoriteGif', {
            gif: this.gif
          })
        : this.$store.dispatch('favoriteGifs/addFavoriteGif', {
            gif: this.gif
          });
    }
  }
};
</script>

<style scoped>
.gif-holder {
  position: relative;
}
.action-icon {
  position: absolute;
  top: -3px;
  right: -3px;
}
</style>
