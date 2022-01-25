/*
 * @Description: LayoutFooter 部分的内容
 */

import { FC } from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

interface IProps {
  className?: string;
}

const LayoutFooter: FC<IProps> = (props) => {
  return <Footer className={props.className}>{props.children}</Footer>;
};

export default LayoutFooter;
