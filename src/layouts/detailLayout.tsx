/*
 * @Description: 详情页 Layout
 * @Author: kivet
 * @Date: 2022-01-25 15:55:00
 * @LastEditTime: 2022-01-26 17:13:53
 */

import type { MenuDataItem } from '@ant-design/pro-layout';
import ProLayout from '@ant-design/pro-layout';
import { Link } from 'umi';
import { img_logo } from '@/assets/images';
import { LayoutHeader } from './BasicLayout';

interface IProps {
  route: {
    routes: MenuDataItem[];
    [index: string]: any;
  };
}

const detailLayout: React.FC<IProps> = (props) => {
  const { route } = props;

  // console.log('detailLLL', route);

  // 菜单 loop
  const loopMenuItem = (menus: MenuDataItem[]): MenuDataItem[] =>
    menus.map(({ routes, ...item }) => ({
      ...item,
      routes: routes && loopMenuItem(routes),
    }));

  return (
    <ProLayout
      logo={img_logo}
      menuDataRender={() => loopMenuItem(route.routes)}
      menuItemRender={(item, dom) => <Link to={item.path ?? '/'}>{dom}</Link>}
      title={false}
      fixSiderbar
      // menu={{ request: async () => loopMenuItem(route.routes) }}
      breakpoint={false}
      defaultCollapsed={false}
      headerRender={() => <LayoutHeader />}
    >
      {props.children}
    </ProLayout>
  );
};

export default detailLayout;
