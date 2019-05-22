import { Page, GlobalSettings, Settings } from "./_types";
import defaultPages from "./_defaults";

const home: Page = {
  title: "Home",
  route: "",
  internalPage: true,
  showInMenu: true,
  showInFooter: false,
  sections: [
    {
      type: "ImageCover",
      title: "",
      description: "",
      image: require("./assets_karsens/lake.jpg")
    },
    {
      type: "ImageTitle",
      siteTitle: "Wijnand Karsens",
      title: "Wijnand Karsens",
      image1: require("./assets_karsens/me.jpg"),
      text: `
Hey! I'm Wijnand. Nice to meet you. Have a look on my awesome website. I created it all by myself! Cool, huh?`
    },

    {
      type: "ImageTextFeatures",
      marqueeTitle: "My projects 🎉🎉",
      features: [
        {
          image: require("./assets_karsens/dunbar.png"),
          title: "Dunbar",
          text:
            "Dunbar is the main project I'm working on now. It's a contact app that helps you organize, analyse and improve your personal relationships, and put more meaning into them. [See for yourself](https://dunbar.site)"
        },
        {
          image: require("./assets_karsens/leckr.jpg"),
          title: "LECKR",
          text:
            "Tranforming the status quo programmer lifestyle into the ultimate one. Also, LECKR sells lots of code, and you can hire us. [Have a look](https://leckr.io/)"
        },
        {
          image: require("./assets_karsens/booki.png"),
          title: "Booki",
          text:
            "It's a side project, but I get a lot of positive feedback. [Have a look](https://gobooki.co/)"
        },

        {
          image: require("./assets_karsens/blog.png"),
          title: "Blog",
          text:
            "Sometimes I write about things I find interesting [Go to my blog](https://blog.karsens.com/)"
        }
      ]
    },

    {
      type: "Markdown",
      markdown: `
# My mission 
My mission is to create a long-lasting symbiosis between humanity, technology, biology, zoology, and our planet.

To do this, I plan to create technology and other means to enhance freedom and wisdom of humanity. Using this wisdom and freedom, I'm sure we can find a way, but it's not going to be easy.
`
    },

    {
      type: "Markdown",

      markdown: `
# Contact


✉️ [hi@karsens.com](mailto:hi@karsens.com)

📞 [020 - 21 01 820](tel:+31202101820)

**KVK** 64843769


[🗺 Google Maps](https://www.google.com/maps/place/Krammerstraat+33C,+1078+KG+Amsterdam)


    Krammerstraat 33 C
    1078 KG
    Amsterdam, Noord Holland
    The Netherlands


          `
    }
  ]
};

const pages: Page[] = [home, defaultPages.emailsuccess];

const globalSettings: GlobalSettings = {
  isNoPhone: true,
  googleAnalyticsId: "UA-115183926-3",

  colors: {
    defaultText: "#fff",
    primary: "#0054b8",
    primaryLighter: "#0064dc",
    primaryDarker: "#00306a"
  },

  style: {
    fontFamily: {
      title: "Comic Sans MS",
      text: "Comic Sans MS"
    }
  },

  apiUrl: null,
  // driftId: "p87nxp8v5kyi",
  appName: "Karsens",
  siteTitle: "Wijnand Karsens",
  copyrightYear: "2019",
  companyName: "LECKR"
};

const assets = {
  favicon: require("./assets_karsens/favicon.ico"),
  logo: require("./assets_karsens/logo.jpg")
};
const settings: Settings = {
  pages,
  assets,
  ...globalSettings
};

export default settings;
