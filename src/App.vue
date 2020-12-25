<template>
  <!-- <Header></Header> -->
  <NavBar></NavBar>
  <router-view></router-view>
</template>

<script lang="ts">
/** 暂时移除原有Header逻辑 */
// import Header from './components/header/index.vue';
import NavBar from './components/nav_bar/index.vue';
import { defineComponent } from "vue";
export default defineComponent({
  components: { 
    // Header,
    NavBar
  },
  setup(){
  }
});
</script>

<style lang="scss">
@import "@/assets/scss/variable.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
}
html{
  font-size: 26.66666667vw;
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
  background-color: $bg;
  color: $gray;
}
@media screen and (min-width: 1024px){
  html{
    font-size: 9vw;
  }
}
</style>
