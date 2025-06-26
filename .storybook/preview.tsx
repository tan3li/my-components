import '@visma-severa/severa-design-tokens/dist/index.css';
import 'highcharts/css/highcharts.css';
import '../src/styles/index.scss';
import './storybook.scss';
import {globals} from '../src/tools/dataattributeaddingtool/preview.js';
import i18n from '../src/i18n/i18n.js';
import {I18nextProvider} from 'react-i18next';
import {Suspense, useEffect} from 'react';
import {Preview} from '@storybook/react-webpack5';
import {I18nProvider, LocaleCode} from '../src/contexts/i18nprovider.js';
import {lightTokens} from '@visma-severa/severa-design-tokens';
import DocTemplate from '../src/docs/doctemplate.mdx';
import {seraTheme} from './seratheme.js';

const locales: Record<string, LocaleCode> = {
    en: 'en-GB',
    fi: 'fi-FI'
};

const withI18n = (Story, context) => {
    const {cultureLocale, languageLocale} = context.globals;

    useEffect(() => {
        if (languageLocale !== i18n.language) {
            i18n.changeLanguage(languageLocale);
        }
    }, [languageLocale]);

    return (
        <Suspense fallback={<div>loading translations...</div>}>
            <I18nextProvider i18n={i18n}>
                <I18nProvider
                    cultureLocale={locales[cultureLocale]}
                    languageLocale={locales[languageLocale]}
                    timeZone="Europe/Helsinki">
                    <Story />
                </I18nProvider>
            </I18nextProvider>
        </Suspense>
    );
};

const withTheme = (Story, context) => {
    const {theme} = context.globals;

    useEffect(() => {
        document.body.dataset.theme = theme;
    }, [theme]);

    return <Story />;
};

const preview: Preview = {
    initialGlobals: globals,
    globalTypes: {
        cultureLocale: {
            description: 'Culture locale',
            defaultValue: 'fi',
            toolbar: {
                icon: 'globe',
                items: [
                    {value: 'en', title: 'English', right: '🇬🇧'},
                    {value: 'fi', title: 'Finnish', right: '🇫🇮'}
                ]
            }
        },
        languageLocale: {
            description: 'Language locale',
            defaultValue: 'en',
            toolbar: {
                icon: 'comment',
                items: [
                    {value: 'en', title: 'English', right: '🇬🇧'},
                    {value: 'fi', title: 'Finnish', right: '🇫🇮'}
                ]
            }
        },
        theme: {
            description: 'Global theme for components',
            defaultValue: 'light',
            toolbar: {
                title: 'Theme',
                icon: 'mirror',
                items: ['light', 'dark'],
                dynamicTitle: true
            }
        }
    },
    parameters: {
        actions: {argTypesRegex: '^on[A-Z].*'},
        backgrounds: {
            options: {
                blueGray: {name: 'Blue-Gray', value: lightTokens.color.neutralBackgroundContainerStrong.value}
            }
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        },
        docs: {
            page: DocTemplate,
            source: {
                type: 'code'
            },
            theme: seraTheme,
            toc: {
                headingSelector: 'h3, h4, h5, h6'
            },
            codePanel: true
        },
        options: {
            storySort: {
                method: 'alphabetical',
                order: ['Getting started', 'Foundations', 'Patterns', 'Components', 'Assets', 'Demos']
            }
        }
    },
    decorators: [withI18n, withTheme]
};

export default preview;
