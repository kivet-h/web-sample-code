/*
 * @Description: 路由配置文件
 */

const postManagerMenuRoute = require('../src/pages/PostManager/route.post');
const entrustManagerMenuRoute = require('../src/pages/EntrustManager/route.entrust');
const userManagerMenuRoute = require('../src/pages/UserManager/route.user');

export interface MenuDataItem {
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
  /** 路由重定向 */
  redirect?: string;
  /** 二级路由 */
  routes?: MenuDataItem[];
  hideChildrenInMenu?: boolean;
}

const BASE_URL = 'postManager';

const route: MenuDataItem[] = [
  {
    name: '登录',
    path: '/login',
    component: '@/pages/Login',
    hideInMenu: true,
  },
  {
    name: '帖子管理',
    path: '/',
    redirect: '/postManager',
    hideInMenu: true,
  },
  postManagerMenuRoute,
  entrustManagerMenuRoute,
  userManagerMenuRoute,
];

export default route;
