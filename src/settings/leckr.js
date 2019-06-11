/**
 * #TODO NOW
 * - approach blurpers with this website and a beer --> add blurps
 * - finish github integration libraries (see paper)
 * - approach network with this website and a beer
 * - get SEO right, ask David for advice
 * - try undraw.co image of surfing + a mobile phone (phtoshoped)
 * - put my personal picture at advise page
 * Mailchimp:
 * - set up default mails with content for every interested thing. Send them one extra email 4x a year or so with new blogs (if possible)
 * - find and approach as many react / react native companies as possible.
 *
 *
 * Why (company goal): High-quality apps in no-time
 *
 * Who (target audience):
 * - Profitable websites run by companies that are thinking about it (#1 target audience)
 * - People that already use react native succesfully and need handy libraries
 * - Profitable companies that don't do so well on the react native part and need a hand to get their codebase under control
 *
 * How
 * - organic search leading to blogs that I cross posted on my site, on medium, and all kinds of other channels
 * - and cold mail / calling
 *
 *
 * How to sell it?
 *
 * - make clear why it's a great choice
 * - make clear how much it would normally cost to get started
 * - make clear how much of a favor I'm doing them (how much cheaper it is)
 * - for exact pricing, get in touch
 *
 *
 *
 * Products
 * - make all GitHub pages look professional
 * - post blog about all libraries
 * - make a video for every library
 * - make product type definition
 * - make product overview section (picture + one sentence pitch)
 * - make product details section landing page with pricing open source + premium model https://www.mysql.com/products/
 * - add integration with mollie and ask rediculous amounts (monthly or one-time-fee)
 *
 *  */

import { Page, GlobalSettings, Settings } from "./_types";
import defaultPages from "./_defaults";

const home: Page = {
  title: "Home",
  route: "",
  showInMenu: true,
  showInFooter: false,
  internalPage: true,
  sections: [
    {
      type: "ImageTitle",
      includeDownload: false,
      siteTitle: "LECKR - High quality apps in no-time",
      title: "High quality apps in no-time",
      image1: require("./assets_leckr/cool.jpg"),
      text:
        "With LECKR you can create native **iOS, Android, and Web** apps incredibly fast using **JavaScript**, Expo and React Native."
      // text:
      //   "With our *free boilerplates and libraries**, Expo, and React Native (Web), you can build, deploy, and quickly iterate **native iOS, native Android and Web apps** from the same JavaScript codebase."
    }, //our **free boilerplates and libraries**,

    {
      type: "BlurpsComingSoon", //Just Blurps, but not now yet

      optionsArray: [
        {
          blurps: [
            /**
             * Ethos is the most important, so make sure I get these blurps!
             *
             * Just ask all of them, and see what I can get. Preferably show them the website over a beer and ask them personally
             *
             * - Dyme
             * - Target Holding
             * - MYPO
             * - Fabian Aussems
             * - Buzzera
             *
             * Even less technical blurps are awesome. The endgoal is gaining trust, not technical capability. For that, they can see the code... For example, Marnix would be epic. Steven Van Bruggen... Arnoud... A bit of Social proof is all I need. Obviously it makes a bit less sense, and it may seem a bit weird, but if they talk about my driven nature and commitment to coding and this whole thing... That will be much better than nothing at all.
             **/

            {
              image: require("./assets_dunbar/catherine.png"),
              title: "Catherine Price",
              subtitle: 'writer of "How to break up with your Phone"',
              text: "Love it! I really don't like my phone so people will help it"
            }
          ]
        }
      ]
    },

    {
      type: "Markdown",
      //This SDK comprises libraries, documentation, code samples, guides and boilerplates for React Native (Web), Expo, React and Node JS.
      // The best part? Most of it is **Free** and **Open Source**.

      markdown: `
I get it... 

Your company is thinking about **making an app**, but it's **hard** and **expensive**. You're looking for **a better way**. You need the **benefits** without the drawbacks. 

You're in the right place.

LECKR can help you **kickstart your new app** with an **excellent codebase**, and guide you through the wild west of app development.

Oh, and by the way.. 

LECKR ❤️ extreme sports, adventure, and strives to make [Humane](https://humanetech.com) apps. I hope you do to.
`
    },

    {
      type: "Download"
    },

    {
      type: "ImageCover",
      title: "",
      description: "",
      image: require("./assets_leckr/kite.jpg")
    }
  ]
};

