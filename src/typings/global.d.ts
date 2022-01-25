/*
 * @Description: 全局 TS 类型定义
 * @注意：最好写上注释，方便使用时提示，知道每个类型，类型的每个属性都代表的是啥
 */

/**
 * 路由类型定义
 * 这里是随便写的一个类型demo，实际上开发时，获取路由的类型定义，可直接从 import { MenuDataItem } from '@ant-design/pro-layout'; 获取
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
