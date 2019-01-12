<template>
  <div class="holder">
    <BaseIcon name="spinner" scale="2" class="spinner" />
    <div
      class="gif-image"
      :style="{ backgroundImage: `url(${imageUrl})` }"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String
    }
  }
};
</script>

<style scoped>
.holder {
  position: relative;
  background-color: rgba(0, 0, 0, 0.3);
  margin: 10px;
  border-radius: 12px;
}
.gif-image {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 12px;
  background-position: center;
  background-size: cover;
}
@keyframes rotateSpinner {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(359deg);
  }
}
.spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  animation: rotateSpinner 2s infinite linear;
}
</style>
