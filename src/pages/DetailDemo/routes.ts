/*
 * @Description: 详情页 route
 */

const BASE_URL = 'detail';

const detailRoutes = [
  {
    path: `/${BASE_URL}`,
    name: '详情 Demo',
    component: '@/layouts',
    routes: [
      {
        name: '详情一级页面',
        path: `/${BASE_URL}/detailone`,
        component: '@/pages/DetailDemo/Demo1',
      },
      {
        name: '详情二级页面',
        path: `/${BASE_URL}/demos`,
        routes: [
          {
            name: '详情 Demo two',
            path: `/${BASE_URL}/demo/two`,
            component: '@/pages/DetailDemo/Demo2',
          },
          {
            name: '详情 Demo three',
            path: `/${BASE_URL}/demo/three`,
            component: '@/pages/DetailDemo/Demo3',
          },
        ],
      },
    ],
  },
];

module.exports = detailRoutes;
