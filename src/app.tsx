/*
 * @Description: 运行时配置
 * @Author: kivet
 * @Date: 2022-01-25 15:55:00
 * @LastEditTime: 2022-01-26 10:37:17
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
 * 向 @/access.ts 配置文件传递某些用作权限校验的数据
 */
export async function getInitialState() {
  const data = {
    hideArr: ['/detail/secondary/three'],
  };
  return data;
}
