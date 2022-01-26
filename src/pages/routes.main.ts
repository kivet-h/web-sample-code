/*
 * @Description: 最外层路由菜单
 * @Author: kivet
 * @Date: 2022-01-25 15:55:00
 * @LastEditTime: 2022-01-26 10:33:39
 */

const mainRoute = {
  path: '/',
  component: '@/layouts/mainLayout',
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