const roadmap: Page = {
  title: "Roadmap",
  route: "roadmap",
  showInMenu: true,
  showInFooter: false,
  internalPage: true,
  sections: [
    {
      type: "Timeline",
      timeline: [
        {
          title: "2005 - 2016",
          markdown: `✅ Started the company. 

✅ Did freelance work and a text-based mafia game like [Omerta](https://barafranca.com) for 11 years.`
        },

        {
          title: "2016 - 2018",
          markdown: `✅ Traveled to Nepal, South East Asia, Tarifa and Bali ([More info](/trips)) while coding and (kite)surfing or hiking
                
✅ Improved lifestyle and workflow

✅ Learned how to make apps`
        },
        {
          title: "2019",
          markdown: `
✅ Make website

✅ Setup mail form with interests

✅ Start [Dunbar](https://dunbar.site) and [Booki](https://gobooki.co)

✅ Articulate what we do better

❌ Create and release LECKR SDK with documentation

❌ Optimize B2B onboarding funnels

❌ Go to Nepal and Bali


`
        },

        {
          title: "2020-2021",
          markdown: `
❌ Grow LECKR Community

❌ Build a team of ±3 talented people

❌ Eat,code,kite,repeat: 3 months in the winter, from paradise

❌ Improve blueprint of LECKR Utopia
`
        },

        {
          title: "2022 - 2024",
          markdown: `
❌ Build LECKR Utopia

❌ Open source the blue-print

`
        }

        //         {
        //           title: "2025+",
        //           markdown: `
        // ❌ Inspire 1000 villages to start
        // `
        //         }
      ]
    },
    {
      type: "Download"
    }
  ]
};

const hire: Page = {
  title: "Advice",
  route: "advice",
  showInMenu: true,
  showInFooter: true,
  internalPage: true,
  sections: [
    {
      type: "Markdown",
      optionsArray: [
        {
          markdown: `
# Free Advice

Currently, LECKR is just me, Wijnand. I give **free advice** sessions about React Native, Expo and use of Open Source Libraries. Here we can see if LECKR could be a **good fit** for you. 

Also, I'm available for short projects or further consulting.

When we initiate a collaboration, I'm fully commited to your project and its success for the time I work for it. 

My **expertise** and strongest points:

- Productivity & workflow optimization
- Agile & Lean
- Strong opinion of keeping implementation simple and elegant
- Boilerplate reduction through simplicity and open source
- Reduction of technical debt through automated documenation generation
- Startup Strategy, Conceptualization and Validation
- Migration to React Native & Expo

Need more info? 

* [CV (pdf)](https://www.dropbox.com/s/2ev9hmujq9t9hds/CV%20Wijnand%20Karsens%202019.pdf?dl=0) 
* [GitHub](https://github.com/EAT-CODE-KITE-REPEAT/)
* ✉️ [wijnand@leckr.io](mailto:info@leckr.io)
* 📞 [020 - 21 01 820](tel:+31202101820)
* [🗺 Google Maps](https://www.google.com/maps/place/Krammerstraat+33C,+1078+KG+Amsterdam)


        Krammerstraat 33 C
        1078 KG
        Amsterdam, Noord Holland
        The Netherlands


          `
        }
      ]
    },

    {
      type: "Download"
    }
  ]
};

const contact: Page = {
  title: "Contact",
  route: "contact",
  showInMenu: true,
  showInFooter: true,
  internalPage: true,
  sections: [
    {
      type: "Markdown",
      optionsArray: [
        {
          markdown: `
# Contact


✉️ [wijnand@leckr.io](mailto:info@leckr.io)

📞 [020 - 21 01 820](tel:0202101820)

**KVK** 64843769


[🗺 Google Maps](https://www.google.com/maps/place/Krammerstraat+33C,+1078+KG+Amsterdam)


    Krammerstraat 33 C
    1078 KG
    Amsterdam, Noord Holland
    The Netherlands


          `
        }
      ]
    },

    {
      type: "Download"
    }
  ]
};

