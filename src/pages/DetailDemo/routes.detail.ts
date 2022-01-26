/*
 * @Description: 详情页 route 配置
 * @Author: kivet
 * @Date: 2022-01-25 15:55:00
 * @LastEditTime: 2022-01-26 10:33:57
 */

const BASE_URL = 'detail';

const detailRoute = {
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
          access: 'adminRouteFilter',
        },
        {
          name: '详情二级2',
          path: `/${BASE_URL}/secondary/three`,
          component: '@/pages/DetailDemo/Demo3',
          access: 'adminRouteFilter',
        },
        {
          name: '详情二级3',
          path: `/${BASE_URL}/secondary/four`,
          component: '@/pages/DetailDemo/Demo4',
          access: 'adminRouteFilter',
        },
      ],
    },
    {
      redirect: '/404',
    },
  ],
};

module.exports = detailRoute;
