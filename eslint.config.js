import eslint from '@eslint/js';
import tsEslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import importX from 'eslint-plugin-import-x';
import react from 'eslint-plugin-react';
import globals from 'globals';
import sonarjs from 'eslint-plugin-sonarjs';
import storybook from 'eslint-plugin-storybook';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default tsEslint.config(
    {
        ignores: ['node_modules/', 'storybook-static/', 'dist/', '.idea/', '.github/']
    },
    {
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.jest
            }
        }
    },
    eslint.configs.recommended,
    {
        rules: {
            'no-console': 2,
            'no-extra-semi': 2,
            'no-inner-declarations': [2, 'both'],
            'no-template-curly-in-string': 2,
            'accessor-pairs': 2,
            'array-callback-return': 2,
            'block-scoped-var': 2,
            complexity: [2, {max: 25}],
            'consistent-return': 0,
            curly: [2, 'all'],
            'default-case': 2,
            'default-case-last': 2,
            'dot-location': [2, 'property'],
            'dot-notation': 2,
            eqeqeq: 2,
            'no-alert': 2,
            'no-caller': 2,
            'no-div-regex': 2,
            'no-else-return': 2,
            'no-empty-function': 2,
            'no-eq-null': 2,
            'no-eval': 2,
            'no-extend-native': 2,
            'no-extra-bind': 2,
            'no-extra-label': 2,
            'no-floating-decimal': 2,
            'no-implicit-globals': 2,
            'no-implied-eval': 2,
            'no-iterator': 2,
            'no-labels': 2,
            'no-lone-blocks': 2,
            'no-loop-func': 2,
            'no-multi-str': 2,
            'no-new': 2,
            'no-new-func': 2,
            'no-new-wrappers': 2,
            'no-octal-escape': 2,
            'no-param-reassign': 2,
            'no-proto': 2,
            'no-return-assign': 2,
            'no-script-url': 2,
            'no-self-compare': 2,
            'no-sequences': 2,
            'no-unmodified-loop-condition': 2,
            'no-unused-expressions': 2,
            'no-useless-call': 2,
            'no-useless-concat': 2,
            'no-useless-return': 2,
            'no-void': 2,
            radix: 2,
            'require-await': 2,
            'vars-on-top': 2,
            yoda: 2,
            strict: 2,
            'no-label-var': 2,
            'no-restricted-globals': 2,
            'no-undef-init': 2,
            camelcase: 2,
            'func-name-matching': 2,
            'id-denylist': 2,
            'id-match': 2,
            'max-depth': [2, 5],
            'max-nested-callbacks': [2, 10],
            'max-statements': [2, 35],
            'new-cap': 2,
            'no-array-constructor': 2,
            'no-lonely-if': 2,
            'no-negated-condition': 2,
            'no-nested-ternary': 2,
            'no-object-constructor': 2,
            'no-restricted-syntax': 2,
            'no-unneeded-ternary': 2,
            'one-var': [
                2,
                {
                    const: 'never', // Exactly one declarator per const declaration per block
                    let: 'consecutive', // Exactly one let declaration per block
                    var: 'always' // Exactly one var declaration per function
                }
            ],
            'operator-assignment': 2,
            'unicode-bom': 2,
            'arrow-body-style': 2,
            'no-duplicate-imports': [2, {includeExports: true}],
            'no-restricted-imports': 2,
            'no-useless-computed-key': 2,
            'no-useless-constructor': 2,
            'no-useless-rename': 2,
            'no-var': 2,
            'object-shorthand': 2,
            'prefer-const': 2,
            'prefer-numeric-literals': 2,
            'prefer-rest-params': 2,
            'prefer-spread': 2,
            'prefer-template': 2,
            'symbol-description': 2
        }
    },
    {
        plugins: {
            '@stylistic': stylistic
        },
        rules: {
            '@stylistic/wrap-iife': [2, 'outside', {functionPrototypeMethods: true}],
            '@stylistic/array-bracket-spacing': [2, 'never', {singleValue: false}],
            '@stylistic/comma-dangle': 2,
            '@stylistic/comma-spacing': 2,
            '@stylistic/comma-style': 2,
            '@stylistic/computed-property-spacing': 2,
            '@stylistic/eol-last': 2,
            '@stylistic/jsx-quotes': 2,
            '@stylistic/key-spacing': 2,
            '@stylistic/keyword-spacing': [
                2,
                {
                    overrides: {
                        else: {
                            before: true
                        },
                        while: {
                            before: true
                        },
                        catch: {
                            before: true
                        }
                    }
                }
            ],
            '@stylistic/max-statements-per-line': 2,
            '@stylistic/new-parens': 2,
            '@stylistic/no-mixed-spaces-and-tabs': 2,
            '@stylistic/no-multiple-empty-lines': 2,
            '@stylistic/no-tabs': 2,
            '@stylistic/no-trailing-spaces': 2,
            '@stylistic/no-whitespace-before-property': 2,
            '@stylistic/nonblock-statement-body-position': 2,
            '@stylistic/one-var-declaration-per-line': 2,
            '@stylistic/padded-blocks': [2, 'never'],
            '@stylistic/padding-line-between-statements': [
                2,
                {
                    blankLine: 'always',
                    next: '*',
                    prev: ['const', 'let', 'var']
                },
                {
                    blankLine: 'any',
                    next: ['const', 'let', 'var'],
                    prev: ['const', 'let', 'var']
                },
                {
                    blankLine: 'always',
                    next: '*',
                    prev: 'directive'
                },
                {
                    blankLine: 'any',
                    next: 'directive',
                    prev: 'directive'
                },
                {
                    blankLine: 'always',
                    next: 'return',
                    prev: '*'
                }
            ],
            '@stylistic/quote-props': [2, 'as-needed'],
            '@stylistic/quotes': [2, 'single', 'avoid-escape'],
            '@stylistic/semi': 2,
            '@stylistic/semi-spacing': 2,
            '@stylistic/semi-style': 2,
            '@stylistic/space-before-blocks': 2,
            '@stylistic/space-in-parens': 2,
            '@stylistic/space-infix-ops': 2,
            '@stylistic/space-unary-ops': [
                2,
                {
                    words: false,
                    nonwords: false
                }
            ],
            '@stylistic/spaced-comment': 2,
            '@stylistic/switch-colon-spacing': 2,
            '@stylistic/template-tag-spacing': 2,
            '@stylistic/wrap-regex': 2,
            '@stylistic/arrow-parens': 2,
            '@stylistic/arrow-spacing': 2,
            '@stylistic/generator-star-spacing': 2,
            '@stylistic/no-confusing-arrow': 2,
            '@stylistic/rest-spread-spacing': 2,
            '@stylistic/template-curly-spacing': 2,
            '@stylistic/yield-star-spacing': 2,
            '@stylistic/brace-style': [2, '1tbs', {allowSingleLine: false}],
            '@stylistic/func-call-spacing': [2, 'never'],
            '@stylistic/member-delimiter-style': 2,
            '@stylistic/space-before-function-paren': [
                2,
                {
                    anonymous: 'always',
                    named: 'never'
                }
            ],
            '@stylistic/type-annotation-spacing': 2
        }
    },
    ...tsEslint.configs.recommended,
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            parserOptions: {
                project: './tsconfig.json'
            }
        },
        rules: {
            '@typescript-eslint/adjacent-overload-signatures': 2,
            '@typescript-eslint/array-type': [2, {default: 'array-simple'}],
            '@typescript-eslint/consistent-type-assertions': [
                2,
                {assertionStyle: 'as', objectLiteralTypeAssertions: 'allow-as-parameter'}
            ],
            '@typescript-eslint/consistent-type-definitions': [2, 'interface'],
            '@typescript-eslint/explicit-member-accessibility': [
                2,
                {accessibility: 'explicit', overrides: {constructors: 'no-public'}}
            ],
            '@typescript-eslint/method-signature-style': [2, 'property'],
            '@typescript-eslint/no-confusing-non-null-assertion': 2,
            '@typescript-eslint/no-dupe-class-members': 2,
            '@typescript-eslint/no-dynamic-delete': 2,
            '@typescript-eslint/no-invalid-void-type': 2,
            '@typescript-eslint/no-magic-numbers': [
                2,
                {
                    detectObjects: false,
                    enforceConst: false,
                    ignore: [0, 1, 2, 3, 100, -1],
                    ignoreArrayIndexes: true,
                    ignoreEnums: true
                }
            ],
            '@typescript-eslint/no-meaningless-void-operator': 2,
            '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 2,
            '@typescript-eslint/no-redeclare': [2, {builtinGlobals: true}],
            '@typescript-eslint/no-shadow': 2,
            '@typescript-eslint/no-unnecessary-boolean-literal-compare': 2,
            '@typescript-eslint/no-use-before-define': [
                2,
                {
                    classes: false,
                    functions: true,
                    variables: true
                }
            ],
            '@typescript-eslint/non-nullable-type-assertion-style': 2,
            '@typescript-eslint/prefer-includes': 2,
            '@typescript-eslint/prefer-literal-enum-member': 2,
            '@typescript-eslint/prefer-nullish-coalescing': [
                2,
                {
                    ignoreConditionalTests: true,
                    ignoreTernaryTests: true
                }
            ],
            '@typescript-eslint/prefer-optional-chain': 2,
            '@typescript-eslint/prefer-reduce-type-parameter': 2,
            '@typescript-eslint/prefer-string-starts-ends-with': 2,
            '@typescript-eslint/prefer-ts-expect-error': 2,
            '@typescript-eslint/no-explicit-any': 0,
            '@typescript-eslint/no-empty-object-type': [2, {allowInterfaces: 'always'}]
        }
    },
    importX.flatConfigs.typescript,
    {
        rules: {
            'import-x/first': 2,
            'import-x/no-duplicates': 2,
            'import-x/newline-after-import': 2
        }
    },
    sonarjs.configs.recommended,
    {
        rules: {
            'sonarjs/prefer-read-only-props': 0,
            'sonarjs/prefer-for-of': 0,
            'sonarjs/no-array-index-key': 0,
            'sonarjs/todo-tag': 0,
            'sonarjs/no-nested-conditional': 0,
            'sonarjs/no-unused-expressions': 0,
            'sonarjs/cognitive-complexity': 0,
            'sonarjs/max-switch-cases': 0,
            'sonarjs/prefer-immediate-return': 2,
            'sonarjs/no-collapsible-if': 2,
            'sonarjs/prefer-object-literal': 2,
            'sonarjs/no-nested-switch': 2
        }
    },
    ...storybook.configs['flat/recommended'],
    {
        files: ['**/*.stories.tsx'],
        rules: {
            'sonarjs/rules-of-hooks': 0,
            '@typescript-eslint/no-magic-numbers': 0
        }
    },
    react.configs.flat.recommended,
    react.configs.flat['jsx-runtime'],
    {
        rules: {
            'react/jsx-closing-bracket-location': [
                2,
                {
                    nonEmpty: 'after-props',
                    selfClosing: 'tag-aligned'
                }
            ],
            'react/jsx-closing-tag-location': 2,
            'react/jsx-curly-spacing': [2, 'never', {spacing: {objectLiterals: 'never'}}],
            'react/jsx-equals-spacing': [2, 'never'],
            'react/jsx-filename-extension': [2, {extensions: ['.js', '.ts', '.tsx']}],
            'react/jsx-first-prop-new-line': [2, 'multiline'],
            'react/jsx-indent-props': [2, 4],
            'react/jsx-key': 0,
            'react/jsx-pascal-case': [2, {allowAllCaps: false}],
            'react/jsx-props-no-multi-spaces': 2,
            'react/jsx-sort-props': [
                2,
                {
                    callbacksLast: false,
                    ignoreCase: false,
                    noSortAlphabetically: false,
                    reservedFirst: false,
                    shorthandFirst: false,
                    shorthandLast: true
                }
            ],
            'react/no-danger': 2
        }
    },
    jsxA11y.flatConfigs.recommended,
    {
        rules: {
            'jsx-a11y/no-autofocus': 0
        }
    }
);