const trips: Page = {
  title: "Adventure",
  route: "adventure",
  showInMenu: true,
  showInFooter: false,
  internalPage: true,
  sections: [
    {
      type: "Markdown",
      markdown: "# LECKR, where and when?"
    },

    {
      type: "ImageTextFeatures",
      features: [
        {
          image: require("./assets_leckr/nepal.jpg"),
          title: "October 2019 - Nepal",
          text: "It depends.."
        },
        {
          image: require("./assets_leckr/bali.jpg"),
          title: "November 2019 - Bali",
          text: "Surfing, Nice weather, hard work, Villa Parties. Daily"
        }
      ]
    },

    {
      type: "Markdown",
      markdown: `.
      \n\n\n\n
      

      
      
## Where and when did we eat code kite repeat, before?`
    },

    {
      type: "ImageTextFeatures",
      features: [
        {
          image: require("./assets_leckr/nepal.jpg"),
          title: "October & November 2016 - Nepal",
          text: "Hike, Eat, Sleep, Repeat. What an adventure!"
        },
        {
          image: require("./assets_leckr/myanmar.jpg"),
          title: "December 2016 until April 2017 - South East Asia",
          text:
            "Here, the idea for Eat Code Kite Repeat was born. A little kiting in Vietnam was the start"
        },

        {
          image: require("./assets_leckr/tarifa.gif"),
          title: "September 2017 until December 2017 - Tarifa",
          text: "We rented a house in Tarifa. Eat, code, kite, repeat was really born!"
        },

        {
          image: require("./assets_leckr/bali.jpg"),
          title: "January 2018 until April 2018 - Bali",
          text: "Surfing, Coding a lot, villa parties, adventure."
        }
      ]
    },

    {
      type: "Download"
    }
  ]
};
const signup: Page = {
  title: "Sign Up",
  route: "signup",
  showInMenu: false,
  showInFooter: false,
  internalPage: true,
  sections: [
    {
      type: "Markdown",
      optionsArray: [
        {
          markdown: `
You can sign up by filling in your email below:
          `
        }
      ]
    },
    {
      type: "Download"
    }
  ]
};

const code: Page = {
  title: "Code",
  route: "code",
  showInMenu: true,
  showInFooter: true,
  internalPage: true,
  sections: [
    {
      type: "Pricing",
      optionsArray: [
        {
          isIncremental: false,
          titleFontSize: 18,
          buttonTitle: "More info",

          packages: [
            {
              name: "LECKR-Landing",
              price: "€100",
              priceDescription: "One-time fee",
              link: "https://github.com/EAT-CODE-KITE-REPEAT/leckr-landing",
              features: ["Landing page like this within a day"]
            },
            {
              name: "Expo-data-forms",
              price: "€100",
              priceDescription: "One time fee",
              link: "https://github.com/EAT-CODE-KITE-REPEAT/expo-data-forms",
              features: [
                "By seperating content from the data flow and component itself, this library creates forms that can process data and save it to a local or backend storage (REST, Redux Persist, Realm, Apollo GraphQL, or anything)."
              ]
            },

            {
              name: "Expo-elements",
              price: "€100",
              priceDescription: "One time fee",
              link: "https://github.com/EAT-CODE-KITE-REPEAT/expo-elements",
              features: ["Elegant basic UI and API access"]
            },

            {
              name: "Expo-inputs",
              price: "€100",
              priceDescription: "One time fee",
              link: "https://github.com/EAT-CODE-KITE-REPEAT/expo-inputs",
              features: ["Elegant basic UI for form inputs"]
            },

            {
              name: "Expo-local-auth-wrapper",
              price: "€100",
              priceDescription: "One time fee",
              link: "https://github.com/EAT-CODE-KITE-REPEAT/expo-local-auth-wrapper",
              features: ["Local Auth Wrapper"]
            },

            {
              name: "Expo-push-notifications",
              price: "€100",
              priceDescription: "One time fee",
              link: "https://github.com/EAT-CODE-KITE-REPEAT/expo-push-notifications",
              features: ["Push notifications implementation for expo"]
            },

            {
              name: "LECKR-Universal",
              price: "€100",
              priceDescription: "One time fee",
              link: "https://github.com/EAT-CODE-KITE-REPEAT/leckr-universal",
              features: ["All kinds of universal utility functions"]
            },

            {
              name: "Super-Actionsheet",
              price: "€0",
              priceDescription: "One time fee",
              link: "https://github.com/EAT-CODE-KITE-REPEAT/react-native-super-actionsheet",
              features: ["Small Wrapper Around Acitonsheet"]
            },

            {
              name: "Community App",
              nameDescription: "White labeled",
              price: "t.b.d.",
              priceDescription: "t.b.d.",
              link: "https://communify.cc",
              features: ["Any app for your community"]
            },

            {
              name: "Navigation App",
              nameDescription: "White labeled",
              price: "t.b.d.",
              priceDescription: "t.b.d.",
              link: "https://ovfiets.net",
              features: ["Any navigation app"]
            },

            {
              name: "GraphQL Sequelize Define",
              nameDescription: "",
              price: "€100",
              priceDescription: "One time fee",
              link: "https://github.com/EAT-CODE-KITE-REPEAT/graphql-sequelize-define/",
              features: [
                "**The instant backend** This library creates a model for your apps data that will create a scheme definition, queries, and database from one declaration file. This saves thousand lines of code and dozens of mistakes made, because there is just one single source of truth."
              ]
            },

            {
              name: "LECKR SaaSaaS",
              nameDescription: "",
              price: "€100",
              priceDescription: "Price per month",
              link: "https://github.com/EAT-CODE-KITE-REPEAT/",
              features: ["Payment + Virality BaaS for any SaaS"]
            },

            {
              name: "Super-Safe-Area",
              price: "€0",
              priceDescription: "One time fee",
              link: "https://github.com/EAT-CODE-KITE-REPEAT/react-native-super-safe-area",
              features: ["Small Wrapper Around SafeAreaView"]
            }
          ]
        }
      ]
    },

    {
      type: "Download"
    }
  ]
};

