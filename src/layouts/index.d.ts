/*
 * @Description:
 */

export interface IMenuNav {
  title?: string;
  icon?: string;
  level?: number;
  path?: string;
  noAuth?: boolean;
  isOpen?: boolean;
  children?: IMenuNav[];
}

export interface IProps {
  routeProps?: any;
  menuNav?: IMenuNav[];
}
