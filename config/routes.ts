/*
 * @Description: 路由配置文件
 */

const secondaryMenuRoute = require('../src/pages/SecondaryMenuDemo/routes');

export interface RouteType {
  /** 页面 path */
  path?: string;
  /** 是否严格匹配路由，默认为 true */
  exact?: boolean;
  /** 左侧菜单路由icon */
  icon?: string;
  /** 左侧菜单路由名称 */
  name?: string;
  /** 组件 */
  component?: string;
  /** 是否隐藏当前路由，包括其子路由 */
  hideInMenu?: boolean;
  /** 二级路由 */
  routes?: RouteType[];
}

const route: RouteType[] = [
  {
    name: '登录',
    path: '/login',
    component: '@/pages/Login',
    hideInMenu: true,
  },
  {
    name: '首页',
    path: '/',
    component: '@/pages/Home',
    icon: 'home',
    hideInMenu: true,
  },
  {
    name: '首页',
    path: '/home',
    component: '@/pages/Home',
    icon: 'icon-a-2xhome',
  },
  secondaryMenuRoute,
];

export default route;
