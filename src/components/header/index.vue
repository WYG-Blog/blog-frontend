<template>
  <section class="header" :style="c_headerStyle">
    <div class="container">
      <h1 class="title" :style="c_titleStyle">WYG-博客</h1>
      <transition name="typing">
        <p class="typing" v-if="isLoginPage">
          {{ title }}
          <span class="cusor">|</span>
        </p>
      </transition>
      <transition name="tools"> 
        <section class="tools" v-if="!isLoginPage">
          <section class="avator"></section>
        </section>
      </transition>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import useHeader from "./compositions/header";
export default defineComponent({
  setup() {
    const { title, isLoginPage, c_headerStyle, c_titleStyle } = useHeader();

    return {
      title,
      isLoginPage,
      c_headerStyle,
      c_titleStyle, //Header
    };
  },
});
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variable.scss";

.header {
  position: fixed;
  width: 100%;
  padding-top: 10px;
  padding-left: 20px;
  transition: all 0.5s ease-in 0.3s;
  background: $white;
  height: 58px;
  transform-origin: 50% 0;
  transform: scale(1.3);
  border-bottom: 1px solid $gray-light2;
  box-shadow: 5px 5px 20px #dde0e2, -5px -5px 20px #f9fcfe;
  .container {
    width: 960px;
    display: flex;
    margin: 0 auto;
    transition: inherit;
  }
  .title {
    transition: inherit;
    transform-origin: 0 0;
    transform: scale(1);
    font-size: 3em;
    color: $black;
    flex-basis: 5em;
    flex-shrink: 0;
    flex-grow: 0;
  }
  .typing {
    flex: 1;
    color: #999;
    transition: all 0.3s;
    align-self: flex-end;
    .cusor {
      position: relative;
      left: -0.2em;
      color: $black;
      animation: cusorAnimate 1s infinite;
    }
  }
  .tools {
    flex: 1;
    display: flex;
    transition: all 0.3s;
    flex-direction: row-reverse;
    .avator {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      background: $gray;
    }
  }

  /**
  * cursor blink animation
  */
  @keyframes cusorAnimate {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  /**
  * typing transition classes
  */

  .typing-enter-from,
  .typing-leave-to {
    opacity: 0;
  }

  .typing-enter-to,
  .typing-leave-from {
    opacity: 1;
  }

  .typing-enter-active {
    transition-timing-function: ease-in;
    transition-delay: 1.2s;
  }

  .typing-leave-active {
    transition-timing-function: ease-out;
  }

  /**
  * tools transition classes
  */
  .tools-enter-from{
    opacity: 0;
    transform: translate(0, -20px);
  }
  .tools-leave-to{
    opacity: 0; 
  }

  .tools-enter-to,
  .tools-leave-from{
    opacity: 1;
    transform: translate(0, 0);
  }

  .tools-enter-active{
    transition-timing-function: cubic-bezier(0.32, 2.1, 0.35, 0.07);
    transition-delay: 1.2s;
  }
  .tools-leave-active{
    transition-timing-function: ease-out;
  }

}
</style>