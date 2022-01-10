/*
 * @Description: 首页
 */

import { useState } from 'react';
import { Button, Input } from 'antd';
import styles from './index.less';
import { DruidLocalStorage } from '@/utils/storage';

const IndexPage = (props: any) => {
  const [value, setValue] = useState<string>('');

  return (
    <div>
      <h1 className={styles.title}>Page index === {APP_ENV}</h1>
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <Button
        onClick={() => {
          console.log('== value ==', value);
          DruidLocalStorage.set('name', value);
        }}
      >
        存储
      </Button>
      <Button
        onClick={() => {
          props.history.push('/login');
        }}
      >
        跳转Login
      </Button>
    </div>
  );
};

export default IndexPage;
