/*
 * @Description: 运行时配置
 */

import { findIndex, isEqual, differenceWith, has, forEach } from 'lodash';

let backendRoutes: any[];

const outLayoutRoutes = [
  {
    name: '登录',
    path: '/login',
    component: require('@/pages/Login').default,
  },
];

export const dva = {
  config: {
    onError(err: any) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};

// 匹配后端menu接口，递归深度删除前端对应sider menu路由（仅针对sider menu）
const deepDelelteRoutes = (baseRoutes: any, targetRoutes: any) => {
  if (baseRoutes && baseRoutes.routes) {
    let diffRoutes = differenceWith(
      baseRoutes.routes,
      targetRoutes,
      (oa: any, ob: any) => oa.path === ob.path || !has(oa, 'path'),
    );
    // console.log('=baseRoutes', diffRoutes, baseRoutes);
    // // 如果隐藏子菜单，排除routes属于自己的路由，route.config子菜单第一项路由是自己
    if (baseRoutes.hideChildrenInMenu) {
      diffRoutes = diffRoutes.filter(
        (route) => !isEqual(baseRoutes.path, route.path),
      );
    }
    forEach(diffRoutes, (deleteRoute) => {
      const index = findIndex(baseRoutes.routes, (o: any) => {
        return isEqual(o, deleteRoute);
      });
      delete baseRoutes.routes[index];
    });
    forEach(targetRoutes, (tRoute: any) => {
      const index = findIndex(baseRoutes.routes, (o: any) => {
        if (o) {
          return isEqual(o.path, tRoute.path);
        }
      });
      if (index !== -1) {
        // menuName以远程名字为准
        baseRoutes.routes[index].name = tRoute.menuName;
        if (tRoute.children) {
          deepDelelteRoutes(baseRoutes.routes[index], tRoute.children);
        }
      }
    });
  }
};

/**
 * 修改配置路由
 * @param routes config/config.ts 文件中 routers 属性导出的路由配置（数组）
 * ! 注意：直接修改routes，不需要返回值
 */
export const patchRoutes = ({ routes }: any) => {
  // routes = [...outLayoutRoutes, ...routes];
  deepDelelteRoutes(routes[0], backendRoutes);

  console.log('===routes3', routes, backendRoutes);
};

export const render = (oldRender: () => void) => {
  // fetch('/api/auth').then(auth => {
  //   if (auth.isLogin) { oldRender() }
  //   else {
  //     history.push('/login');
  //     oldRender()
  //   }
  // });
  // history.push('/login');
  oldRender();
};
