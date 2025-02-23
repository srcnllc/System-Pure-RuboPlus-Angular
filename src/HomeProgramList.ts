export class HomeProgramListModel {
  buttonName: string="";
  title: string="";
  btn1: string="";
  btn2: string="";
  bgImage: string="";
}

export const HomeProgramList: HomeProgramListModel[] = [
  {
    buttonName: "TÜM GÜN",
    title: "İş bulmak, meslek sahibi olmak istiyorum.",
    btn1: "Frontend, 3 AY",
    btn2: "Fullstack Pro, 6 AY",
    bgImage: "./images/bg1.png"
  },
  {
    buttonName: "AKŞAMLARI VE HAFTASONU",
    title: "İş değiştirmek veya işimde yükselmek istiyorum.",
    btn1: "Fullstack Up",
    btn2: "Fullstack UpPro",
    bgImage: "./images/bg2.png"
  },
  {
    buttonName: "AKŞAMLARI VE HAFTASONU",
    title: "Okurken geleceğe hazırlanmak istiyorum.",
    btn1: "Fullstack Genç",
    btn2: "Fullstack GPro",
    bgImage: "./images/bg3.png"
  }
];
