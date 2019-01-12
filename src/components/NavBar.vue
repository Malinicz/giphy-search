<template>
  <nav>
    <router-link :to="{ name: 'home' }" class="nav-item">Home</router-link>
    <router-link :to="{ name: 'favorites' }" class="nav-item"
      >Favorites</router-link
    >
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  display: flex;
  width: 100%;
  max-width: 400px;
  margin-top: 50px;
  border-radius: 10px;
  border: 1px solid #f0a293;
}
.nav-item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  color: #f0a293;
}
.nav-item:first-child {
  border-top-left-radius: 9px;
  border-bottom-left-radius: 9px;
}
.nav-item:last-child {
  border-top-right-radius: 9px;
  border-bottom-right-radius: 9px;
}
.nav-item.router-link-exact-active {
  background-color: #f0a293;
  color: #ffffff;
}
</style>
