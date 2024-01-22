<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import "normalize.css";
import "destyle.css";

export default {
  name: "App",
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(to bottom, #b0d3e1, #1b6d92);
}
/* Global Styles */
body {
  font-family: "Noto Sans", sans-serif;
  line-height: 1.6;
/* background-image: url(assets/images/grow-official_background.jpg);
background-position: center;
background-repeat: no-repeat;
background-attachment: fixed; 
width: 100vw;
height: 100vh; */

}
p {
  font-size: 12px;
}
h1 {
  font-size: large;
}
</style>
