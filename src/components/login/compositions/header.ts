import { ref, Ref } from 'vue';
import { writeArr } from '@/utils/wirteAnimate';

interface Header{
  title: Ref,
  typeHeader: Function
}

export default (): Header => {
  const typingMsg = [
    '/* 这是一个共建的技术博客 */',
    '/* 用于分享各种知识，web前端、web后端、Linux、存储、车辆等 */',
    '/* WXG-Blog的内容还会分享到其他平台哟，掘金、知乎、公众号等 */',
    '/* 网站开源于github，欢迎Star */'
  ];
  const timer = 100;
  const title = ref('');

  const typeHeader = () => {
    writeArr(title, typingMsg, timer, true);
  }

  return {
    typeHeader,
    title
  }
}