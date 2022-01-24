/*
 * @Description: DetailDemo1
 */
import { FC } from 'react';
import { useLocation } from 'umi';

interface IProps {}

const DetailDemo1: FC<IProps> = (props) => {
  const {
    query: { id = '' },
  }: any = useLocation();

  return (
    <div>
      DetailDemo1
      <div>id: {id}</div>
    </div>
  );
};

export default DetailDemo1;
