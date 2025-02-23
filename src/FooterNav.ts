export class FooterNavModel {
    title: string = "";
    links: string[] = [];
}

export const FooterNav: FooterNavModel[] = [
    {
        title: "Kurumsal",
        links: ["Hakkımızda", "Medya", "İşverenler", "İletişim"]
    },
    {
        title: "Hizmetler",
        links: [
            "Fullstack Pro",
            "Fullstack Up",
            "Fullstack UpPro",
            "Frontend Developer",
            "Fullstack Genç",
            "Fullstack GPro"
        ]
    },
    {
        title: "Yasal",
        links: ["KVKK Politikası", "Gizlilik Politikası", "Instagram", "Linkedin"]
    },
    {
        title: "Destek",
        links: ["Sıkça Sorulanlar", "Kullanım Şartları"]
    }
];
