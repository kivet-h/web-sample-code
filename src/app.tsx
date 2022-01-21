/*
 * @Description: 运行时配置
 */
import { Header } from '@/layouts/BasicLayout';
import { img_logo } from '@/assets/images';

export const layout = (config: any) => {
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
  };
};
