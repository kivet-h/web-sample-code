/*
 * @Description: global services
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
