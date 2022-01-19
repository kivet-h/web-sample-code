/*
 * @Description: 路由配置文件
 */

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
  { name: '首页', path: '/home', component: '@/pages/Home', icon: 'home' },
  {
    name: 'Demo',
    path: '/demo',
    icon: 'setting',
    // hideInMenu: true,
    routes: [
      {
        name: 'Demo one',
        path: '/demo/one',
        component: '@/pages/Demo/Demo1',
      },
      {
        name: 'Demo two',
        path: '/demo/two',
        component: '@/pages/Demo/Demo2',
      },
    ],
  },
];

export default route;
