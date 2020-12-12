import { ref, Ref } from 'vue';

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
    console.log(email, username, password);
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