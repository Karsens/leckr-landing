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
        // Organize, Analyse, Improve
        {
          reference: "default",
          // entrepreneur audience
          siteTitle: "Dunbar - Put meaning into your relationships",
          title: "Put meaning into your relationships",
          text: ""
        },

        {
          reference: "friends",
          // entrepreneur audience
          siteTitle: "Dunbar - CRM for your Friends",
          title: "CRM for your Friends",
          text:
            "According to Robin Dunbar, an extraordinary anthropologist and evolutionary psychologist, the limit of active stable relationships is [150](https://www.forbes.com/sites/kenmakovsky/2014/08/07/dunbars-number-and-the-need-for-relationship-management/#38dca12e397b). With Dunbar, we help you to organize, analyse and improve your personal and professional relationships."
        },

        {
          reference: "broad",
          // broad audience
          siteTitle: "Dunbar - Put meaning into your relationships",
          title: "Put meaning into your relationships",
          text:
            "Dunbars Limit (150) is the limit of maintainable stable relationships. Most people have more, but very sparsified relationships. Spending less time on each relationship makes them less valuable. Dunbar helps you get less but more worthwhile connections."
        },

        {
          reference: "lonely",
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
          reference: "default",
          markdown: `# What is Dunbar?

According to anthropologist Robin Dunbar, the limit of active stable relationships is [150](https://www.forbes.com/sites/kenmakovsky/2014/08/07/dunbars-number-and-the-need-for-relationship-management/#38dca12e397b).

With Dunbar, we help you to organize, analyse and improve your personal and professional relationships.

    `
        }
      ]
    },

    {
      type: "FeaturesBigComingSoon",
      optionsArray: [
        {
          features: [
            {
              image: null,
              title: "Step 1) Download and sync your contacts",
              description: "Your data is save, it stays on your phone"
            },
            {
              image: null,
              title: "Step 2) Choose who is most important to you"
            },

            {
              image: null,
              title: "Never forget to keep in touch"
            },
            {
              image: null,
              title: "Organize and plan meetings"
            },
            {
              image: null,
              title: "Get relational insights"
            },
            {
              image: null,
              title: "Set goals and improve"
            },
            {
              image: null,
              title: "Hire a coach and get advice"
            }
          ]
        }
      ]
    },

    {
      type: "BlurpsComingSoon", //Just Blurps, but not now yet

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

          subtitle: "Because current applications mostly bring...",
          image1: require("./assets_dunbar/screen2.png"),
          features: [
            {
              title: "...Chaos",
              description:
                "Your contacts are scattered across all kinds of (social media) channels",
              icon: <Icon family="simple" name="screen-smartphone" />
            },
            {
              title: "...Addiction",
              description: "Current social media business models are optimized for screen-time.",
              icon: <Icon family="simple" name="exclamation" />
            },
            {
              title: "...Sparse relationships",
              description:
                "The internet has grown the amount of people we interact with, but made every connection a lower quality one because we spend less time on every connection.",
              icon: <Icon family="simple" name="exclamation" />
            },
            {
              title: "...Disconnectedness",
              description:
                "Internet connects the unconnected, but disconnects the connected. Our app tries to restore this by stimulating real interactions first",
              icon: <Icon family="simple" name="screen-smartphone" />
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
          /*

          # About me: Life story

Young nerd: Mafia game

Regret, Depressive

Bachelors AI

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
*/
          markdown: `

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
            }

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

**Visit Us**

    Krammerstraat 33 C
    1078 KG
    Amsterdam, Noord Holland
    The Netherlands

**Email Us**
[info@dunbar.site](mailto:info@dunbar.site)


          `
        }
      ]
    }
  ]
};

