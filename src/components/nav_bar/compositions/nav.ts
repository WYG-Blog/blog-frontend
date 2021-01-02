import { reactive, onMounted, computed, watch } from 'vue'
import router from '@/router';

interface Nav{
  navs: Array<any>;
  [props:string]: any;
}
interface NavItem{
  icon:string;
  title:string;
  navTo:string;
  isActive?:boolean;
}
/**
 * The navigator composition methods
 */
export default ():Nav => {
  const navConfig:Array<NavItem> = [{
    icon: "icon-home-fill",
    title: "首页",
    navTo: "blog"
  },
  {
    icon: "icon-file-text-fill",
    title: "文章",
    navTo: "login"
  },
  {
    icon: "icon-file-text-fill",
    title: "文章超级无敌长哦哦哦",
    navTo: "404"
  }];
  const navs:Array<NavItem> = reactive(navConfig);
  const navsEl:Array<any> = [];
  

  const m_setNavEl = (el:any) =>{
    navsEl.push(el);
  }

  // #region calculta border animate parameters.
  const border = reactive({
    scaleFactor: 1,
    translateX: 0
  });

  const c_navBorder = computed(() => {
    return {
      transform: `translate(${border.translateX}px, 0px) scale(${border.scaleFactor}, 1)`
    };
  })

  watch(router.currentRoute, (currRoute) => {
    const currRouteName =  currRoute.name;
    let translateX = 0, scaleFactor = 0, activeIndex = Number.MAX_SAFE_INTEGER;
    navs.forEach((nav,index) => { //calculate the scaleFactor and translate x 
      let clientRect = navsEl[index].$el.getBoundingClientRect();

      if(nav.navTo === currRouteName){
        nav.isActive = true;
        
        translateX += clientRect.width / 2;
        scaleFactor = clientRect.width / 10;
        activeIndex = index;
      }
      else{
        nav.isActive = false;
        
        if(activeIndex > index) translateX += clientRect.width;
      }
    });
    border.scaleFactor = scaleFactor;
    border.translateX = translateX;
  })
  //#endregion

  //lifecycle methods
  onMounted(() => {
  })

  return {
    // reactive
    navs,

    // methods
    m_setNavEl,

    //computed
    c_navBorder
  }
}