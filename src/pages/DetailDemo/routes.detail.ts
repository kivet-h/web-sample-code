/*
 * @Description: 详情页 route 配置
 */

import { RouteType } from 'config/routes.config';

const BASE_URL = 'detail';

const detailRoute: RouteType = {
  path: `/${BASE_URL}`,
  component: '@/layouts/detailLayout',
  routes: [
    {
      name: '详情一级页面',
      path: `/${BASE_URL}/detailOnlyOne`,
      component: '@/pages/DetailDemo/Demo1',
    },
    {
      name: '详情二级页面',
      path: `/${BASE_URL}/secondary`,
      routes: [
        {
          name: '详情二级1',
          path: `/${BASE_URL}/secondary/two`,
          component: '@/pages/DetailDemo/Demo2',
        },
        {
          name: '详情二级2',
          path: `/${BASE_URL}/secondary/three`,
          component: '@/pages/DetailDemo/Demo3',
        },
      ],
    },
    {
      redirect: '/404',
    },
  ],
};

module.exports = detailRoute;
