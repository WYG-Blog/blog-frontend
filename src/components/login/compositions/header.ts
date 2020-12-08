import { onMounted, reactive, toRefs } from 'vue';

export default () => {
  const typingMsg = [
    '/* 这是一个共建的技术博客 */',
    '/* 用于分享各种知识，web前端、web后端、Linux、存储、车辆等 */',
    '/* WXY的内容还会分享到其他平台哟，掘金、知乎、公众号等 */',
    '/* 网站开源于github，欢迎Star */'
  ];
  const timer = 300;
  const data = reactive({
    title: ''
  });
  let timerHanlder = null;

  const writing = (isInster: boolean, char?:string) => {
    isInster ? data.title += char : data.title.replace(/.$/,'');
  }
  const writeString = (str:string, strIndex: number) => {
    if(!str) return;
    
    let charIndex:number = 0, isInsert = true;
    timerHanlder = setTimeout(()=>{
      if(charIndex < str.length && !isInsert){ //TODO setTimeout提取到writing中，此处逻辑错误
        writing(isInsert, str[charIndex]);
        charIndex ++;
      }
      if(charIndex === str.length){
        isInsert = false;
        writing(isInsert);
        charIndex --;
      }
      if(charIndex > 0 && isInsert){
        writing(isInsert);
        charIndex --;
      }
      if(charIndex === -1){
        strIndex++;
        if(strIndex < typingMsg.length){
          writeString(typingMsg[strIndex], strIndex);
        }
        else{ //轮训打印文本
          writeString(typingMsg[strIndex], 0);
        }
      }
    }, timer);
  }

  const activeWriteAnimate = () => {
    setTimeout(writing, timer);
    writeString(typingMsg[0], 0);
  }

  return {
    data,
    activeWriteAnimate
  }
}