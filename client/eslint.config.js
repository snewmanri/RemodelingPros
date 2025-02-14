import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import cssModules from "eslint-plugin-css-modules";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { 
    files: ["**/*.{js,mjs,cjs,jsx}"],  // Remove CSS from here
    ignores: ["dist/**", "node_modules/**"]
  },
  { languageOptions: { 
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    }
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      react: pluginReact,
      'css-modules': cssModules
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      'css-modules/no-unused-class': 'warn',
      'css-modules/no-undef-class': 'warn'
    }
  },
  pluginReact.configs.flat.recommended,
];