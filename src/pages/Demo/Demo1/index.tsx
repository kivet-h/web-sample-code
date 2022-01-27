/*
 * @Description: Demo1
 */
import type { FC } from 'react';
import styles from './index.less';

interface IProps {}

const Demo1: FC<IProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Demo1 title</div>
      <div className={styles.content}>Demo1 content</div>
      <div className={styles.footer}>Demo1 footer</div>
    </div>
  );
};

export default Demo1;
