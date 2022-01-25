/*
 * @Description: 全局 layout
 */

import { useState } from 'react';
import { Layout, Menu } from 'antd';
import { LayoutSider, LayoutHeader, LayoutFooter } from './LayoutContent';
import type { IProps } from '.';
import styles from './index.less';

const { Header, Content, Footer, Sider } = Layout;

const BasicLayout: React.FC<IProps> = (props) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <Layout className={styles.container}>
      <LayoutSider
        collapsed={collapsed}
        onCollapse={(val) => setCollapsed(val)}
        menuNav={props.menuNav || []}
      />

      <Layout>
        <LayoutHeader className={styles.layout_header}>
          <div>顶部内容</div>
        </LayoutHeader>

        <Content className={styles.layout_content}>{props.children}</Content>

        <LayoutFooter className={styles.layout_footer}>底部内容</LayoutFooter>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
