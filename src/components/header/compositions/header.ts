import { computed, ref, Ref, watch } from 'vue';
import { writeArr, stopWrite } from '@/utils/wirteAnimate';
import router from "@/router";

interface Header{
  title: Ref;
  isLoginPage: Ref;
  [prop: string]: any;
}

export default (): Header => {
  const typingMsg = [ // dynamic typing animationg messages.
    '/* 这是一个共建的技术博客 */',
    '/* 用于分享各种知识，Web前端、Web后端、Linux、存储、车辆等 */',
    '/* WXG-博客的内容还会分享到其他平台哟，掘金、知乎、公众号等 */',
    '/* 网站开源于github，欢迎Star */'
  ];
  const isLoginPage = ref(false);
  const timer = 200;
  const title = ref('');

  const c_headerStyle = computed(() => {
    return {
      "transform": isLoginPage.value ? "scale(1.3)" : "scale(1)",
      "background": isLoginPage.value ? "transparent" : "#f9f9f9",
      "box-shadow": isLoginPage.value ? "none" : "5px 5px 20px #dde0e2, -5px -5px 20px #f9fcfe",
      "border-bottom": isLoginPage.value ? "1px solid #ecf0f3" : "1px solid #d8d8d8"
    }
  })

  const c_titleStyle = computed(() => {
    return {
      "transform": isLoginPage.value ? "scale(1)" : "scale(0.7)"
    }
  })

  watch(router.currentRoute, () => {
    const currRoute = router.currentRoute;// judgement cuurent page is login page or not.
    if(currRoute.value.name === 'login'){
      isLoginPage.value = true;
      writeArr(title, typingMsg, timer, true);
    }
    else{
      isLoginPage.value = false;
      title.value = '';
      stopWrite();
    }
  })

  return {
    //Ref
    title,
    isLoginPage,

    //computed
    c_headerStyle,
    c_titleStyle,

    //Methods
  }
}