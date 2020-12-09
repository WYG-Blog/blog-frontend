<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({});
</script>

<style lang="scss">
$neu-1: #ecf0f3;
$gray: #a0a5a8;
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body {
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  background-color: $neu-1;
  color: $gray;
}
</style>