const developers: Page = {
  title: "Developers",
  route: "developers",
  showInMenu: true,
  showInFooter: true,
  sections: [
    {
      type: "Markdown",
      optionsArray: [
        {
          markdown: `
.
# Let's Eat Code Kite Repeat

Does this get you excited? [Have a look here](https://leckr.io)

# I'm building a Universal People API

Does this get you excited? [Get in touch](/contact)

# I do React Native

Does this get you excited? [Get in touch](/contact) or [Have a look here](https://leckr.io)
        `
        }
      ]
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

const pricing: Page = {
  title: "Pricing",
  route: "pricing",
  showInMenu: true,
  showInFooter: false,
  internalPage: true,
  sections: [
    {
      type: "Markdown",
      optionsArray: [
        {
          markdown: `
**NB:** This is going to be the pricing!

The app didn't launch yet, but it's already possible to buy early access to extra features. The launch is planned August 2019.
`
        }
      ]
    },
    {
      type: "Pricing",
      optionsArray: [
        {
          packages: [
            {
              name: "Free",
              price: "€0",
              // description: "5 contacts",
              link: "/signup",
              buttonTitle: "Sign up",
              features: [
                "Inner circle",
                "Up to 3 Clubs",
                "Plan Meetings",
                "Call",
                "SMS",
                "Email",
                "WhatsApp"
              ],
              notFeatures: ["Second circle", "Outer circle", "Insights", "Coaching"]
            },
            {
              name: "Club",
              price: "€99",
              color: "#0054b8",
              priceDescription: "One time fee",
              link: "https://useplink.com/payment/RGmpgKGxnAthbK8w9kzt", //"https://rcur.nl/pay/G4vXjMGgkb",
              features: [
                "Second circle",
                "Up to 10 Clubs",
                "Sync across devices (Android + iOS)",
                "Basic Insights"
              ],
              notFeatures: ["Outer circle", "Coaching"]

              // description: "42 contacts"
            },
            {
              name: "Pro",
              price: "€99",
              priceDescription: "Price per month",
              link: "https://rcur.nl/pay/80L4EYYgpq",
              //description: "150 contacts"
              features: [
                "Outer circle",
                "Unlimited Clubs",
                "Extensive insights",
                "Print your contacts in multiple formats (Made for Booki)",
                "Organize events quickly",
                "1:1 Monthly Advice",
                "Optional: Early BETA Access to new, cool features"
              ]
            },
            {
              name: "VIP",
              nameDescription: "(Coming Soon)",
              price: "€499",
              priceDescription: "Price per month",
              link: "https://rcur.nl/pay/80L4EYYgpq",
              features: [
                "A team of professionals",
                "Artificial Intelligence",
                "Data Science",
                "1:1 Daily Advice"
              ]
            }
          ]
        }
      ]
    },

    {
      type: "Markdown",
      optionsArray: [
        {
          markdown: `
**Thinking about Pro or VIP? This might make it more interesting...** 

* You can invite your 3 best friends for 50% cheaper. If you did this, yours will also become 50% cheaper, forever. A year later, you can invite up to 12 friends for this. If you did this, this will make yours free. 

* 30 Days Not Good Money Back.

* Still not convinced? [Get in touch](/contact) and ask me anything

**Other possibilities**

* **Dunbar for Business** We also sell Business Packages for Club, Pro and VIP at 50% Off! [Get in touch](/contact)

* Do you want all your **event or conference** participants inside the Dunbar app? We've got you covered! [Get in touch](/contact)

* Even a **white-labeled** Contact App is possible, we're still young! [Get in touch](/contact)

* **Dunbar For Coworking** makes it possible for all coworkers to find eachother and connect! [Get in touch](/contact)

* **Do you have ADHD?** Try our [namebuddies](https://www.getdunbar.com/)
`
        }
      ]
    }
  ]
};

const pages: Page[] = [
  home,
  about,
  roadmap,
  developers,
  pricing,
  contact,
  signup,
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
  siteTitle: "Dunbar - Put meaning into your relationships",
  copyrightYear: "2019",
  companyName: "Dunbar"
};

const settings: Settings = {
  pages,
  assets,
  ...globalSettings
};

export default settings;
