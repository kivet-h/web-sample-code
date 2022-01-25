/*
 * @Description: 最外层菜单栏
 */

const mainMenu = (myself: any) => {
  return [
    {
      title: '首页',
      icon: 'home',
      level: 1,
      path: '/home',
    },
    {
      title: 'demo 模块',
      icon: 'demo',
      level: 1,
      path: '/demo',
      children: [
        {
          title: 'demo1',
          path: '/demo/one',
          level: 2,
        },
        {
          title: 'demo2',
          path: '/demo/two',
          level: 2,
        },
        {
          title: 'demo3',
          path: '/demo/three',
          level: 2,
        },
      ],
    },
  ];
};

export default mainMenu;
