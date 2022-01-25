/*
 * @Description: LayoutSider 部分的内容
 */

import React, { FC, useEffect, useState } from 'react';
import _ from 'lodash';
import { Link } from 'umi';
import { Layout, Menu } from 'antd';
import Icon from '@ant-design/icons';
import { img_logo } from '@/assets/images';
import styles from './index.less';
import { IMenuNav } from '@/layouts';
import { Helper } from '@/utils/helper';
import { tree2Arr } from '@/layouts/utils';

const { Sider } = Layout;
const { SubMenu } = Menu;

interface IProps {
  menuNav: IMenuNav[];
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
}

const pathname = window.location.pathname;

const LayoutSider: FC<IProps> = (props) => {
  const [openKey, setOpenKey] = useState<string>('');
  const [openSubKey, setOpenSubKey] = useState<string[]>(['']);

  useEffect(() => {
    // 取出菜单所有route
    const tmpMenu = tree2Arr(props.menuNav).map((val) => val.path);

    console.log('Utils.tree2Arr(menuNav)11', tree2Arr(props.menuNav), tmpMenu);

    // 定位到菜单选项
    setOpenKey(pathname);

    // // 打开下拉菜单
    // setOpenSubKey(MenuHelper.currentSubOpenKey(menuNav))

    // // 监听路由变化，并设置openKey
    // if (props.history) {
    //     historyListener.current = props.history.listen(() => {
    //         setOpenKey(MenuHelper.currentOpenKey(tmpMenu))
    //     })
    // }
    // return () => {
    //     // 移除history监听
    //     historyListener.current()
    // }
  }, []);

  const handleMenuOpen = (openKeys: string[]) => {
    if (openKeys.length > 1) {
      openKeys.shift();
    }
    setOpenSubKey(openKeys);
  };

  const menuRoute = (menu: IMenuNav[]) => {
    return _.map(menu, (nav: IMenuNav) => {
      if (nav.children && !nav.noAuth) {
        return (
          <SubMenu
            key={`${nav.path}`}
            title={
              <span>
                {nav.icon && <Icon type={nav.icon} />}
                <span
                  className={`awe-menu-title ${
                    props.collapsed ? 'awe-hide-title' : ''
                  }`}
                >
                  {nav.title}
                </span>
              </span>
            }
          >
            {menuRoute(nav.children)}
          </SubMenu>
        );
      } else {
        // 当点击有children的菜单栏时，才会收起下来菜单
        const subEvent =
          nav.level === 1
            ? {
                onClick: () => setOpenSubKey([]),
                title: nav.title,
              }
            : {};

        return (
          !nav.noAuth && (
            <Menu.Item key={nav.path} {...subEvent}>
              {nav.isOpen ? (
                <a>
                  {nav.icon && <Icon type={nav.icon} />}
                  <span
                    className={`awe-menu-title ${
                      props.collapsed ? 'awe-hide-title' : ''
                    }`}
                  >
                    {nav.title}
                  </span>
                </a>
              ) : (
                <Link to={nav.path ? nav.path : '/'}>
                  {nav.icon && <Icon type={nav.icon} />}
                  <span
                    className={`awe-menu-title ${
                      props.collapsed ? 'awe-hide-title' : ''
                    }`}
                  >
                    {nav.title}
                  </span>
                </Link>
              )}
            </Menu.Item>
          )
        );
      }
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.menu_logo} data-collapsed={props.collapsed}>
        <img
          src={props.collapsed ? img_logo : img_logo}
          alt=""
          onClick={() => {
            console.log('==跳转到首页');
          }}
        />
      </div>
      <Sider
        collapsible
        collapsed={props.collapsed}
        onCollapse={(collapsed) => props.onCollapse(collapsed)}
      >
        <Menu
          mode="inline"
          theme="dark"
          className="layout-menu-aside"
          selectedKeys={[openKey]}
          openKeys={openSubKey}
          onOpenChange={handleMenuOpen}
          multiple={false}
        >
          {menuRoute(props.menuNav)}
        </Menu>
      </Sider>
    </div>
  );
};

export default LayoutSider;
