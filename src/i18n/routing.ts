import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['en', 'uz', 'uz-latn', 'ru'],
    defaultLocale: 'uz'
});