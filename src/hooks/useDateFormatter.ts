'use client';

import moment from 'moment';
import {useMemo} from 'react';

moment.updateLocale('uz-latn', {
    months: [
        'Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun',
        'Iyul', 'Avgust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr'
    ],
    weekdays: [
        'Yakshanba', 'Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba',
        'Juma', 'Shanba'
    ]
});

moment.updateLocale('uz', {
    months: [
        'Январ', 'Феврал', 'Март', 'Апрел', 'Май', 'Июн',
        'Июл', 'Август', 'Сентабр', 'Октябр', 'Ноябр', 'Декабр'
    ],
    weekdays: [
        'Якшанба', 'Душанба', 'Сешанба', 'Чоршанба', 'Пайшанба',
        'Жума', 'Шанба'
    ]
});

function useDateFormatter(locale: string) {
    return useMemo(() => {
        moment.locale(locale);

        return {
            fullDateTime: (date: Date | string) => {
                const formatted = moment(date).format('dddd, MMMM D, YYYY')
                return formatted.charAt(0).toUpperCase() + formatted.slice(1)
            }
        };
    }, [locale]);
}

export default useDateFormatter