/*
 * @Description: 运行时配置
 */
import { Header } from '@/layouts/BasicLayout';
import { img_logo } from '@/assets/images';
// import detailRoutes from '@/pages/DetailDemo/routes';
import mainRoute from '../config/routes';
const detailRoutes = require('../src/pages/DetailDemo/routes');

export const layout = (config: any) => {
  // console.log('ccccccc', config);
  return {
    ...config,
    headerRender: () => <Header />,
    iconfontUrl: '//at.alicdn.com/t/font_2724271_ywgl62i7sen.js',
    logo: img_logo,
    title: false,
    fixSiderbar: true,
    breakpoint: false,
    defaultCollapsed: false,
    fixedHeader: true,
    siderWidth: 200,
    // menuDataRender: () => {
    //   if (window.location.pathname.includes('detail')) {
    //     return detailRoutes;
    //   }

    //   return mainRoute;
    // },
  };
};

// let renderRoutes: any = [];

// /**
//  * 修改配置路由
//  * @param routes config/config.ts 文件中 routers 属性导出的路由配置（数组）
//  */
// export const patchRoutes = ({ routes }: any) => {
//   console.log('===routes', routes, routes[0].routes, mainRoute);
//   // ? eg: 在路由配置后面再加一个路由
//   // routes.push({
//   //   path: '/demo2',
//   //   name: '页面错误',
//   //   component: require('@/pages/Demo2').default,
//   // });
//   // routes[0].routes = [detailRoutes];
//   // routes[0].routes = mainRoute;

//   if (renderRoutes.length) {
//     routes[0].routes = renderRoutes;
//   }
//   // ! 注意：直接修改routes，不需要返回值
// };

// export const render = (oldRender: () => void) => {
//   // fetch('/api/auth').then(auth => {
//   //   if (auth.isLogin) { oldRender() }
//   //   else {
//   //     history.push('/login');
//   //     oldRender()
//   //   }
//   // });
//   // history.push('/login');

//   if (window.location.pathname.includes('detail')) {
//     renderRoutes = detailRoutes;
//   } else {
//     renderRoutes = [];
//   }

//   oldRender();
// };
