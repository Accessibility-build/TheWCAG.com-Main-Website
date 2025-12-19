import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";

export default [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        plugins: {
            react: reactPlugin,
            "react-hooks": reactHooksPlugin,
        },
        languageOptions: {
            ecmaVersion: 2024,
            sourceType: "module",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        rules: {
            // TypeScript
            "@typescript-eslint/no-unused-vars": ["warn", {
                argsIgnorePattern: "^_",
                varsIgnorePattern: "^_"
            }],
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/no-require-imports": "off",

            // React
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",
            "react/no-unescaped-entities": "off",

            // React Hooks
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",

            // General
            "no-unused-vars": "off", // Using TypeScript version
            "no-undef": "off", // TypeScript handles this
        },
        settings: {
            react: {
                version: "detect",
            },
        },
    },
    {
        ignores: [
            ".next/**",
            "node_modules/**",
            "out/**",
            "public/**",
            "*.config.js",
            "*.config.mjs",
        ],
    },
];