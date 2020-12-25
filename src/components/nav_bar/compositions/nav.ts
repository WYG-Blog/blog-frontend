import { reactive, onMounted } from 'vue'
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
  }];
  const navs:Array<NavItem> = reactive(navConfig);
  const navsEl:Array<Element> = []

  const m_setNavEl = (el:Element) =>{
    navsEl.push(el);
  }

  const m_setActiveNav = () => {
    const currRouteName = router.currentRoute.value.name;

    navs.forEach(nav => {
      if(nav.navTo === currRouteName){
        nav.isActive = true;
      }
      else{
        nav.isActive = false;
      }
    });
  }

  //lifecycle methods
  onMounted(() => {
    m_setActiveNav();
  })

  return {
    // reactive
    navs,

    // methods
    m_setNavEl
  }
}