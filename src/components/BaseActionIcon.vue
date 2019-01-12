<template>
  <div class="gif-button" :style="{ backgroundColor: wrapperColor }">
    <v-icon :name="name" class="icon" :style="{ color: iconColor }" />
  </div>
</template>

<script>
import Icon from 'vue-awesome/components/Icon';

// add icons if needed
import 'vue-awesome/icons/star';
import 'vue-awesome/icons/times';

export default {
  components: {
    'v-icon': Icon
  },
  props: {
    name: {
      type: String
    },
    isActive: {
      type: Boolean
    }
  },
  computed: {
    wrapperColor() {
      return this.isActive ? '#F5C600' : '#000000';
    },
    iconColor() {
      return this.isActive ? '#000000' : '#ffffff';
    }
  }
};
</script>

<style scoped>
.gif-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  background-color: #000;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: 0.2s ease transform, 0.1s ease background-color;
}
.gif-button:hover {
  transform: scale(1.2);
}
.gif-button:active {
  transform: scale(0.8);
}
.icon {
  color: #fff;
}
</style>
