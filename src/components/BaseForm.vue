<template>
  <form><slot /></form>
</template>

<style scoped>
form {
  display: flex;
}
@media (max-width: 500px) {
  form {
    flex-direction: column;
  }
}
</style>
