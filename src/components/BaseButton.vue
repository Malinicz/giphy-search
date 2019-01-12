<template>
  <button><slot name="icon" /> <slot name="label" /></button>
</template>

<style scoped>
button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 200px;
  height: 60px;
  color: #ffffff;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 12px;
  border: none;
  background-color: #f0a293;
  box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
button:active {
  transform: scale(0.95);
}
@media (max-width: 500px) {
  button {
    max-width: 100%;
  }
}
</style>
