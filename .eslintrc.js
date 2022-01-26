/*
 * @Description: eslint 配置
 * @ 规则依赖于 @umijs/fabric，在此基础上，可自行添加自己的规则进行配置
 * @Author: kivet
 * @Date: 2022-01-26 13:55:14
 * @LastEditTime: 2022-01-26 15:03:44
 */

module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],

  // in antd-design-pro
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
  },

  rules: {
    // ? 关闭此规则，允许 useEffect 的依赖为空数组
    'react-hooks/exhaustive-deps': off,
    // 强制使用单引号
    quotes: [2, 'single'],
  },
};
