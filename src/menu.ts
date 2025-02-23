export class MenuModel{
    name: string = "";
    url: string = "";
}
export const Menus: MenuModel[] = [
    {
        name: 'Programlar',
        url: '/'
    },
    {
        name: 'Fiyatlar',
        url: 'prices'
    },
    {
        name: 'Hakkımızda',
        url: 'about'
    },
    {
        name: 'İletişim',
        url: 'contact'
    },
];