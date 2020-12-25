<template>
  <section class="navbar">
    <header class="navbar_header">BLOG - 我爱吃烤鸡翅</header>
    <nav class="navbar_nav">
      <router-link v-for="(item, index) in navs" :ref="m_setNavEl" :key="index" :to="item.navTo">
        <span class="navbar_nav_icon iconfont" :class="item.icon"></span>
        <span class="navbar_nav_name">{{item.title}}</span>
      </router-link>
    </nav>
  </section>
</template>
<script lang="ts">
import { defineComponent} from 'vue'
import useNav from "./compositions/nav";
export default defineComponent({
  setup(){
    const {navs, m_setNavEl} = useNav();

    return {
      navs,
      m_setNavEl
    }
  }
});
</script>
<style lang="scss">
@import "@/assets/scss/variable.scss";

.navbar{
  display: flex;
  position:fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  height: 0.38rem;
  line-height: 0.38rem;
  box-shadow: 0px 3px 10px $gray-light;
  background: $bg;
  &_header, &_nav{
    flex: 1;
  }
  &_header{
    font-size: 0.22rem;
    font-weight: bold;
    padding-left: 0.2rem;
  }
  &_nav{
    padding-right: 0.2rem;
    text-align: right;
    font-size: 0.1rem;
    &_name{
      padding-left: 0.01rem;
    }
    a{
      text-decoration: none;
      color: $black;
      padding: 0 0.05rem;
    }
    span{
      font-size: inherit;
    }
  }
}
</style>