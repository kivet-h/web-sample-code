/*
 * @Description: 测试环境项目配置
 */
import { defineConfig } from 'umi';

export default defineConfig({
  define: {
    APP_ENV: 'dev',
    API_BASE: 'http://bird.coolhei.com/manager/api/v2',
  },
});
