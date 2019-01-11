<template>
  <theme-provider v-bind:theme="theme">
    <div id="app">
      <header>
        <img src="./assets/logo.svg" id="logo" />
        <div id="nav">
          <router-link :to="{ name: 'home' }">Home</router-link> |
          <router-link :to="{ name: 'favorites' }">Favorites</router-link>
        </div>
      </header>
      <BaseMain><router-view /></BaseMain>
    </div>
  </theme-provider>
</template>

<script>
import { ThemeProvider } from 'vue-styled-components';
import theme from '@/styles/theme';

export default {
  components: {
    'theme-provider': ThemeProvider
  },
  data() {
    return {
      theme
    };
  }
};
</script>

<style>
@font-face {
  font-family: 'CairoRegular';
  src: url('./assets/fonts/Cairo-Regular.ttf');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'CairoBold';
  src: url('./assets/fonts/Cairo-Bold.ttf');
  font-weight: 700;
  font-style: normal;
}

* {
  box-sizing: border-box;
  /* border: 1px solid black; */
}

body {
  margin: 0;
  padding: 0;
  font-family: 'CairoRegular', Helvetica, Arial, sans-serif;
  font-size: 16px;
  color: #2c3e50;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #ffffff;
}

input {
  font-family: 'CairoRegular', Helvetica, Arial, sans-serif;
  font-size: 16px;
}

button {
  font-family: 'CairoRegular', Helvetica, Arial, sans-serif;
  font-size: 16px;
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
