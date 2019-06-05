import { Page, GlobalSettings, Settings } from "./_types";
import defaultPages from "./_defaults";

/**
 *
 * Idea:
 *
 * - Only put the 3 projects on the home page: LECKR, Dunbar, Blog, (Dyme after evaluation, maybe)
 * - Create a second page with books I read
 * - Create a third page with past + side projects -> Booki, Communify, OV-Fiets, Bencompare, MYPO, BAWS, MasterCrimeZ, etc. (see CV)
 * - Create subpages of all old projects that are on CV
 * - Think about putting this all in a single source of truth: Github.com/karsens repo. From that I can automatically create my CV in many formats, including my website, but also a PDF.
 *
 *
 *
 * MasterCrimeZ
 *
 * - Sunset MasterCrimeZ website, but redirect the traction
 * - Put the source online (for sale?) on GitHub, send out an email (GMass or MailChimp Pro), engage them a bit for my other work.
 * - Make them special. Also put it on mastercrimez.nl. Then keep a list of interested people in MailChimp. First, get mailchimp for 99$/month, then decrease the list for engagement.
 * - Goal:
 * 1. Get people hyped about the MasterCrimeZ source (website + app!) and get a part of it (this can even be my bootcamp/startup school)
 * 2. Grow my network by people that know and adore me (weak links)
 * 3. Direct some of them to my other products
 * 4. Become a MailChimp Master
 *
 */
const home: Page = {
  title: "Home",
  route: "",
  internalPage: true,
  showInMenu: true,
  showInFooter: false,
  sections: [
    {
      type: "Blog",

      optionsArray: [
        {
          title: "My work",
          // ghostLink:
          //   "https://blog.karsens.com/ghost/api/v2/content/posts/?key=f986ca2d588b087644a1790df8&limit=all&filter=tags:dunbar",
          articles: [
            {
              id: 1,
              date: "Aug 7, 2014, 12:51pm",
              figure: require("./assets_karsens/leckr.jpg"),
              title: "LECKR",
              description: "High quality apps in no-time with free advice and an open source SDK",
              link: "https://leckr.io/"
            },

            {
              id: 2,
              date: "Aug 7, 2014, 12:51pm",
              figure: require("./assets_karsens/friends.png"),
              title: "Dunbar",
              description:
                "Establish connections you can build on - PRO Contact App (Personal Relations Organizer)",
              link: "https://dunbar.site/"
            },

            {
              id: 3,
              date: "Aug 7, 2014, 12:51pm",
              figure: require("./assets_karsens/digitalnomad.jpg"),
              title: "Blog",
              description:
                "Over 100 blogs about mindset/lifestyle, geeky stuff, entrepreneurship & science fiction",
              link: "https://blog.karsens.com/"
            },

            {
              id: 4,
              date: "Aug 7, 2014, 12:51pm",
              figure: require("./assets_karsens/booki.png"),
              title: "Go Basic. Go Booki",
              description: "Current Hobby project",
              link: "https://gobooki.co"
            },

            {
              id: 5,
              date: "Aug 7, 2014, 12:51pm",
              figure: require("./assets_karsens/communify.png"),
              title: "Coworking Community App",
              description: "June 2017 - December 2018",
              link: "https://communify.cc"
            },

            {
              id: 6,
              date: "Aug 7, 2014, 12:51pm",
              figure: require("./assets_karsens/ovfiets.png"),
              title: "OV-Fiets reisplanner",
              description: "June 2018 - March 2019",
              link: "https://ovfiets.net"
            }
          ]
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
  appName: "Wijnand Karsens",
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
