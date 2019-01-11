<template>
  <input
    type="text"
    v-bind:value="value"
    v-on:input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  props: ['value']
};
</script>

<style scoped>
input {
  margin-bottom: 15px;
  padding: 15px;
  width: 100%;
  height: 60px;
  border: none;
  border-radius: 12px;
  box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.2);
}

input:focus {
  z-index: 1;
}
</style>
