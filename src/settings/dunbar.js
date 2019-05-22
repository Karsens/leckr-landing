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
        // Organize, Analyse, Improve
        {
          reference: "default",
          image1: require("./assets_dunbar/screen1.png"),
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
      type: "Blurps", //Just Blurps, but not now yet

      optionsArray: [
        {
          blurps: [
            {
              image: require("./assets_dunbar/wijnand.jpg"),
              title: "Wijnand Karsens",
              subtitle: "Creator of Dunbar",
              text:
                "Through all the noise of nowadays, Dunbar helps me not to forget about the people important to me."
            },

            {
              image: require("./assets_dunbar/catherine.png"),
              title: "Catherine Price",
              subtitle: "writer of \"How to break up with your Phone\"",
              text: "It's a really intersting idea"
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
      type: "ImageIconsFeatures",

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
          ghostLink:
            "https://blog.karsens.com/ghost/api/v2/content/posts/?key=f986ca2d588b087644a1790df8&limit=all&filter=tags:dunbar",
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
- [x]  Work on MVP
                  `
            },

            {
              title: "May 2019",
              markdown: `
- [x]  Work on MVP
- [x]  Iterate on feedback
- [x]  Improve Website
- [ ]  Create Payments Infrastructure
`
            },

            {
              title: "June 2019",
              markdown: `
- [ ]  Fix bugs
- [ ]  Add critical features
- [ ]  Provide better onboarding
- [ ]  Release new version
- [ ]  Invite ±25 testers
- [ ]  Test with ±10 DAU
- [ ]  Add MVP's for Insights and Challenge
- [ ]  Fix problems
- [ ]  Make it stable and simple
`
            },

            {
              title: "July 2019",
              markdown: `
- [ ]  Ask for feedback
- [ ]  Iterate over design
- [ ]  Iterate over copy
- [ ]  Iterate over app feedback
- [ ]  Iterate over website
- [ ]  Iterate over business model
`
            },

            {
              title: "August + September",
              markdown: `
- [ ]  Connect with (business) coaches
- [ ]  Connect with influencers
- [ ]  Connect with T.N.W.
- [ ]  Plan launch
- [ ]  Launch!
`
            },

            {
              title: "Q4",
              markdown: `
- [ ]  Fix problems that arise
- [ ]  Invest 100% in stability and quality, not in features
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
  sections: [
    {
      type: "Markdown",
      optionsArray: [
        {
          markdown: `
.
### Let's Eat Code Kite Repeat

Does this get you excited? [Have a look here](https://leckr.io)

### I'm building a Universal People API

Does this get you excited? [Get in touch](/contact)

### I do React Native

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
**NB:** This is going to be the pricing! The app didn't launch yet, but it's already possible to buy early access to extra features. The launch is planned August 2019.
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
              priceDescription: "One time fee",
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
              price: "€20,00",
              priceDescription: "Price per month",
              link: "https://rcur.nl/pay/80L4EYYgpq",
              //description: "150 contacts"
              features: [
                "Outer circle",
                "Unlimited Clubs",
                "Extensive insights",
                "Print your contacts in multiple formats (Made for Booki)",
                "Optional: Early BETA Access to new, cool features"
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

* [Donate (PayPal)](https://paypal.me/communify?locale.x=nl_NL)
`
        }
      ]
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
      I would be very happy to receive your feedback! Please [click here](https://wijnandkarsens.typeform.com/to/A3W7Cu) to fill in the feedback form.
      
      * [iOS](https://testflight.apple.com/join/wrmZAEYK) (Click and install TestFlight, then click again)
      * [Android](https://play.google.com/apps/testing/com.progenworks.dunbar1)
      
      [Privacy Policy](https://karsens.com/privacy-policy-dunbar/)
      
      
      ### Dunbar's Ultimate Goal
      Our mission is to create higher quality and more meaningful interactions between people to make them more succesful.
      
      Our mission is to reverse downgrading of communication, social systems and relationships and make us brilliant, wise, self-reliant, and succesful.
      
      Choose your friends wisely and bring them closer together to become more succesful
      
      Bring back social networks to they way they should be. (Make offline social networks great again). 
      
      Internet connects the unconnected, but disconnects the connected. Our app tries to approach [The Village Effect](https://www.amazon.de/Village-Effect-Face-Face-Healthier/dp/0307359549) in cities.
      
      ### One liners (for ads)
      
      **Audience 1: Entrepreneurs:**
      Dunbar - Personal CRM for Entrepreneurs
      Dunbar - CRM for your friends
      Dunbar - Your Business Coach Sidekick
      Dunbar - Become more successful with relationships science & analytics 
      Dunbar - Engage your professional network
      Dunbar - Fix Human Relations Downgrading
      
      
      **Audience 2: Broader audience:**
      Dunbar - What's the Quality of your Relationships? Raise the bar
      Dunbar - Take charge of your relationships
      Dunbar - Stay in control of your relationships
      Dunbar - Share more with the people that matter most to you
      Dunbar - Analyze -> Organize -> Grow
      Dunbar - Relational Insights to Results 
      Dunbar - You are the average of the five people you spend the most time with.
      Dunbar - Never forget to reach out again
      Dunbar - Put meaning into your relationships
      Dunbar - Create your tribe
      Dunbar - Organize meaningful relationships
      Dunbar - Brilliant Relationships
      
      **Audience 3: Lonely people**
      Dunbar - Break the cycle of loneliness
      Dunbar - Define your social circle
      Dunbar - Take steps to connect with other people
      Dunbar - You are not alone
      Dunbar - Fight Loneliness. Now.
      Dunbar - Reconnect. Engage. Bond.
      
      ### Longer story (±40 words)
      When people aren't convinced by two screenshots and a headline, a longer story will appear on the landing page when scrolling down. 
      
      * Social Networks minimize real life interaction to maximize screentime, and sparisify and degrade your relations. Dunbar helps you to keep the more meaningful ones, and make them better.
      
      * Dunbars Limit (150) is the limit of maintainable stable relationships. Most people have more, but very sparsified relationships. Spending less time on each relationship makes them less valuable. Dunbar helps you get less but more worthwhile connections. 
      
      * Dunbar lets you assign your network into 3 categories: The inner circle, friends, and the outer circle. Also, you can analyze your relational activity so you can see where to improve.
      
      * According to Dunbar, the limit of active stable relationships is 150. Managing and limiting your active relationships to 150 people is an enormous task. With Dunbar, we help you to organize, analyze and improve your personal and professional relationships.
      
      * I care about my friends, but FB, other Social Media, and contact apps make it hard to really maintain my relationships. I want to decide who I care about, and not let the algorithms decide who I get information about (e.g. on the FB Timeline). I want to do more meaningful activities with my friends, rather than using flat communication platforms like WhatsApp, Facebook and SnapChat. I want fewer, but stronger friendships.
      
      * Internet connects the unconnected, but disconnects the connected. Our app tries to approach [The Village Effect](https://www.amazon.de/Village-Effect-Face-Face-Healthier/dp/0307359549) in cities.
      
      
      # How does Dunbar work?
      * Choose your inner circle (±12), friends (±42) and outer circle (±150)
      * Get one simple overview
      * Easily talk (call / whatsapp ) everyone from this overview
      * Easily invite multiple friends for an activity
      
      ![goodimage-1](/content/images/2019/04/goodimage-1.jpg)
      
      ![socialcircles](/content/images/2019/04/socialcircles.jpg)
      
      
      # Some reading material on why I created this app:
      * [Offline Social Networks - Bridging the gap](https://www.slideshare.net/padday/bridging-the-gap-between-our-online-and-offline-social-network/15-Online_OfineThe_problem_is_that)
      * [How facebook has flattened communication (Medium)](https://medium.com/s/story/how-facebook-has-flattened-human-communication-c1525a15e9aa)
      * [Please Put Down The Flat-Media (Medium)](https://medium.com/@jstreich13/please-put-down-the-flat-media-e08085263afb)
      * [What do social media breaks accomplish?](https://link.medium.com/5P6OkSc3pV)
      * [CardHop iOS App (TechCrunch)](https://techcrunch.com/2019/03/27/contacts-app-cardhop-comes-to-ios/)
      * ['Dunbar relationships' on Google](https://www.google.com/search?ei=DFKwXJafC4LCwALp1IqIAg&q=dunbar+relationships&oq=dunbar+relationships&gs_l=psy-ab.3..0j0i22i30l2.11566.13827..13956...0.0..0.64.1001.20......0....1..gws-wiz.......35i39j0i203j0i10i203.K_1FuKcXEAE)
      * [6 Ways Social Media Affects Our Health](https://www.forbes.com/sites/alicegwalton/2017/06/30/a-run-down-of-social-medias-effects-on-our-mental-health/)
      * [Smartphone Stress](https://www.bbc.com/news/business-28686235)
      * [This is what your smartphone is doing to your brain - it isn't good](https://www.businessinsider.nl/what-your-smartphone-is-doing-to-your-brain-and-it-isnt-good-2018-3/?international=true&r=US)
      * http://goodmedicine.org.uk/node/1209
      * https://www.sketchplanations.com/post/178356259078/dunbars-number-150-the-evolutionary
      * https://www.slideshare.net/EXCCELessex/robin-dunbar-has-the-internet-changed-our-social-world
      * https://fatpappy4ls.blog/2018/01/01/thinking-of-adding-things-in-2018-add-depth-to-existing-or-new-relationships/
      * https://www.slideshare.net/frankfal/the-art-science-of-b?next_slideshow=1
      
      
      
      # More explanations
      **No Machine Learning, but Personal Choice.** Content of your network/contacts at Dunbar isn't driven by a screentime-optimized machine learning model like on Facebook and other Social Media. On Dunbar, it also isn't driven by the amount of content your network post about themselves. On Dunbar, you are in control of your relationships, and you decide who you want to keep in touch with. How often? Why? How? You can create your own, personal, private overview, and this will greatly benefit your relationships in the long term.
      
      Social networks are making us unhappy, stressed, and increase anxiety.
      
      Social networks sparisify and degrade your relations. Dunbar helps you to keep the more meaningful ones.
      
      Social networks increase text communication, which decreases time and incentive for real interaction
      
      How much % of communication is language? Let's say 20%. This means using too much flat communication (text messaging, email, low quality information timelines) makes us less productive communicators.How much % of your time communicating with people is this over email, text, social media (flat communication)? A lot. How much % of your conversations are over text? A lot. To become more productive, we should lower our amount of flat communication usage.
      
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
      title: "Times",
      text: "Comic Sans MS"
    }
  },

  apiUrl: null,
  // driftId: "p87nxp8v5kyi",
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
