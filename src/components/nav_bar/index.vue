<template>
  <section class="navbar">
    <header class="navbar_header">BLOG - 我爱吃烤鸡翅</header>
    <nav class="navbar_nav">
      <div class="navbar_nav_container">
        <router-link
          v-for="(item, index) in navs"
          :ref="m_setNavEl"
          :key="index"
          :to="item.navTo"
          :class="{ navbar_nav_active: item.isActive }"
        >
          <span class="navbar_nav_icon iconfont" :class="item.icon"></span>
          <span class="navbar_nav_name">{{ item.title }}</span>
        </router-link>
        <div class="navbar_nav_container_border" :style="c_navBorder"></div>
      </div>
    </nav>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import useNav from "./compositions/nav";
export default defineComponent({
  setup() {
    const { navs, m_setNavEl, c_navBorder } = useNav();

    return {
      navs,
      m_setNavEl,
      c_navBorder,
    };
  },
});
</script>
<style lang="scss">
@import "@/assets/scss/variable.scss";

.navbar {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  height: 0.38rem;
  line-height: 0.38rem;
  box-shadow: 0px 3px 10px $gray-light;
  background: $bg;
  &_header,
  &_nav {
    flex: 1;
  }
  &_header {
    font-size: 0.22rem;
    font-weight: bold;
    padding-left: 0.2rem;
  }
  &_nav {
    padding-right: 0.2rem;
    font-size: 0.1rem;
    display: flex;
    flex-direction: row-reverse;
    &_container {
      position: relative;
      &_border {
        content: "";
        display: block;
        position: absolute;
        z-index: 10;
        bottom: 0;
        left: 0;
        background: $black;
        height: 0.02rem;
        width: 10px;
        transform-origin: 50% 0;
        transition: transform 0.3s ease-in-out;
      }
    }
    &_name {
      padding-left: 0.01rem;
    }
    &_active{
      color: $black !important;
    }
    a {
      display: inline-block;
      text-decoration: none;
      color: $gray;
      padding: 0 0.05rem;
    }
    a:hover{
      color: $black;
    }
    span {
      font-size: inherit;
    }
  }
}
</style>