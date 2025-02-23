export class EducationListModel {
  title: string ="";
  desc: string ="";
  buttonColor: string ="";
  titleColor: string ="";
}

export const EducationList: EducationListModel[] = [
  {
    title: "Tüm Gün Programlar",
    desc: "Eğitim hafta içi, gün boyunca",
    buttonColor: "pinkButton",
    titleColor: "#ED417F"
  },
  {
    title: "Part Time Programlar (Çalışanlar için)",
    desc: "Eğitimler hafta içi akşamları ve hafta sonları",
    buttonColor: "pinkNeonButton",
    titleColor: "rgba(233, 59, 227, 1)"
  },
  {
    title: "Genç Yazılımcı Programı (Öğrenciler için)",
    desc: "Eğitimler hafta içi akşamları ve hafta sonları",
    buttonColor: "greenButton",
    titleColor: "#7DC6B5"
  }
];
