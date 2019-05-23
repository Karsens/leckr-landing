/*
Voor broad audience is het te inprersonal.
Je wil juist mensen zien. maar voor entrepreneurial audience is het wel ok
*/

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
  internalPage: true,
  sections: [
    {
      type: "ImageTitle",
      optionsArray: [
        //Organize. Analyse. Improve. --> Probably in a later stage, when analyse and improve are actually implemented.
        {
          reference: "default",
          // entrepreneur audience
          image1: require("./assets_dunbar/screen1.png"),
          siteTitle: "Dunbar - CRM for your Friends",
          title: "CRM for your Friends"
          // text:
          //   "According to Robin Dunbar, an extraordinary anthropologist and evolutionary psychologist, the limit of active stable relationships is [150](https://www.forbes.com/sites/kenmakovsky/2014/08/07/dunbars-number-and-the-need-for-relationship-management/#38dca12e397b). With Dunbar, we help you to organize, analyse and improve your personal and professional relationships."
        },

        {
          reference: "broad",
          image1: require("./assets_dunbar/screen1.png"),

          // broad audience
          siteTitle: "Dunbar - Put meaning into your relationships",
          title: "Put meaning into your relationships",
          text:
            "Dunbars Limit (150) is the limit of maintainable stable relationships. Most people have more, but very sparsified relationships. Spending less time on each relationship makes them less valuable. Dunbar helps you get less but more worthwhile connections."
        },

        {
          image1: require("./assets_dunbar/screen1.png"),
          reference: "lonely",
          siteTitle: "Dunbar - Reconnect. Engage. Bond.",
          title: "Reconnect. Engage. Bond.",
          text:
            "I care about my friends, but FB, other Social Media, and contact apps make it hard to really maintain my relationships. I want to decide who I care about, and not let the algorithms decide who I get information about (e.g. on the FB Timeline). I want to do more meaningful activities with my friends, rather than using flat communication platforms like WhatsApp, Facebook and SnapChat. I want fewer, but stronger friendships."
        }
      ]
    },

    {
      type: "ImageIconsFeatures",

      optionsArray: [
        {
          title: "The problem",

          subtitle: "",
          noPhone: true,
          image1: require("./assets_dunbar/mobileaddiction.png"),
          features: [
            {
              title: "Chaos",
              description: "Your contacts are scattered across all kinds of (social media) channels"
              // icon: <Icon family="simple" name="screen-smartphone" />
            },
            {
              title: "Privacy is gone",
              description:
                "Your data is sold and used to maximize profitability of you and your friends"
              // icon: <Icon family="simple" name="exclamation" />
            },
            // {
            //   title: "Addiction",
            //   description:
            //     "Current social media business models are optimized for screen-time, which leads to addiction.",
            //   icon: <Icon family="simple" name="exclamation" />
            // },
            {
              title: "Sparse relationships",
              description:
                "The internet has grown the amount of people we interact with, but made every connection a lower quality one because we spend less time on every connection."
              // icon: <Icon family="simple" name="exclamation" />
            },
            {
              title: "Disconnectedness",
              description:
                "Internet connects the unconnected, but disconnects the connected. Average communication quality has become lower since the internet and text messaging/email has become the norm."
              // icon: <Icon family="simple" name="screen-smartphone" />
            }
          ]
        }
      ]
    },

    {
      type: "ImageIconsFeatures",

      optionsArray: [
        {
          title: "The solution",

          subtitle: "",
          noPhone: true,
          image1: require("./assets_dunbar/happypeople.jpg"),
          features: [
            {
              title: "A Clear Overview",
              description: "Access all your friends and connections from one app."
              // icon: <Icon family="simple" name="screen-smartphone" />
            },
            {
              title: "Privacy",
              description:
                "Your data is completely yours. We don't sell it. It doesn't even leave your phone!"
              // icon: <Icon family="simple" name="exclamation" />
            },
            // {
            //   title: "Stop human downgrading",
            //   description:
            //     "Dunbar has a freemium business model - our goal is to make you a better person.",
            //   icon: <Icon family="simple" name="exclamation" />
            // },
            {
              title: "Choose for Meaning",
              description:
                "According to anthropologist Robin Dunbar, the limit of active stable relationships is 150. If you have more, this app helps you to get less connections, but more meaningful ones."
              // icon: <Icon family="simple" name="screen-smartphone" />
            },

            {
              title: "Real Connections",
              description:
                "This app tends to get you off your phone and interact more in real life with the people that matter most to you. In this app, meeting up has priority over text-messages."
              // icon: <Icon family="simple" name="screen-smartphone" />
            }
          ]
        }
      ]
    },

    {
      type: "ImageIconsFeatures",
      optionsArray: [
        {
          title: "How Dunbar works",

          subtitle: "",
          noPhone: false,
          image1: require("./assets_dunbar/screen1.png"),

          features: [
            {
              title: "Sync your contacts",
              description:
                "Dunbar syncs with your iCloud or Google Contacts. Your data is save, it stays on your phone(s), we don't see it. "
            },
            {
              title: "Choose who is most important to you",
              description: "You can choose your inner circle: your most important relations."
            },

            {
              title: "Never forget to keep in touch",
              description:
                "You can easily keep notes. If you didn't connect for a while, Dunbar reminds you."
            },
            {
              title: "Organize and plan meetings",
              description: "Smoothly select and invite people to meet up."
            }
          ]
        }
      ]
    },

    {
      type: "Blurps", //Just Blurps, but not now yet

      optionsArray: [
        {
          blurps: [
            {
              image: require("./assets_dunbar/wijnand.jpg"),
              title: "Wijnand Karsens",
              subtitle: "Creator of Dunbar",
              text:
                "\"Through all the noise of nowadays, Dunbar helps me not to forget about the people important to me.\""
            }
          ]
        }
      ]
    },

    {
      type: "ImageTextFeaturesComingSoon",
      optionsArray: [
        {
          features: [
            {
              image: require("./assets_dunbar/screen2.png"),
              title: "A test tiel 1",
              text: "test text. you know this feature, its so cool brue"
            },
            {
              image: require("./assets_dunbar/screen2.png"),
              title: "A test tiel 2",
              text: "test text. you know this feature, its so cool brue"
            },
            {
              image: require("./assets_dunbar/screen2.png"),
              title: "A test tiel 3",
              text: "test text. you know this feature, its so cool brue"
            },
            {
              image: require("./assets_dunbar/screen2.png"),
              title: "A test tiel 4",
              text: "test text. you know this feature, its so cool brue"
            },
            {
              image: require("./assets_dunbar/screen2.png"),
              title: "A test tiel 5",
              text: "test text. you know this feature, its so cool brue"
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

const missionMarkdown = {
  type: "Markdown",
  linkTarget: "",

  markdown: `

# Mission

The mission of Dunbar is to create higher quality and more meaningful interactions between people to make them more brilliant, wise, self-reliant, and succesful. To reverse [human downgrading](https://www.wired.com/story/tristan-harris-tech-is-downgrading-humans-time-to-fight-back/) of communication, social systems and relationships.
`
};

const story: Page = {
  title: "Story",
  route: "story",
  showInMenu: false,
  showInFooter: false,
  internalPage: true,
  sections: [
    {
      type: "Markdown",
      linkTarget: "",
      markdown: `

# My Story

When I was eleven years old, I learned how to make websites. When I was 12 I created a mafia game (More specifically, a text-based massive multiplayer online role playing game. There are still some examples out there, like [Omerta](https://barafranca.com/). It was a very popular type of game at the time). Creating this game, and playing other games myself, took most of my free time. I was hooked. Addicted. Hard to separate from my computer. It was an amazing experience to create and maintain a mafia game for about 500 active users for over 10 years, but it was also very stressfull at times, and the ethic side doubtful. One the one hand, I had created a wonderful playground for young kids to compete, learn and socialize online. At first, this made me very happy. But then I discovered the dark side. Some kids were burning their parents money and others were playing over 8 hours a day on average. This made me very unhappy, and I was even depressed for a while. I quit a few years later.

Twelve years after I learned how to make websites, after finishing my bachelors in Artificial Intelligence, I traveled the world for 6 months. Days went without screens.. It made me less of a nerd, way more social, and also incredibly happy. What did I really want? After traveling, I decided I wanted to make an app that bring people together. Away from their screens. Because this had made ME so much happier too.

For about six months, I burned through all my money while working full time on my first attempt: [Communify](https://communify.cc). In hindsight, many things went wrong. It was over developed, complex and had no good business model. What was even worse, is that it took away some of the business of the clients I was hoping to sell it to: the Coworking Space. The Coworkers loved the idea, but the coworking space hated it. Too bad. I had failed. I got depressed again. 

About 10 months after failing and one regular office job later, I decided to move to Amsterdam, learn more about startups, and try again. I love the vibe in the startup scene. I learned a lot really quickly. Even had two startup jobs at the same time. Read almost a dozen of books about startups. Also, I've read [Deep Work](http://www.calnewport.com/books/deep-work/), [Digital Minimalism](http://www.calnewport.com/books/digital-minimalism/) and became very much inspired by [Humane Tech](https://humanetech.com/). Also, I read a lot about relationships ([Robin Dunbar](https://www.amazon.com/Many-Friends-Does-Person-Need/dp/0674057163), [Catherine Price](https://phonebreakup.com/), [Susan Pinker](https://www.susanpinker.com/the-village-effect/)). These books have all inspired me so much, I came up with the next attempt...

This time I came up with Dunbar. A completely different approach for the same goal: bringing people together. When entering a new environment, it can be a challenge to make friends, and certainly the right ones, and meaningful ones. Also, I noticed that I had made hundreds of 'friends' in my life, but had very few active ones. Most of my friendships were very low-level. 

Professionally, it was hard to remember all professional connections I made in a short time. It all become a lot, really quickly. Email. Slack Channels. Whatsapp. LinkedIn. My professional contacts are everywhere, except where I really want them: On events, so we can actually talk IRL. Consequently, I made dozens of new connections in a couple of months but it didn't have a big impact because they were all very low-level connections. The ones I wanted to keep in touch with, got burried under hunreds of other connections on LinkedIn, or below hundreds of e-mails. Why is this so hard!?

In March of this year I started working on Dunbar. It's my best attempt on solving all these problems. 
`
    },

    missionMarkdown
  ]
};

const about: Page = {
  title: "About",
  route: "about",
  showInMenu: true,
  showInFooter: false,
  internalPage: true,
  sections: [
    missionMarkdown,

    {
      type: "Markdown",
      linkTarget: "",
      markdown: "[Click here for a more personal backstory](/story)"
    },

    {
      type: "Blog",

      optionsArray: [
        {
          title: "Further reading",
          ghostLink:
            "https://blog.karsens.com/ghost/api/v2/content/posts/?key=f986ca2d588b087644a1790df8&limit=all&filter=tags:dunbar",
          articles: [
            // {
            //   id: 1,
            //   date: "Aug 7, 2014, 12:51pm",
            //   title: "Dunbar's Number: A Key To Networking",
            //   description:
            //     "Dunbar's number is “a suggested cognitive limit to the number of people with whom one can maintain stable social relationships,”",
            //   link:
            //     "https://www.forbes.com/sites/kenmakovsky/2014/08/07/dunbars-number-and-the-need-for-relationship-management/#38dca12e397b",
            //   figure: require("./assets_dunbar/forbesArticle.jpeg")
            // },

            // {
            //   id: 2,
            //   date: "Aug 7, 2014, 12:51pm",
            //   title: "Offline Social Networks - Bridging the gap",
            //   description: "",
            //   link:
            //     "https://www.slideshare.net/padday/bridging-the-gap-between-our-online-and-offline-social-network/15-Online_OfineThe_problem_is_that",
            //   figure: require("./assets_dunbar/offlineArticle.png")
            // },

            {
              id: 3,
              date: "Aug 7, 2014, 12:51pm",
              title: "How Facebook has flattened communication",
              description: "",
              link:
                "https://medium.com/s/story/how-facebook-has-flattened-human-communication-c1525a15e9aa",
              figure: require("./assets_dunbar/flattenArticle.png")
            },

            {
              id: 4,
              date: "Aug 7, 2014, 12:51pm",
              title: "6 Ways Social Media Affects Our Health",
              description: "",
              link:
                "https://www.forbes.com/sites/alicegwalton/2017/06/30/a-run-down-of-social-medias-effects-on-our-mental-health/",
              figure: require("./assets_dunbar/healthArticle.png")
            }
            /*

* [Please Put Down The Flat-Media (Medium)](https://medium.com/@jstreich13/please-put-down-the-flat-media-e08085263afb)
* [What do social media breaks accomplish?](https://link.medium.com/5P6OkSc3pV)
* [Smartphone Stress](https://www.bbc.com/news/business-28686235)
* [This is what your smartphone is doing to your brain - it isn't good](https://www.businessinsider.nl/what-your-smartphone-is-doing-to-your-brain-and-it-isnt-good-2018-3/?international=true&r=US)
* http://goodmedicine.org.uk/node/1209
* https://www.sketchplanations.com/post/178356259078/dunbars-number-150-the-evolutionary
* https://www.slideshare.net/EXCCELessex/robin-dunbar-has-the-internet-changed-our-social-world
* https://fatpappy4ls.blog/2018/01/01/thinking-of-adding-things-in-2018-add-depth-to-existing-or-new-relationships/
* https://www.slideshare.net/frankfal/the-art-science-of-b?next_slideshow=1


            */
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
      type: "Markdown",
      linkTarget: "",
      markdown: `# Roadmap
      
This is the plan. For more history, go to [about](/about)`
    },
    {
      type: "Timeline",
      optionsArray: [
        {
          timeline: [
            {
              title: "March 2019",
              markdown: `
 ✅ Create prototype

 ✅ Test myself

 ✅ Pre-Validate
              `
            },

            {
              title: "April 2019",
              markdown: `
✅ Pre-validate more

✅ Conceptualization of features

✅ Work on MVP
                  `
            },

            {
              title: "May 2019",
              markdown: `
✅ Work on MVP

✅ Iterate on feedback

✅ Improve Website

❌ Fix bugs

❌ Add critical features

❌ Provide better onboarding

❌ Release new version

❌ Invite ±25 testers

`
            },

            {
              title: "June 2019",
              markdown: `

❌ Test with ±10 DAU

❌ Create Payments Infrastructure

❌ Add MVP's for Insights and Challenge

❌ Fix problems

❌ Make it stable and simple
`
            },

            {
              title: "July 2019",
              markdown: `
❌ Ask for feedback

❌ Iterate over design

❌ Iterate over copy

❌ Iterate over app feedback

❌ Iterate over website

❌ Iterate over business model

`
            },

            {
              title: "August + September",
              markdown: `
❌ Connect with (business) coaches, influencers, journalists.

❌ Launch!
`
            },

            {
              title: "Q4",
              markdown: `
❌ Fix problems that arise

❌ Invest 100% in stability and quality, not in features
              `
            },

            {
              title: "2020+",
              markdown: `
❌ Optimize Dunbar Challenge

❌ Optimize Insights

❌ Optimize Network Aggregation and UX

❌ Work together with coaches and therapists to create a premium semi-automated (self)coaching platform.
              `
            }
          ]
        }
      ]
    },
    {
      type: "Markdown",
      linkTarget: "",
      markdown:
        "The beta will be completely free to use. However, a payment infrastructure is soon to be ready, and our business model will be a freemium one: The user can pay for extra features. Read more about the business model and pricing [here](/pricing)"
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


✉️ [info@dunbar.site](mailto:info@dunbar.site)

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
    }
  ]
};

const developers: Page = {
  title: "Developers",
  route: "developers",
  showInMenu: true,
  showInFooter: true,
  internalPage: true,
  sections: [
    {
      type: "Markdown",
      linkTarget: "",
      markdown: `
# Are you a developer?

* **EAT CODE KITE REPEAT** Does this get you excited? [Have a look here](https://leckr.io)

* **People API** I'm building a Universal People API. Does this get you excited? [Get in touch](/contact)

* **I do React Native** What about you? [Get in touch](/contact) or [Have a look here](https://leckr.io)
        `
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
  showInMenu: false,
  showInFooter: true,
  internalPage: true,
  sections: [
    {
      type: "Markdown",
      optionsArray: [
        {
          markdown: `
**NB:** This is going to be the pricing after we launch around August 2019. For all BETA users until August 2019, the app - with all features - will be free of use.
`
        }
      ]
    },
    {
      type: "Pricing",
      optionsArray: [
        {
          buttonTitle: "Try 30 days for free",
          packages: [
            {
              name: "Free",
              price: "€0",
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
              price: "€42",
              color: "#0054b8",
              priceDescription: "One time fee (Or get a free invite)",
              link: "https://useplink.com/payment/RGmpgKGxnAthbK8w9kzt", //"https://rcur.nl/pay/G4vXjMGgkb",
              features: [
                "Second circle",
                "Up to 10 Clubs",
                "Sync across devices (Android + iOS)",
                "Basic Insights"
              ],
              notFeatures: ["Outer circle"]

              // description: "42 contacts"
            },
            {
              name: "Pro",
              price: "€20",
              priceDescription: "Price per month",
              link: "https://rcur.nl/pay/80L4EYYgpq",
              //description: "150 contacts"
              features: [
                "Outer circle",
                "Unlimited Clubs",
                "Extensive insights",
                "Print your contacts in multiple formats (Made for Booki)"
              ]
            }
            // {
            //   name: "VIP",
            //   nameDescription: "(Coming Soon)",
            //   price: "€499",
            //   priceDescription: "Price per month",
            //   link: "https://rcur.nl/pay/80L4EYYgpq",
            //   features: [
            //     "A team of professionals",
            //     "Artificial Intelligence",
            //     "Data Science",
            //     "1:1 Daily Advice"
            //   ]
            // }
          ]
        }
      ]
    },

    {
      type: "Markdown",
      linkTarget: "",
      markdown: `
**Some things that will help to make it convert better:** 

* **Invitation Code** Club users get a code to invite a friend that can join Club for free. That person, in turn, gets a code as well. Loyal Club Members get a new invitation-code to give away every 6 months. If this code is used, the club user gets a code that gives away club membership for 50% off.

* **Multiple codes per pro user** Pro users get 6 codes that will remain usable as long as they pay their memberships fee every month. This means the Dunbar app can be activated on 6 devices. If the user has less than so many devices, the user can give away those codes to friends. This will generate word of mouth.

* **Invite Action** Additionally, sometimes there will be an invite action (by email). All pro users get a link that gives 50% sale on the pro membership to friends.

**Some additional ways to market**

* **Dunbar for Business** will be sold to businesses in a B2C2B way once there is traction. Dunbar for Business will cost around €10/employee/month, and will have huge impact on employee mental health.

* **Dunbar for Events** Do you want all your **event or conference** participants inside the Dunbar app? This is going to be a possibility too. [Get in touch](/contact)

* **Dunbar For Coworking** makes it possible for all coworkers to find eachother and connect [Get in touch](/contact)

* [Donate (PayPal)](https://paypal.me/communify?locale.x=nl_NL)
`
    }
  ]
};

const beta: Page = {
  title: "Beta",
  route: "beta",
  showInMenu: false,
  showInFooter: true,
  internalPage: true,
  sections: [
    {
      type: "Markdown",
      markdown: `

# Download the BETA

[Feedback form](https://wijnandkarsens.typeform.com/to/A3W7Cu)

[iOS Download](https://testflight.apple.com/join/wrmZAEYK) (Click and install TestFlight, then click again)

[Android Download](https://play.google.com/apps/testing/com.progenworks.dunbar1)


### One liners (for ads)

**Audience 1: Entrepreneurs:**

- Dunbar - Personal CRM for Entrepreneurs
- Dunbar - CRM for your friends
- Dunbar - Organize, Analyse, Improve.

**Audience 2: Broader audience:**

- Dunbar - What's the Quality of your Relationships? Raise the bar
- Dunbar - Take charge of your relationships
- Dunbar - Stay in control of your relationships
- Dunbar - Relational Insights to Results 
- Dunbar - Put (more) meaning into your relationships
- Dunbar - Create your tribe

### Longer story (±40 words)
When people aren't convinced by two screenshots and a headline, a longer story will appear on the landing page when scrolling down. 

* Social Networks minimize real life interaction to maximize screentime, and sparisify and degrade your relations. Dunbar helps you to keep the more meaningful ones, and make them better.

* Dunbars Limit (150) is the limit of maintainable stable relationships. Most people have more, but very sparsified relationships. Spending less time on each relationship makes them less valuable. Dunbar helps you get less but more worthwhile connections. 

* Dunbar lets you assign your network into 3 categories: The inner circle, friends, and the outer circle. Also, you can analyze your relational activity so you can see where to improve.

* According to Dunbar, the limit of active stable relationships is 150. Managing and limiting your active relationships to 150 people is an enormous task. With Dunbar, we help you to organize, analyze and improve your personal and professional relationships.

* I care about my friends, but FB, other Social Media, and contact apps make it hard to really maintain my relationships. I want to decide who I care about, and not let the algorithms decide who I get information about (e.g. on the FB Timeline). I want to do more meaningful activities with my friends, rather than using flat communication platforms like WhatsApp, Facebook and SnapChat. I want fewer, but stronger friendships.

* Internet connects the unconnected, but disconnects the connected. Our app tries to approach [The Village Effect](https://www.amazon.de/Village-Effect-Face-Face-Healthier/dp/0307359549) in cities.

* **No Machine Learning, but Personal Choice.** Content of your network/contacts at Dunbar isn't driven by a screentime-optimized machine learning model like on Facebook and other Social Media. On Dunbar, it also isn't driven by the amount of content your network post about themselves. On Dunbar, you are in control of your relationships, and you decide who you want to keep in touch with. How often? Why? How? You can create your own, personal, private overview, and this will greatly benefit your relationships in the long term.
      `
    },
    {
      type: "Download"
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
  beta,
  story,
  defaultPages.privacy,
  defaultPages.emailsuccess,
  defaultPages.paymentsuccess
];

const globalSettings: GlobalSettings = {
  googleAnalyticsId: "UA-115183926-2",
  mailChimpSubscribeUrl:
    "https://travellifemovement.us16.list-manage.com/subscribe/post?u=211c8e286b504f8faf1b92bb2&amp;id=74a7bddfd2",

  mailFormTitle: "Get early access",

  colors: {
    defaultText: "#fff",
    primary: "#0054b8",
    primaryLighter: "#0064dc",
    primaryDarker: "#00306a"
  },

  style: {
    fontFamily: {
      title: "Trebuchet MS",
      text: "Comic Sans MS"
    }
  },

  apiUrl: null,
  // driftId: "p87nxp8v5kyi",
  appName: "Dunbar 0.3",
  siteTitle: "Dunbar - CRM for your Friends",
  copyrightYear: "2019",
  companyName: "Dunbar"
};

const settings: Settings = {
  pages,
  assets,
  ...globalSettings
};

export default settings;
