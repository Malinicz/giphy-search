<template>
  <div class="gif-holder">
    <BaseGif :imageUrl="gif.url" />
    <BaseActionIcon name="times" class="action-icon" @click.native="onRemove" />
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
    onRemove() {
      this.$store.dispatch('favoriteGifs/removeFavoriteGif', {
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
