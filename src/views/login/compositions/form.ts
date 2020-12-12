import { computed, Ref, ref } from 'vue'

interface Form {
  isSignIn: Ref;
  [propName: string]: any;
}

export default ():Form => {
  const isSignIn = ref(true);

  const m_switchSignCtr = () => { // switch sign in/sign up
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
    m_switchSignCtr,
    //computed
    c_switchStatus,
    c_circleStatus,
    c_switchContainerAStatus,
    c_switchContainerBStatus,
    c_formContainerAStatus,
    c_formContainerBStatus
  }
}