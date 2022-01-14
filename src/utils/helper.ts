/*
 * @Description: 一些帮助函数
 */

import { history } from 'umi';
import { DruidLocalStorage } from './storage';

const Helper = {
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
  /**
   * 重定向
   */
  handleRedirect: () => {
    if (window.location.pathname !== '/login') {
      // history.replace({
      //   pathname: '/login',
      //   search: stringify({
      //     redirect: window.location.href,
      //   }),
      // });
      history.push('/login');
      DruidLocalStorage.removeAll();
    }
  },
  /**
   * models 更新 state
   * @param type reducers中的方法名
   * @returns
   */
  createAction:
    (type: string) =>
    (payload = {}) => ({ type, payload }),
};

export { Helper };
