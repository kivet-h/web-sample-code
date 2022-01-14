/*
 * @Description: 首页
 */

import { FC, useEffect, useState } from 'react';
import { Button, Input } from 'antd';
import styles from './index.less';
import { DruidLocalStorage } from '@/utils/storage';
import {
  connect,
  Dispatch,
  IGlobalModelState,
  Loading,
  IRouteComponentProps,
} from 'umi';

interface IProps extends IRouteComponentProps {
  dispatch: Dispatch;
  loading?: boolean;
  global: IGlobalModelState;
}

const IndexPage: FC<IProps> = (props) => {
  const { dispatch, history } = props;
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    dispatch({
      type: 'global/getDeviceList',
      payload: {},
      callback: (res) => {
        console.log('===res', res);
      },
    });
  }, []);

  return (
    <div>
      <h1 className={styles.title}>Page index === {APP_ENV}</h1>
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <Button
        onClick={() => {
          console.log('== value ==', value);
          DruidLocalStorage.set('token', value);
        }}
      >
        存储
      </Button>
      <Button
        onClick={() => {
          const mockObj = {
            name: 'kivet',
            address: '成都',
          };
          DruidLocalStorage.set('obj', mockObj);
        }}
      >
        存储一个对象
      </Button>
      <Button
        onClick={() => {
          const mockArr = [
            { name: '111', age: 2 },
            { name: '222', age: 22 },
            { name: '333', age: 222 },
          ];
          DruidLocalStorage.set('arr', mockArr);
        }}
      >
        存储一个数组
      </Button>
      <Button
        onClick={() => {
          history.push('/login');
        }}
      >
        跳转Login
      </Button>
      <Button
        onClick={() => {
          console.log('==namee', DruidLocalStorage.get('name'));
        }}
      >
        获取name
      </Button>
      <Button
        onClick={() => {
          console.log('==objj', DruidLocalStorage.get('obj'));
        }}
      >
        获取obj
      </Button>
      <Button
        onClick={() => {
          console.log('==arrr', DruidLocalStorage.get('arr'));
        }}
      >
        获取arr
      </Button>
    </div>
  );
};

// export default IndexPage;

export default connect(
  ({ global, loading }: { global: IGlobalModelState; loading: Loading }) => ({
    global,
    loading: loading.effects['global/login'],
  }),
)(IndexPage);
