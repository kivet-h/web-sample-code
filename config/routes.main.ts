/*
 * @Description: 最外层路由菜单
 */

import { RouteType } from './routes.config';

const mainRoute: RouteType = {
  path: '/',
  component: '@/layouts',
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: '@/pages/Home',
      icon: 'home',
    },
    {
      name: 'Demo',
      path: '/demo',
      icon: 'setting',
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
    {
      redirect: '/404',
    },
  ],
};

module.exports = mainRoute;
