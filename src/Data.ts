export class DataModel {
  color: string ="";
  blogName: string ="";
  blogSubTitle: string ="";
  blogDescription: string ="";
  blogProgramData: ProgramData[] = [];
  banner?: BannerData;
}

export class ProgramData {
  title: string ="";
  subTitle: string ="";
  date: string ="";
  message1: string ="";
  message2: string ="";
  message3: string ="";
  message4?: string ="";
  messageIcon1: string ="";
  messageIcon2: string ="";
  messageIcon3: string ="";
  messageIcon4?: string ="";
  price?: string ="";
  installment?: string ="";
  amount: string ="";
  description: string ="";
}

export class BannerData {
  bannerPinkTitle: string="";
  bannerPinkPrice1: string="";
  bannerPinkPrice2: string="";
  bannerPinkText: string="";
  bannerGreenTitle: string="";
  bannerGreenPrice1: string="";
  bannerGreenPrice2: string="";
  bannerGreenText1: string="";
  bannerGreenText2: string="";
}

export const Data: DataModel[] = [
  {
    color: "#ED417F",
    blogName: "Tüm Gün Programlar",
    blogSubTitle: "Hafta içi ve gün boyunca",
    blogDescription: "* Fullstack Pro İşe Girince Öde opsiyonunun öğrenci kapasitesi sınırlıdır. Ayrıca programa 96.000 peşin fiyatına 6 taksit veya 13 ay boyunca ayda 9.200 TL (karta bloke yok) ödeme koşullarıyla da başvuru yapabilirsiniz. Detaylı bilgi için Sıkça Sorulan Sorular’a bakın.",
    blogProgramData: [
      {
        title: "Fullstack",
        subTitle: "Pro",
        date: "6 ay, 864 saat *",
        message1: "Eğitimlerimiz ve yapay zeka 1-1 destek veriyor",
        messageIcon1: "/images/icons/cardIcons/messagePink.png",
        messageIcon2: "/images/icons/cardIcons/wifiPink.png",
        messageIcon3: "/images/icons/cardIcons/bagPink.png",
        message2: "Canlı sınıf: Haftada 4 gün ders",
        message3: "Kariyer merkezimiz ile iş bulma desteği",
        amount: "6.000 TL yönetim gideri hariç",
        description: "* Haftada ortalama 10 saat canlı ders, 24 saatlik yapay zeka destekli online eğitim, birebir eğitmen/koç desteği ile öğrencinin eğitime ayıracağı toplam süreye göre hesap"
      },
      {
        title: "Frontend",
        subTitle: "",
        date: "3 ay, 432 saat *",
        message1: "Eğitimlerimiz ve yapay zeka 1-1 destek veriyor",
        message2: "Canlı sınıf: Haftada 4 gün ders",
        message3: "Kariyer merkezimiz ile iş bulma desteği",
        messageIcon1: "/images/icons/cardIcons/messagePink.png",
        messageIcon2: "/images/icons/cardIcons/wifiPink.png",
        messageIcon3: "/images/icons/cardIcons/bagPink.png",
        price: "4.600",
        installment: "TL/ay",
        amount: "13 ay boyunca (Karta bloke yok)",
        description: "* Haftada ortalama 6 saat vanlı, 6-8 saatlik yapay zaka destekli online eğitim, birebir eğitmen/koç desteği ile öğrencinin eğitime ayıracağı toplam süreye göre hesaplanmıştır."
      }
    ],
    banner: {
      bannerPinkTitle: "Peşin ödemeye özel koşullar",
      bannerPinkPrice1: "Fullstack Up: 52.000 TL",
      bannerPinkPrice2: "Fullstack UpPro: 99.000 TL",
      bannerPinkText: "Kredi kartına vade farksız 6 aya varan taksit fırsatları için başvurun",
      bannerGreenTitle: "Hangi program bana göre",
      bannerGreenPrice1: "Full-Stack Up:",
      bannerGreenPrice2: "Full-Stack UpPro:",
      bannerGreenText1: "Kariyerinizde yükselmek ve yazılımcı olma opsiyonuna sahip olmak için",
      bannerGreenText2: "Yazılıncı olarak işe girme şansınızı maksimuma çıkartmak için"
    }
  },
  {
    color: "#E93BE3",
    blogName: "Part-time Programlar (Çalışanlar için)",
    blogSubTitle: "Eğitim hafta içi akşamları ve hafta sonları",
    blogDescription: "Aylık ödeme opsiyonunda kart limitiniz aynı kalıyor - Bloke yok.",
    blogProgramData: [
      {
        title: "Fullstack",
        subTitle: "Up",
        date: "12 ay, haftada 6 saat",
        message1: "Eğitimlerimiz ve yapay zeka 1-1 destek veriyor",
        message2: "Haftada 1 gün canlı ders, 1 gün kütüphane seansı",
        message3: "Kariyer merkezimiz ile iş bulma desteği",
        messageIcon1: "/images/icons/cardIcons/messagePurple.png",
        messageIcon2: "/images/icons/cardIcons/wifiPurple.png",
        messageIcon3: "/images/icons/cardIcons/bagPurple.png",
        price: "5.000",
        installment: "TL/ay",
        amount: "13 ay boyunca (karta bloke yok)",
        description: "* Her hafta 1.5 saat canlı ders, 4-5 saatlik yapay zeka destekli online eğitim, eğitmen /komunite desteği ile öğrencinin eğitime ayıracağı toplam süreye göre hesaplanmıştır."
      },
      {
        title: "Fullstack",
        subTitle: "UpPro",
        date: "10 ay, haftada 12 saat",
        message1: "Eğitimlerimiz ve yapay zeka 1-1 destek veriyor",
        message2: "Haftada 3 gün canlı ders, 1 gün proje",
        message3: "İş bulma kariyer merkezi desteği",
        message4: "Toplamda 516 saat eğitim *",
        messageIcon1: "/images/icons/cardIcons/messagePurple.png",
        messageIcon2: "/images/icons/cardIcons/wifiPurple.png",
        messageIcon3: "/images/icons/cardIcons/bagPurple.png",
        messageIcon4: "/images/icons/cardIcons/educationPurple.png",
        price: "4.600",
        installment: "TL/ay",
        amount: "13 ay boyunca (Karta bloke yok)",
        description: "* Haftada ortalama 6 saat vanlı, 6-8 saatlik yapay zaka destekli online eğitim, birebir eğitmen/koç desteği ile öğrencinin eğitime ayıracağı toplam süreye göre hesaplanmıştır."
      }
    ],
    banner: {
      bannerPinkTitle: "Peşin ödemeye özel koşullar",
      bannerPinkPrice1: "Fullstack Up: 42.000 TL",
      bannerPinkPrice2: "Fullstack UpPro: 68.000 TL",
      bannerPinkText: "Kredi kartına vade farksız 6 aya varan taksit fırsatları için başvurun",
      bannerGreenTitle: "Hangi program bana göre",
      bannerGreenPrice1: "Full-Stack Genç:",
      bannerGreenPrice2: "Full-Stack GPro:",
      bannerGreenText1: "Yazılım öğrenmek, ileride bütün opsiyonlara sahip olmak için",
      bannerGreenText2: "Yazılımcı olarak mezuniyetin hemen ardından iş yada staj bulmak için"
    }
  },
  {
    color: "#7DC6B5",
    blogName: "Genç Yazılımcı Programı (Öğrenciler için)",
    blogSubTitle: "Eğitim hafta içi akşamları ve hafta sonları",
    blogDescription: "Aylık ödeme opsiyonunda kart limitiniz aynı kalıyor - Bloke yok.",
    blogProgramData: [
      {
        title: "Fullstack",
        subTitle: "Up",
        date: "12 ay, haftada 6 saat",
        message1: "Eğitimlerimiz ve yapay zeka 1-1 destek veriyor",
        message2: "Haftada 1 gün canlı ders, 1 gün kütüphane seansı",
        message3: "Kariyer merkezimiz ile iş bulma desteği",
        messageIcon1: "/images/icons/cardIcons/messageGreen.png",
        messageIcon2: "/images/icons/cardIcons/wifiGreen.png",
        messageIcon3: "/images/icons/cardIcons/bagGreen.png",
        price: "5.000",
        installment: "TL/ay",
        amount: "13 ay boyunca (karta bloke yok)",
        description: "* Her hafta 1.5 saat canlı ders, 4-5 saatlik yapay zeka destekli online eğitim, eğitmen /komunite desteği ile öğrencinin eğitime ayıracağı toplam süreye göre hesaplanmıştır."
      },
      {
        title: "Fullstack",
        subTitle: "UpPro",
        date: "10 ay, haftada 12 saat",
        message1: "Eğitimlerimiz ve yapay zeka 1-1 destek veriyor",
        message2: "Haftada 3 gün canlı ders, 1 gün proje",
        message3: "İş bulma kariyer merkezi desteği",
        message4: "Toplamda 516 saat eğitim *",
        messageIcon1: "/images/icons/cardIcons/messageGreen.png",
        messageIcon2: "/images/icons/cardIcons/wifiGreen.png",
        messageIcon3: "/images/icons/cardIcons/bagGreen.png",
        messageIcon4: "/images/icons/cardIcons/educationGreen.png",
        price: "4.600",
        installment: "TL/ay",
        amount: "13 ay boyunca (Karta bloke yok)",
        description: "* Haftada ortalama 6 saat vanlı, 6-8 saatlik yapay zaka destekli online eğitim, birebir eğitmen/koç desteği ile öğrencinin eğitime ayıracağı toplam süreye göre hesaplanmıştır."
      }
    ],
    banner: {
      bannerPinkTitle: "Peşin ödemeye özel koşullar",
      bannerPinkPrice1: "Fullstack Up: 42.000 TL",
      bannerPinkPrice2: "Fullstack UpPro: 68.000 TL",
      bannerPinkText: "Kredi kartına vade farksız 6 aya varan taksit fırsatları için başvurun",
      bannerGreenTitle: "Hangi program bana göre",
      bannerGreenPrice1: "Full-Stack Genç:",
      bannerGreenPrice2: "Full-Stack GPro:",
      bannerGreenText1: "Yazılım öğrenmek, ileride bütün opsiyonlara sahip olmak için",
      bannerGreenText2: "Yazılımcı olarak mezuniyetin hemen ardından iş yada staj bulmak için"
    }
  }
];
