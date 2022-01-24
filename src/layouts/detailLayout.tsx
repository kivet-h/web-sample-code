/*
 * @Description: 详情页 Layout
 */

import ProLayout, { MenuDataItem } from '@ant-design/pro-layout';
import { IconMap } from '@/utils/iconsMap';
import { Link } from 'umi';
import { img_logo } from '@/assets/images';
import { Header } from './BasicLayout';

interface IProps {
  route: any;
}

const detailLayout: React.FC<IProps> = (props) => {
  const { route } = props;

  console.log('detailLLL', route);

  // 菜单 loop
  const loopMenuItem = (menus: MenuDataItem[]): MenuDataItem[] =>
    menus.map(({ icon, children, ...item }) => ({
      ...item,
      icon: icon && IconMap[icon as string],
      children: children && loopMenuItem(children),
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
      headerRender={() => <Header />}
    >
      {props.children}
    </ProLayout>
  );
};

export default detailLayout;