const open: Page = {
  title: "Open",
  route: "open",
  showInMenu: false,
  showInFooter: true,
  internalPage: true,
  sections: [
    {
      type: "Markdown",

      markdown: `

In 2019 I decided to track my own KPI's and my startups KPI's, and share them publicly on this page. I will do that on a monthly basis. [Here are the KPI's I defined](https://github.com/EAT-CODE-KITE-REPEAT/communify-open/issues/74)


# Personal KPI's

| 2019       | Work      | Coding<br>For<br>Work | Gross<br>revenue | Networking<br>events<br>attended | Leisure<br>Screentime | Notable accomplishments |
|------------|-----|-----|----------|-------------|-------------|-----------|
| January    | 100h | 44h |  | 1 | 80-200h | Found 2 startups to freelance for |
| February   |  |    |        |   |     | Move to Amsterdam |
| March
| April
| May 
| June
| July
| August
| September
| October
| November
| December


![last 30 days coding activity](https://wakatime.com/share/@Wijnand/8fc47721-9250-41b1-9b41-767dd618c22a.png)

Other personal KPI's I wish to track are exersize, CO2 footprint, and waste footprint. Since I don't know yet how to accurately do this, I don't do this yet. Ideas are welcome.


# Communify General KPI's
| KPI | January | February | March | April | May | June | July | August | September | October | November | December |
|----|----|----|----|----|----|----|----|----|----|----|----|----|
| Coding 
| LOC
| Dependencies
| Native links
| Users
| Communities
| Recurring revenue
| Active Users
| Average user retention
| Messages sent

# Communify Onboarding KPI's
| KPI | January | February | March | April | May | June | July | August | September | October | November | December |
|----|----|----|----|----|----|----|----|----|----|----|----|----|
| Email onboarding attempts
| Email onboarding conversion %
| Call onboarding attempts
| Call onboarding conversion %
| Average users per coworking space<br>2 weeks after sign up
| Website hits/Signups through media coverage
| Website hits/Signups through good SEO 
| Direct app installs
| Ad click cost / Ad sign up cost
| Website hits from CoworkingEvents emails Ad
| Amount of coworking spaces pitched
| Pitch coworking success (1%-100%)
| Amount of coworkers pitched
| coworker pitch install %
| Minimal # of active users in<br> a coworking space using the app before<br> the app conquers the space and<br> the rest installs it: Inflection point #
          
          `
    },
    {
      type: "Download"
    }
  ]
};

