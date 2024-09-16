import globals from "globals";
import pluginJs from "@eslint/js";
import webpackConfig from "./webpack.config";


export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  webpackConfig,
];