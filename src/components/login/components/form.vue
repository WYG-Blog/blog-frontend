<template>
   <section class="main">
    <div class="container a-container" :class="c_formContainerAStatus">
      <form class="form">
        <h2 class="form_title title">WYG-博客 登录</h2>
        <span>使用用户名进行登录</span>
        <input class="form_input" type="text" placeholder="用户名" />
        <input class="form_input" type="password" placeholder="密码" />
        <a class="form_link">忘记密码？</a>
        <button class="form_button button submit button_hov">登录</button>
      </form>
    </div>
    <div class="container b-container" :class="c_formContainerBStatus">
      <form action="" class="form">
        <h2 class="form_title title">WYG-博客 注册</h2>
        <span class="form_span">使用邮箱进行注册</span>
        <input class="form_input" type="text" placeholder="邮箱" />
        <input class="form_input" type="text" placeholder="用户名" />
        <input class="form_input" type="password" placeholder="密码" />
        <button class="form_button button submit button_hov">注册</button>
      </form>
    </div>
    <div class="switch" :class="c_switchStatus">
      <div class="switch_circle" :class="c_circleStatus"></div>
      <div class="switch_circle switch_circle_t" :class="c_circleStatus"></div>
      <div class="switch_container" :class="c_switchContainerAStatus">
        <h2 class="switch_title title">欢迎回来🎉</h2>
        <p class="switch_description">
          希望在博客中与我们互动，请先登录WYG，如果还没有信息请注册成为WYG用户 😁
        </p>
        <button class="switch_button button button_hov" @click="switchSignCtr">注册</button>
      </div>
      <div class="switch_container" :class="c_switchContainerBStatus">
        <h2 class="switch_title title">您好，新朋友🎈</h2>
        <p class="switch_description description">
          请输入您的个人信息，让我们一同起来我们得旅行吧！😜
        </p>
        <button class="switch_button button button_hov" @click="switchSignCtr">登录</button>
      </div>
    </div>
  </section> 
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import useForm from '../compositions/form';
export default defineComponent({
  setup(){
    const { 
      isSignIn, 
      switchSignCtr, 
      c_switchStatus, c_circleStatus, c_switchContainerAStatus, c_switchContainerBStatus, c_formContainerAStatus, c_formContainerBStatus 
    } = useForm(); 

    return {
      isSignIn, //Ref
      switchSignCtr, //method 
      c_switchStatus, c_circleStatus, c_switchContainerAStatus, c_switchContainerBStatus, c_formContainerAStatus, c_formContainerBStatus //computed
    }
  }
});
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variable.scss";

/* Generic */
/**/
.main {
  position: relative;
  width: 1000px;
  min-width: 1000px;
  min-height: 600px;
  height: 600px;
  padding: 25px;
  background-color: $neu-1;
  box-shadow: 10px 10px 10px $neu-2, -10px -10px 10px $white;
  border-radius: 12px;
  overflow: hidden;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  top: 0;
  width: 600px;
  height: 100%;
  padding: 25px;

  background-color: $neu-1;
  transition: $transition;
}
.form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  &_icon {
    object-fit: contain;
    width: 30px;
    margin: 0 5px;
    opacity: 0.5;
    transition: 0.15s;

    &:hover {
      opacity: 1;
      transition: 0.15s;
      cursor: pointer;
    }
  }
  &_input {
    width: 350px;
    height: 40px;
    margin: 4px 0;

    padding-left: 25px;
    font-size: 13px;
    letter-spacing: 0.15px;
    border: none;
    outline: none;

    font-family: "Montserrat", sans-serif;
    background-color: $neu-1;
    transition: 0.25s ease;
    border-radius: 8px;

    box-shadow: inset 2px 2px 4px $neu-2, inset -2px -2px 4px $white;

    &:focus {
      box-shadow: inset 4px 4px 4px $neu-2, inset -4px -4px 4px $white;
    }
  }
  &_span {
    margin-top: 30px;
    margin-bottom: 12px;
  }
  &_link {
    color: $black;
    font-size: 15px;
    margin-top: 25px;
    border-bottom: 1px solid $gray;
    line-height: 2;
  }
}
.title {
  font-size: 34px;
  font-weight: 700;
  line-height: 3;
  color: $black;
}
.description {
  font-size: 14px;
  letter-spacing: 0.25px;
  text-align: center;
  line-height: 1.6;
}
.button {
  width: 180px;
  height: 50px;
  border-radius: 25px;
  margin-top: 50px;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 1.15px;

  background-color: $purple;
  color: $white;
  box-shadow: 8px 8px 16px $neu-2, -8px -8px 16px $white;

  border: none;
  outline: none;
  
  &_hov{
    cursor: pointer;
    &:hover {
      box-shadow: 6px 6px 10px $neu-2, -6px -6px 10px $white;
      transform: scale(0.985);
      transition: 0.25s;
    }
    &:active,
    &:focus {
      box-shadow: 2px 2px 6px $neu-2, -2px -2px 6px $white;
      transform: scale(0.97);
      transition: 0.25s;
    }
  }
}
/**/

.a-container {
  z-index: 100;
  left: calc(100% - 600px);
}
.b-container {
  left: calc(100% - 600px);
  z-index: 0;
}

.switch {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 400px;

  padding: 50px;
  z-index: 200;
  transition: $transition;

  background-color: $neu-1;
  overflow: hidden;

  box-shadow: 4px 4px 10px $neu-2, -4px -4px 10px $white;

  &_circle {
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background-color: $neu-1;
    box-shadow: inset 8px 8px 12px $neu-2, inset -8px -8px 12px $white;

    bottom: -60%;
    left: -60%;
    transition: $transition;

    &_t {
      top: -30%;
      left: 60%;
      width: 300px;
      height: 300px;
    }
  }

  &_container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    width: 400px;
    padding: 50px 55px;

    transition: $transition;
  }
}
/**/
.is-txr {
  left: calc(100% - 400px);
  transition: $transition;
  transform-origin: left;
}
.is-txl {
  left: 0;
  transition: $transition;
  transform-origin: right;
}
.is-z200 {
  z-index: 200;
  transition: $transition;
}
.is-hidden {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  transition: $transition;
}
.is-gx {
  animation: is-gx $transition;
}
@keyframes is-gx {
  0%,
  10%,
  100% {
    width: 400px;
  }
  30%,
  50% {
    width: 500px;
  }
}
</style>