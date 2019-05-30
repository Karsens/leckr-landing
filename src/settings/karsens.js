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
      type: "Markdown",
      markdown: `
### Wijnand Karsens
This is my work
`
    },

    {
      type: "GridView",
      grid: [
        {
          image: require("./assets_karsens/friends.png"),
          title: "Dunbar - Personal Relations Organizer",
          url: "https://dunbar.site/"
        },
        {
          image: require("./assets_karsens/leckr.jpg"),
          title: "LECKR - High quality apps in no-time",
          url: "https://leckr.io/"
        },
        {
          image: require("./assets_karsens/booki.png"),
          title: "Go Basic. Go Booki.",
          url: "https://gobooki.co"
        },

        {
          image: require("./assets_karsens/communify.png"),
          title: "The Coworking Community Builder",
          url: "https://communify.cc"
        },

        {
          image: require("./assets_karsens/digitalnomad.jpg"),
          title: "Blog",
          url: "https://blog.karsens.com/"
        }
      ]
    },

    /**
     * I should first share this mission personally with people and see how they react.
     */
    //     {
    //       type: "Markdown",
    //       markdown: `
    // # My mission
    // My mission is to create a long-lasting symbiosis between humanity, technology, biology, zoology, and our planet.

    // To do this, I plan to create technology and other means to enhance freedom and wisdom of humanity. Using this wisdom and freedom, I'm sure we can find a way, but it's not going to be easy.
    // `
    //     },

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
    },
    {
      type: "ImageCover",
      image: require("./assets_karsens/lake.jpg")
    }
  ]
};

const errorPage: Page = {
  title: "Page Not Found",
  is404: true,
  showInMenu: false,
  showInFooter: false,
  sections: [
    {
      type: "ImageCover",
      image: require("./assets_karsens/lake.jpg")
    },

    {
      type: "Redirect",
      redirectToUrlWith: (path, query) => `https://blog.karsens.com${path}${query}`
    }
  ]
};

const pages: Page[] = [home, defaultPages.emailsuccess, errorPage];

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
