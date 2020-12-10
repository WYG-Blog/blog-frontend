<template>
  <Header></Header>
  <router-view></router-view>
</template>

<script lang="ts">
import Header from './components/header/index.vue';
import { defineComponent } from "vue";
export default defineComponent({
  components: { 
    Header
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
