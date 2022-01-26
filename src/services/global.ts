/*
 * @Description: global 模块 services 层
 * @Author: kivet
 * @Date: 2022-01-13 17:19:47
 * @LastEditTime: 2022-01-26 10:34:10
 */

import request from '@/utils/request';

/** 获取设备列表数据 */
export const getDeviceList = async () =>
  request('/device/page/', {
    method: 'GET',
    data: {},
    headers: {
      'x-result-limit': '50',
      'x-result-sort': '-_id',
    },
  });
