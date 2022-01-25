/*
 * @Description: 全局 TS 类型定义
 */

/**
 * 路由
 */
export interface RouteType {
  /** 页面 path */
  path?: string;
  /** 是否严格匹配路由，默认为 true */
  exact?: boolean;
  /** 左侧菜单路由icon */
  icon?: string;
  /** 左侧菜单路由名称 */
  name?: string;
  /** 组件 */
  component?: string;
  /** 是否隐藏当前路由，包括其子路由 */
  hideInMenu?: boolean;
  /** 路由重定向 */
  redirect?: string;
  /** 二级路由 */
  routes?: RouteType[];
}
