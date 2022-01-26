/*
 * @Description: 样式校验配置文件
 * @Author: kivet
 * @Date: 2022-01-26 14:37:08
 * @LastEditTime: 2022-01-26 15:02:38
 */

module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/stylelint')],
  rules: {
    // your rules
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
};
