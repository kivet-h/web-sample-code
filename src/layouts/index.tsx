/*
 * @Description: 最外层 layout 层
 */

interface IProps {
  route: any;
}

const BasicLayout: React.FC<IProps> = (props) => {
  return <>{props.children}</>;
};

export default BasicLayout;
