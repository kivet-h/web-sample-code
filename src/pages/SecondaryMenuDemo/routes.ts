/*
 * @Description: 详情页 route
 */

import { RouteType } from 'config/routes';

const BASE_URL = 'secondary';

const secondaryMenuRoute: RouteType = {
  path: `/${BASE_URL}`,
  name: '二级菜单',
  component: '@/layouts',
  routes: [
    {
      name: '二级菜单一级',
      path: `/${BASE_URL}/level1`,
      component: '@/pages/SecondaryMenuDemo/Demo1',
    },
    {
      name: '二级菜单二级',
      path: `/${BASE_URL}/level2`,
      routes: [
        {
          name: '二级菜单二级1',
          path: `/${BASE_URL}/level2/one`,
          component: '@/pages/SecondaryMenuDemo/Demo2',
        },
        {
          name: '二级菜单二级2',
          path: `/${BASE_URL}/level2/two`,
          component: '@/pages/SecondaryMenuDemo/Demo3',
        },
      ],
    },
  ],
};

module.exports = secondaryMenuRoute;
