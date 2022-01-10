/*
 * @Description: 一些公共方法
 */

const CommomHelper = {
  /**
   * 处理请求参数，移除值为空、null, undefined的参数
   * @param data
   */
  handleNullData: (data: object | []) => {
    if (!data) return '';
    return JSON.parse(
      JSON.stringify(data, (k, v) => {
        if (v !== null && v !== undefined) {
          return v;
        }
      }),
    );
  },
};

export default CommomHelper;
