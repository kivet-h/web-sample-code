/*
 * @Description: 运行时配置
 */

export const dva = {
  config: {
    onError(err: any) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};

/**
 * 修改配置路由
 * @param routes config/config.ts 文件中 routers 属性导出的路由配置（数组）
 * ! 注意：直接修改routes，不需要返回值
 */
// export const patchRoutes = ({ routes }: any) => {
//   console.log('app routes', routes);
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
//   oldRender();
// };

/**
 * 向 @/access.ts 配置文件传递某些用作权限校验的数据
 */
export async function getInitialState() {
  const data = {
    hideArr: ['/detail/secondary/three'],
  };
  return data;
}
