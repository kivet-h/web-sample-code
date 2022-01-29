/*
 * @Description: 帖子管理列表
 * @Author: kivet
 * @Date: 2022-01-28 18:22:30
 * @LastEditTime: 2022-01-29 10:06:05
 */

import type { FC } from 'react';
import { Button } from 'antd';
import { history } from 'umi';

interface IProps {}

const PostManagerList: FC<IProps> = () => {
  return (
    <div>
      PostManagerList
      <Button
        onClick={() => {
          history.push('/postManager/detail?id=111');
        }}
      >
        跳转至帖子详情
      </Button>
    </div>
  );
};

export default PostManagerList;
