import React from "react";
import Icon from "../dui/Icon";
import * as assets from "./assets_dunbar/index";

import { Page, GlobalSettings, Settings } from "./_types";
import defaultPages from "./_defaults";

const home: Page = {
  title: "Home",
  route: "",
  showInMenu: true,
  showInFooter: false,
  sections: [
    {
      type: "ImageTitle",
      optionsArray: [
        {
          ref: "default",
          // entrepreneur audience
          siteTitle: "Dunbar - Organize, Analyse, Improve",
          title: "Organize, Analyse, Improve",
          text: ""
        },

        {
          ref: "friends",
          // entrepreneur audience
          siteTitle: "Dunbar - CRM for your Friends",
          title: "CRM for your Friends",
          text:
            "According to Robin Dunbar, an extraordinary anthropologist and evolutionary psychologist, the limit of active stable relationships is [150](https://www.forbes.com/sites/kenmakovsky/2014/08/07/dunbars-number-and-the-need-for-relationship-management/#38dca12e397b). With Dunbar, we help you to organize, analyse and improve your personal and professional relationships."
        },

        {
          ref: "broad",
          // broad audience
          siteTitle: "Dunbar - Put meaning into your relationships",
          title: "Put meaning into your relationships",
          text:
            "Dunbars Limit (150) is the limit of maintainable stable relationships. Most people have more, but very sparsified relationships. Spending less time on each relationship makes them less valuable. Dunbar helps you get less but more worthwhile connections."
        },

        {
          ref: "lonely",
          siteTitle: "Dunbar - Reconnect. Engage. Bond.",
          title: "Reconnect. Engage. Bond.",
          text:
            "I care about my friends, but FB, other Social Media, and contact apps make it hard to really maintain my relationships. I want to decide who I care about, and not let the algorithms decide who I get information about (e.g. on the FB Timeline). I want to do more meaningful activities with my friends, rather than using flat communication platforms like WhatsApp, Facebook and SnapChat. I want fewer, but stronger friendships."
        }
      ]
    },

    {
      type: "Markdown",
      optionsArray: [
        {
          ref: "default",
          markdown: `# What is Dunbar?

According to anthropologist Robin Dunbar, the limit of active stable relationships is [150](https://www.forbes.com/sites/kenmakovsky/2014/08/07/dunbars-number-and-the-need-for-relationship-management/#38dca12e397b). 
          
With Dunbar, we help you to organize, analyse and improve your personal and professional relationships.

-----------------


`
        }
      ]
    },

    {
      type: "Blurps",

      optionsArray: [
        {
          blurps: [
            {
              image: require("./assets_dunbar/catherine.png"),
              title: "Catherine Price",
              subtitle: "writer of \"How to break up with your Phone\"",
              text: "Love it! I really don't like my phone so people will help it"
            },

            {
              image: require("./assets_dunbar/catherine.png"),
              title: "Catherine Price",
              subtitle: "writer of \"How to break up with your Phone\"",
              text: "Love it! I really don't like my phone so people will help it"
            },

            {
              image: require("./assets_dunbar/catherine.png"),
              title: "Catherine Price",
              subtitle: "writer of \"How to break up with your Phone\"",
              text: "Love it! I really don't like my phone so people will help it"
            },

            {
              image: require("./assets_dunbar/catherine.png"),
              title: "Catherine Price",
              subtitle: "writer of \"How to break up with your Phone\"",
              text: "Love it! I really don't like my phone so people will help it"
            },

            {
              image: require("./assets_dunbar/catherine.png"),
              title: "Catherine Price",
              subtitle: "writer of \"How to break up with your Phone\"",
              text: "Love it! I really don't like my phone so people will help it"
            },

            {
              image: require("./assets_dunbar/catherine.png"),
              title: "Catherine Price",
              subtitle: "writer of \"How to break up with your Phone\"",
              text: "Love it! I really don't like my phone so people will help it"
            }
          ]
        }
      ]
    },
    {
      type: "Features",

      optionsArray: [
        {
          title: "Why Dunbar?",
          subtitle: "Because current applications mostly bring..",
          features: [
            {
              title: "..Chaos",
              description:
                "Your contacts are scattered across all kinds of (social media) channels",
              icon: <Icon family="simple" name="screen-smartphone" />
            },
            {
              title: "..Addiction",
              description: "Current social media business models are optimized for screen-time.",
              icon: <Icon family="simple" name="present" />
            },
            {
              title: "..Sparse relationships",
              description:
                "The internet has grown the amount of people we interact with, but made every connection a lower quality one because we spend less time on every connection.",
              icon: <Icon family="simple" name="exclamation" />
            },
            {
              title: "..Disconnectedness",
              description:
                "Internet connects the unconnected, but disconnects the connected. Our app tries to restore this by stimulating real interactions first",
              icon: <Icon family="fa" name="bicycle" />
            }
          ]
        }
      ]
    }
  ]
};

