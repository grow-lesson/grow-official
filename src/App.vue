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
  background: linear-gradient(to bottom, #B0D3E1, #1B6D92);
}
/* Global Styles */
body {
  font-family: 'Noto Sans', sans-serif;
  line-height: 1.6;
}
p {
  font-size: 12px;
}
h1 {
  font-size: large;
}
</style>
