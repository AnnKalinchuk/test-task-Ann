import { PageInfoModel } from "../models/page-info.model";

export const PAGES_INFO_DATA: PageInfoModel[] = [
    {
         url: '/home',
         tooltips: [
             'Выберите нужную страницу в меню',
             'Выберите нужную страницу в меню 2',
             'Выберите нужную страницу в меню 3',
         ]
    },
    {
        url: '/reports',
        tooltips: [
            'Создайте отчет',
            'Сохраните отчет',
            'Проверьте результат',
        ]
   }
];