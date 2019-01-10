<template>
  <div id="app">
    <header>
      <img src="./assets/logo.svg" id="logo" />
      <div id="nav">
        <router-link :to="{ name: 'home' }">Home</router-link> |
        <router-link :to="{ name: 'favorites' }">Favorites</router-link>
      </div>
    </header>
    <main><router-view /></main>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  color: #2c3e50;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #ffffff;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#logo {
  padding-top: 50px;
}

#nav {
  padding-top: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
