<template>
  <section class="login">
    <neum-form></neum-form>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import NeumForm from "./components/form.vue";
export default defineComponent({
  components: {
    NeumForm,
  },
  setup() {
    
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
</style>