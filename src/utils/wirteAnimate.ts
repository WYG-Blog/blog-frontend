import { Ref } from 'vue';

/**
 * 
 * @param ref reactive 数据
 * @param str 字符串
 * @param time 间隔时间
 * @param strIndex string 索引
 * @param cb 回调函数
 */
export function write(
  ref: Ref,
  str: string,
  time: number,
  strIndex: number = 0,
  cb?: Function
): void {
  if(strIndex >= str.length) { typeof cb === 'function' ? cb() : null; return }
  ref.value += str[strIndex];
  setTimeout(function(){
    write(ref, str, time, ++ strIndex, cb);
  }, time);
}

/**
 * 
 * @param ref reactive 数据
 * @param arr 字符串数组
 * @param time 间隔时间
 * @param isLoop 是否循环输出
 * @param arrIndex arr索引
 */
export function writeArr(
  ref: Ref,
  arr: Array<string>,
  time: number,
  isLoop: boolean = false,
  arrIndex: number = 0,
): void {
  if(arrIndex >= arr.length) { if(isLoop) arrIndex = 0; else return;} 
  write(ref, arr[arrIndex], time, 0, function(){
    setTimeout(function(){
      ref.value = "";
      writeArr(ref, arr, time, isLoop, ++ arrIndex); 
    }, time * 5)
  });
}