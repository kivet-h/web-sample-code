/*
 * @Description: global 模块数据 mock
 * @Author: kivet
 * @Date: 2022-01-13 17:17:16
 * @LastEditTime: 2022-01-26 10:28:40
 */

import Mock from 'mockjs';

const { Random } = Mock;

/**
 * mock 5-30 个设备数据
 * @param req
 * @param res
 */
const getDeviceList = (req: any, res: any) => {
  const response = Mock.mock({
    'data|5-20': [
      {
        'id|+1': 1,
        name: () => Random.cname(),
        address: () => Random.region(),
      },
    ],
  });
  // ? 模拟请求延迟
  setTimeout(() => {
    return res.status(200).send(response);
  }, 500);
};

export default {
  'GET /device/page/': getDeviceList,
};
