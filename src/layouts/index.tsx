/*
 * @Description:
 * @Author: kivet
 * @Date: 2022-01-18 17:57:06
 * @LastEditTime: 2022-01-21 14:06:22
 */

import ProLayout, { MenuDataItem } from '@ant-design/pro-layout';
import { IconMap } from '@/utils/iconsMap';
import { Link } from 'umi';
import { img_logo } from '@/assets/images';
import { Header } from './BasicLayout';

interface IProps {
  route: any;
}

const BasicLayout: React.FC<IProps> = (props) => {
  const { route } = props;

  console.log('layout-route', route);

  // 菜单 loop
  const loopMenuItem = (menus: MenuDataItem[]): MenuDataItem[] =>
    menus.map(({ icon, children, ...item }) => ({
      ...item,
      icon: icon && IconMap[icon as string],
      children: children && loopMenuItem(children),
    }));

  return <>{props.children}</>;
};

export default BasicLayout;
