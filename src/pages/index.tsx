/*
 * @Description:
 */

import React, { FC } from 'react';
import { DruidLocalStorage } from '@/utils/storage';
import BasicLayout from '@/layouts/BasicLayout';
import mainMenu from './menu';

interface IProps {}

const MainWrapper: FC<IProps> = (props) => {
  const mySelfData = DruidLocalStorage.get('myself');

  // const goToMessage = () => {
  //     RoutePoolInner.pushRoute(routeProps, RouteUris.Main.Account.Message)
  // }

  return (
    <BasicLayout
      routeProps={props}
      menuNav={mainMenu(mySelfData)}
      // goToMessage={goToMessage}
    />
  );
};

export default MainWrapper;
