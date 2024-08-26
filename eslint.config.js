import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
];

{
  'rules'; {
    "semi"; "error,";
    "no-console"; "warn",
      "no-unused-vars"; "off";
  }
}
