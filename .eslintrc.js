/*
 * @Author:
 * @Date: 2022-04-27 10:32:41
 * @LastEditTime: 2022-04-27 11:07:05
 * @LastEditors: qiulongwen
 * @Description:
 * @FilePath: \dashboard_frame\.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
