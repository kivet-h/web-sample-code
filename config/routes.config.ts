/*
 * @Description: 整合项目中所有路由配置
 */

const mainRoute = require('./routes.main');
const detailRoute = require('../src/pages/DetailDemo/routes.detail');

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
  /** 路由重定向 */
  redirect?: string;
  /** 二级路由 */
  routes?: RouteType[];
}

// ? 一些不需要使用 layout 页面包裹的页面，即左侧菜单栏不需要展示的页面
const outLayoutRoute: RouteType[] = [
  {
    name: '登录',
    path: '/login',
    component: '@/pages/Login',
  },
  {
    path: '/404',
    component: '@/pages/404Page',
  },
];

// ? mainRoute 必须放最后，因为其里面的 [path: '/'] 能匹配所有的 path
export default [...outLayoutRoute, detailRoute, mainRoute];
