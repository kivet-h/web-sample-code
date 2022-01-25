/*
 * @Description: LayoutHeader 部分的内容
 */

import { FC } from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

interface IProps {
  className?: string;
}

const LayoutHeader: FC<IProps> = (props) => {
  return <Header className={props.className}>{props.children}</Header>;
};

export default LayoutHeader;
