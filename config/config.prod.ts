/*
 * @Description: 正式环境项目配置
 * @Author: kivet
 * @Date: 2022-01-07 11:17:34
 * @LastEditTime: 2022-01-26 10:27:49
 */

import { defineConfig } from 'umi';

export default defineConfig({
  define: {
    APP_ENV: 'prod',
    API_BASE: 'http://bird.coolhei.com/manager/api/v2',
  },
});
