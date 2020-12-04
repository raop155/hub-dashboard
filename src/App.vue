<template>
  <div id="app">
    <Dashboard />
  </div>
</template>

<script>
import Dashboard from './views/Dashboard.vue';

export default {
  name: 'app',
  components: {
    Dashboard
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@font-face {
  font-family: 'DIN_Light';
  src: url(font/DINNextLTPro-Light.otf) format('opentype');
}

@font-face {
  font-family: 'DIN_UltraLight';
  src: url(font/DINNextLTPro-UltraLight.otf) format('opentype');
}

@font-face {
  font-family: 'DIN_Regular';
  src: url(font/DINNextLTPro-Regular.otf) format('opentype');
}

@font-face {
  font-family: 'DIN_bold';
  src: url(font/DINNextLTPro-Bold.otf) format('opentype');
}
@font-face {
  font-family: 'DIN_medium';
  src: url(font/DINNextLTPro-Medium.otf) format('opentype');
}

html {
  background-color: #000;
  font-family: 'DIN_Light';
}

a:hover {
  text-decoration: none;
  list-style: none;
}

body {
  width: 100%;
  height: 100%;
  background-image: url(assets/back_960X1080.png);
}
</style>
