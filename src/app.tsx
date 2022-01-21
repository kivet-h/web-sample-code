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
