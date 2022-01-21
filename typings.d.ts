declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}

/**
 * 全局变量
 */
// ? 环境
declare const APP_ENV: 'local' | 'dev' | 'prod';

// ? 基础PAI
declare const API_BASE: string;

/**
 * npm 包
 */

declare module 'mockjs';
