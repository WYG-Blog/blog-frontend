<template>
  <section class="login">
    <section class="header">
      <h1>
        WYG-博客
      </h1>
      <p>
        {{ title }} 
        <span class="cusor">|</span>
      </p>
    </section>
    <neum-form></neum-form>
  </section>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import useHeader from "./compositions/header";
import NeumForm from "./components/form.vue";
export default defineComponent({
  components: {
    NeumForm,
  },
  setup() {
    const { title, typeHeader } = useHeader();

    onMounted(() => {
      typeHeader();
    });

    return {
      title, //Header
    };
  },
});
</script>
<style lang="scss">
@import "@/assets/scss/variable.scss";

.login{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header {
  position: absolute;
  top: 20px;
  left: 20px;
  h1 {
    font-size: 3em;
    color: $black;
    display: inline;
  }
  p{
    font-size: 1.5em;
    color: #999;
    display: inline;
    .cusor{
      position: relative;
      left: -0.2em;
      color: $black;
      animation: cusorAnimate 1s infinite;
    }
  }
  @keyframes cusorAnimate {
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
  }
}
</style>