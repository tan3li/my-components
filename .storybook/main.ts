import type {StorybookConfig} from '@storybook/react-webpack5';
import path from 'path';
import StylelintPlugin from 'stylelint-webpack-plugin';
import remarkGfm from 'remark-gfm';

const isProduction = process.env.NODE_ENV === 'production';
const mdxIgnorePatterns = ['*design'];

if (isProduction) {
    mdxIgnorePatterns.push('wip_*');
}

const config: StorybookConfig = {
    stories: [`../src/**/!(${mdxIgnorePatterns.join('|')}).mdx`, '../src/**/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    staticDirs: ['../public'],
    addons: [
        '@storybook/addon-webpack5-compiler-babel',
        '@storybook/addon-links',
        {
            name: '@storybook/addon-docs',
            options: {
                mdxPluginOptions: {
                    mdxCompileOptions: {
                        remarkPlugins: [remarkGfm]
                    }
                }
            }
        },
        '@storybook/addon-a11y',
        '../src/tools/dataattributeaddingtool/manager',
        {
            name: '@storybook/addon-styling-webpack',
            options: {
                rules: [
                    {
                        test: /\.css$/,
                        sideEffects: true,
                        use: [
                            require.resolve('style-loader'),
                            {
                                loader: require.resolve('css-loader'),
                                options: {}
                            }
                        ]
                    },
                    {
                        test: /\.s[ac]ss$/,
                        sideEffects: true,
                        use: [
                            require.resolve('style-loader'),
                            {
                                loader: require.resolve('css-loader'),
                                options: {
                                    importLoaders: 2
                                }
                            },
                            require.resolve('resolve-url-loader'),
                            {
                                loader: require.resolve('sass-loader'),
                                options: {
                                    implementation: require.resolve('sass'),
                                    sourceMap: true,
                                    sassOptions: {}
                                }
                            }
                        ]
                    }
                ]
            }
        }
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {}
    },
    typescript: {
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            tsconfigPath: path.resolve(__dirname, './../tsconfig.json'),
            shouldExtractLiteralValuesFromEnum: true,
            shouldRemoveUndefinedFromOptional: true
        }
    },
    // eslint-disable-next-line require-await
    webpackFinal: async (conf) => {
        conf.resolve = conf.resolve ?? {};
        conf.module = conf.module ?? {};
        conf.module.rules = conf.module.rules ?? [];
        conf.plugins = conf.plugins ?? [];

        conf.plugins.push(
            new StylelintPlugin({
                exclude: ['node_modules', 'dist']
            })
        );

        // Set moduleIds to 'named' for consistent module names
        conf.optimization = conf.optimization ?? {};
        conf.optimization.moduleIds = 'named';

        // Resolve js extensions
        conf.resolve.extensionAlias = {
            '.js': ['.js', '.ts', '.tsx']
        };

        // Modify existing image rule to exclude .svg files since we want to handle those with svgr
        // eslint-disable-next-line dot-notation
        const imageRule = conf.module.rules.find((rule) => rule?.['test']?.test?.('.svg'));

        if (imageRule) {
            // eslint-disable-next-line dot-notation
            imageRule['exclude'] = /\.svg$/;
        }

        conf.module.rules.push(
            // Configure .svg files to be loaded with svgr
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: '@svgr/webpack',
                        options: {
                            typescript: true,
                            dimensions: false
                        }
                    }
                ]
            }
        );

        return conf;
    }
};

export default config;
