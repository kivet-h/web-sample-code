/*
 * @Description: 权限配置文件
 * @注意：此文件是项目的配置文件，修改后，需要重新 yarn start 才能生效
 * @Author: kivet
 * @Date: 2022-01-26 09:18:36
 * @LastEditTime: 2022-01-26 10:37:11
 */

import { MenuDataItem } from '@ant-design/pro-layout';

export default function (initialState: any) {
  const { hideArr = [] } = initialState;

  return {
    adminRouteFilter: (route: MenuDataItem) => !hideArr.includes(route.path),
  };
}
