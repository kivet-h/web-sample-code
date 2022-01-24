/*
 * @Description: 项目的公共配置
 */
import { defineConfig } from 'umi';
import theme from './theme.config';
import routes from './routes.config';

export default defineConfig({
  title: '管理平台', // ? 如果 routes 中的路由没有配置 title，则默认显示这个标题
  routes,
  theme,
  dva: {
    hmr: true,
  },
  fastRefresh: {}, // ? 快速刷新
});
