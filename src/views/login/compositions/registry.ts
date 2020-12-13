import { ref, Ref } from 'vue';
import { registe } from '@/axios/registry'
import router from '@/router'

interface Registry {
  email:Ref<string>;
  username:Ref<string>;
  password:Ref<string>;
  [prop:string]: any;
}

export default ():Registry => {
  const email = ref('');
  const username = ref('');
  const password = ref('');

  const m_registe = () => {
    registe({
      email: email.value,
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
    email,
    username,
    password,

    //method
    m_registe
  }
}