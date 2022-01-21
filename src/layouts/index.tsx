/*
 * @Description: 全局 layout
 */

import { useState } from 'react';
import { Layout, Menu } from 'antd';
import styles from './index.less';

const { Header, Content, Footer, Sider } = Layout;

interface IProps {}

const BasicLayout: React.FC<IProps> = (props) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <Layout className={styles.container}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(collapsed) => setCollapsed(collapsed)}
        className={styles.layout_sider}
      >
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
          <Menu.SubMenu key="sub1" title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Header className={styles.layout_header}>顶部内容</Header>
        <Content className={styles.layout_content}>中间内容</Content>
        <Footer className={styles.layout_footer}>底部内容</Footer>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
