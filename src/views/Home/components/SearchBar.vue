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
    </BaseButton>
  </BaseForm>
</template>

<script>
export default {
  data() {
    return {
      searchValue: ''
    };
  },
  methods: {
    onSubmit() {
      console.log('submitting', this.searchValue);
    }
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
