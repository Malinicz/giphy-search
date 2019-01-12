<template>
  <BaseForm @submit.native.prevent="onSubmit" class="search-form">
    <BaseTextInput
      v-model="searchValue"
      placeholder="Type some text..."
      class="search-input"
    />
    <BaseButton type="submit" value="Submit">
      <template slot="label">
        Search
      </template>
      <template slot="icon">
        <BaseIcon name="search" :style="{ marginRight: '5px' }" />
      </template>
    </BaseButton>
  </BaseForm>
</template>

<script>
import { mapState } from 'vuex';

export default {
  created() {
    this.searchValue = this.gifs.currentSearchValue;
  },
  data() {
    return {
      searchValue: ''
    };
  },
  methods: {
    onSubmit() {
      this.searchValue
        ? this.$store.dispatch('gifs/searchGifs', {
            query: this.searchValue,
            offset: 0
          })
        : this.$store.dispatch('gifs/fetchRandomGifs', { offset: 0 });
    }
  },
  computed: {
    ...mapState(['gifs'])
  }
};
</script>

<style scoped>
.search-form {
  width: 100%;
  max-width: 800px;
}

.search-input {
  margin-right: 15px;
}
</style>
