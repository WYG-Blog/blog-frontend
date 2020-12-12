import { ref, Ref } from 'vue'
import { login } from '@/axios/login'
import router from '@/router'

interface Login {
  username: Ref;
  password: Ref;
  [props: string]: any;
}

export default (): Login => {
  const username = ref("");
  const password = ref("");

  const m_login = () => { //login method
    login({
      username: username.value,
      password: password.value
    }).then(() => {
      router.push({
        name: 'blog'
      })
    })
  }

  return {
    //ref
    username,
    password,

    //methods
    m_login
  }
}
