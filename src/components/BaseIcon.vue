<template>
  <v-icon :name="name" class="icon" :scale="scale" />
</template>

<script>
import Icon from 'vue-awesome/components/Icon';

// add icons if needed
import 'vue-awesome/icons/spinner';
import 'vue-awesome/icons/search';

export default {
  components: {
    'v-icon': Icon
  },
  props: {
    name: {
      type: String
    },
    scale: {
      type: String
    }
  }
};
</script>

<style scoped>
.icon {
  color: #fff;
}
</style>