const about: Page = {
  title: "About",
  route: "about",
  showInMenu: true,
  showInFooter: false,
  internalPage: true,
  sections: [
    {
      type: "Markdown",
      optionsArray: [
        {
          markdown: `
# About me: Life story

Young nerd: Mafia game

Regret, Depressive

Bachelors, Depression

2017 travel: Different

Communify: Pitfalls

Now Dunbar: A better approach

# About me: Amsterdam Professional Story

Move to Amsterdam

Challenge to make good friends

Professionally, forgetting things

Cal Newport, Robin Dunbar, Tristan Harris

Business coach expensive

Goal for professional use

# Vision, mission, manifest

Our mission is to create higher quality and more meaningful interactions between people to make them more succesful. To reverse downgrading of communication, social systems and relationships and make us brilliant, wise, self-reliant, and succesful.

Choose your friends wisely and bring them closer together to become more succesful

Bring back social networks to they way they should be. (Make offline social networks great again).

Internet connects the unconnected, but disconnects the connected. Our app tries to approach The Village Effect in cities.
`
        }
      ]
    },

    {
      type: "Blog",

      optionsArray: [
        {
          title: "Further reading",
          articles: [
            {
              id: 1,
              date: "Aug 7, 2014, 12:51pm",
              title: "Dunbar's Number: A Key To Networking",
              description:
                "Dunbar's number is “a suggested cognitive limit to the number of people with whom one can maintain stable social relationships,”",

              link:
                "https://www.forbes.com/sites/kenmakovsky/2014/08/07/dunbars-number-and-the-need-for-relationship-management/#38dca12e397b",
              figure: require("./assets_dunbar/forbesArticle.jpeg")
            },

            {
              id: 2,
              date: "Aug 7, 2014, 12:51pm",
              title: "Dunbar's Number: A Key To Networking",
              description:
                "Dunbar's number is “a suggested cognitive limit to the number of people with whom one can maintain stable social relationships,”",
              link:
                "https://www.forbes.com/sites/kenmakovsky/2014/08/07/dunbars-number-and-the-need-for-relationship-management/#38dca12e397b",
              figure: require("./assets_dunbar/forbesArticle.jpeg")
            },

            {
              id: 3,
              date: "Aug 7, 2014, 12:51pm",
              title: "Dunbar's Number: A Key To Networking",
              description:
                "Dunbar's number is “a suggested cognitive limit to the number of people with whom one can maintain stable social relationships,”",
              link:
                "https://www.forbes.com/sites/kenmakovsky/2014/08/07/dunbars-number-and-the-need-for-relationship-management/#38dca12e397b",
              figure: require("./assets_dunbar/forbesArticle.jpeg")
            }
          ]
        }
      ]
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
      optionsArray: [
        {
          timeline: [
            {
              title: "March 2019",
              markdown: `
- [x]  Create prototype
- [x]  Test myself
- [X]  Pre-Validate
              `
            },

            {
              title: "April 2019",
              markdown: `
- [x]  Pre-validate more
- [x]  Conceptualization of features
- [x]  Build MVP
                  `
            },

            {
              title: "May 2019",
              markdown: `
- [ ]  Improve website
- [ ]  Add payments infrastructure
- [ ]  Fix bugs
- [ ]  Add critical features
- [ ]  Release new version
                  `
            },

            {
              title: "June 2019",
              markdown: `
- [ ]  Invite ±25 testers
- [ ]  Test with ±10 DAU
- [ ]  Provide better onboarding
- [ ]  Make it stable and simple
- [ ]  Iterate over design
- [ ]  Iterate over copy
- [ ]  Iterate over website
- [ ]  Iterate over app feedback
- [ ]  Prepare app for big launch
                  `
            },

            {
              title: "July 2019",
              markdown: `
- [ ]  Connect with business coaches, find business
- [ ]  Add MVP's for Insights, Challenge, and Coaches
- [ ]  Write the story and Press Kit to help press to write about me
- [ ]  Connect with T.N.W.
- [ ]  Plan launch
    
              `
            },

            {
              title: "Rest of 2019",
              markdown: `
- [ ]  Launch
- [ ]  Fix problems that arise
- [ ]  Invest 100% in max growth, not in features
    `
            },

            {
              title: "2020+",
              markdown: `
- Optimize Dunbar Challenge
- Optimize Insights
- Optimize Network Aggregation and UX
- Work together with coaches and therapists to create a premium semi-automated (self)coaching platform.

              `
            }
          ]
        }
      ]
    }
  ]
};

const pricing: Page = {
  title: "Pricing",
  route: "pricing",
  showInMenu: true,
  showInFooter: false,
  internalPage: true,
  sections: [
    {
      type: "Pricing",
      optionsArray: [
        {
          packages: [
            {
              name: "Free",
              description: "5 contacts",
              price: "Free"
            },
            {
              name: "Club",
              description: "42 contacts",
              price: "One time €42,-",
              link: "https://useplink.com/payment/RGmpgKGxnAthbK8w9kzt" //"https://rcur.nl/pay/G4vXjMGgkb",
            },
            {
              name: "VIP",
              description: "150 contacts",
              price: "€10,-/m",
              link: "https://rcur.nl/pay/80L4EYYgpq"
            }
          ]
        }
      ]
    }
  ]
};

const pages: Page[] = [
  home,
  about,
  pricing,
  roadmap,
  defaultPages.privacy,
  defaultPages.emailsuccess,
  defaultPages.paymentsuccess
];

const globalSettings: GlobalSettings = {
  mailChimpSubscribeUrl:
    "https://travellifemovement.us16.list-manage.com/subscribe/post?u=211c8e286b504f8faf1b92bb2&amp;id=74a7bddfd2",

  mailFormTitle: "Get early access",
  emailSuccessText:
    "Thanks for your interest. Your email is underway, which contains information about how to get the app.",

  colors: {
    primary: "#0054b8",
    primaryLighter: "#0064dc",
    primaryDarker: "#00306a"
  },

  style: {
    fontFamily: {
      title: "Times",
      text: "Comic Sans MS"
    }
  },

  apiUrl: null,
  driftId: "p87nxp8v5kyi",
  appName: "Dunbar",
  copyrightYear: "2019",
  companyName: "Dunbar"
};

const settings: Settings = {
  pages,
  assets,
  ...globalSettings
};

export default settings;