const blog: Page = {
  title: "Blog",
  route: "blog",
  showInMenu: true,
  showInFooter: true,
  internalPage: true,
  sections: [
    {
      type: "Blog",

      optionsArray: [
        {
          title: "Further reading",
          ghostLink:
            "https://blog.karsens.com/ghost/api/v2/content/posts/?key=f986ca2d588b087644a1790df8&limit=all&include=tags&filter=tags:leckr,tags:geeky-stuff",
          articles: [
            // {
            //   id: 2,
            //   date: "Aug 7, 2014, 12:51pm",
            //   title: "Dunbar's Number: A Key To Networking",
            //   description:
            //     "Dunbar's number is “a suggested cognitive limit to the number of people with whom one can maintain stable social relationships,”",
            //   link:
            //     "https://www.forbes.com/sites/kenmakovsky/2014/08/07/dunbars-number-and-the-need-for-relationship-management/#38dca12e397b",
            //   figure: require("./assets_dunbar/forbesArticle.jpeg")
            // },
            // {
            //   id: 3,
            //   date: "Aug 7, 2014, 12:51pm",
            //   title: "Dunbar's Number: A Key To Networking",
            //   description:
            //     "Dunbar's number is “a suggested cognitive limit to the number of people with whom one can maintain stable social relationships,”",
            //   link:
            //     "https://www.forbes.com/sites/kenmakovsky/2014/08/07/dunbars-number-and-the-need-for-relationship-management/#38dca12e397b",
            //   figure: require("./assets_dunbar/forbesArticle.jpeg")
            // }
          ]
        }
      ]
    },

    {
      type: "Download"
    }
  ]
};

const emailsuccess: Page = {
  title: "Success",
  route: "emailsuccess",
  showInMenu: false,
  showInFotter: false,
  internalPage: true,
  sections: [
    {
      type: "Markdown",
      optionsArray: [
        {
          markdown: "Thanks for your interest. An email with more info is underway."
        }
      ]
    }
  ]
};

const pages: Page[] = [
  home,
  // code, #todo github integration
  hire,
  blog,
  trips,
  roadmap,
  contact,
  open,
  signup,
  defaultPages.privacy,
  emailsuccess,
  defaultPages.paymentsuccess
];

type MCCategory = {
  group: number,
  value: number,
  label: string
};
const mailChimpCategories: MCCategory[] = [
  {
    group: 6957,
    value: 1,
    label: "Open Source Libraries"
  },

  {
    group: 6957,
    value: 2,
    label: "Free advice"
  },

  {
    group: 6957,
    value: 4,
    label: "Workflow"
  },

  {
    group: 6957,
    value: 8,
    label: "How to get started?"
  },

  {
    group: 6957,
    value: 16,
    label: "Extreme sports and adventure"
  }
];
const globalSettings: GlobalSettings = {
  isNoPhone: true,
  googleAnalyticsId: "UA-115183926-4",
  mailChimpSubscribeUrl:
    "https://travellifemovement.us16.list-manage.com/subscribe/post?u=211c8e286b504f8faf1b92bb2&amp;id=f577ff8d3c",
  mailChimpCategories,

  mailFormTitle: "Get more info",

  colors: {
    defaultText: "#000",
    primary: "#000",
    primaryLighter: "#111",
    primaryDarker: "#222"
  },

  style: {
    fontFamily: {
      title: "Arial Rounded MT Bold",
      text: "Arial"
    }
  },

  apiUrl: null,
  // driftId: "p87nxp8v5kyi",
  appName: "LECKR",
  siteTitle: "LECKR - Let's Eat Code Kite Repeat",
  copyrightYear: "2019",
  companyName: "LECKR"
};

const assets = {
  favicon: require("./assets_leckr/favicon.ico"),
  logo: require("./assets_leckr/LECKRLogo.png")
};

const settings: Settings = {
  pages,
  assets,
  ...globalSettings
};

export default settings;
