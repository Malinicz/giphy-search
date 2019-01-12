<template>
  <div id="app">
    <header>
      <img src="./assets/logo.svg" id="logo" />
      <NavBar />
    </header>
    <BaseMain><router-view /></BaseMain>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';

export default {
  created() {
    this.$store.dispatch('gifs/fetchRandomGifs', { offset: 0 });

    const favoriteGifs = localStorage.getItem('favoriteGifs');
    if (favoriteGifs) {
      this.$store.dispatch('favoriteGifs/setFavoriteGifs', {
        favoriteGifs: JSON.parse(favoriteGifs)
      });
    }
  },
  components: {
    NavBar
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

header {
  display: flex;
  flex-direction: column;
  align-items: center;
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
  padding: 50px 15px 0px 15px;
  width: 100%;
}
</style>
