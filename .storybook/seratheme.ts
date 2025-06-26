import {create} from 'storybook/theming';

export const seraTheme = create({
    base: 'light',

    // Typography
    fontBase: '"Inter", sans-serif',

    // Brand
    brandTitle: 'Sera Design System',
    brandUrl: 'https://storybook.severa.com/',
    brandImage: '/images/logo.svg',
    brandTarget: '_self',

    // Text colors
    textColor: '#011e33'
});
