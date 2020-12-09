import { computed, Ref, ref } from 'vue'

interface LoginForm {
  isSignIn: Ref;
  switchSignCtr: Function;
  [propName: string]: any;
}

export default ():LoginForm => {
  const isSignIn = ref(true);

  const switchSignCtr = () => { //切换登录/注册
    isSignIn.value = !isSignIn.value;
  }

  const c_switchStatus = computed(() => {
    return {
      "is-gx": isSignIn.value,
      "is-txr": !isSignIn.value
    }
  });
  const c_circleStatus = computed(() => {
    return {
      "is-txr": !isSignIn.value
    }
  })
  const c_switchContainerAStatus = computed(() => {
    return {
      "is-hidden": !isSignIn.value
    }
  })
  const c_switchContainerBStatus = computed(() => {
    return {
      "is-hidden": isSignIn.value
    }
  })
  const c_formContainerAStatus = computed(() => {
    return {
      "is-txl": !isSignIn.value
    }
  })
  const c_formContainerBStatus = computed(() => {
    return {
      "is-txl": !isSignIn.value,
      "is-z200": !isSignIn.value
    }
  })

  return {
    //ref
    isSignIn,
    //reactive
    //method
    switchSignCtr,
    //computed
    c_switchStatus,
    c_circleStatus,
    c_switchContainerAStatus,
    c_switchContainerBStatus,
    c_formContainerAStatus,
    c_formContainerBStatus
  }
}