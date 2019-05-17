import React from "react";
import Icon from "ui/Icon";
import * as assets from "./assets_leckr/index";

const Settings = {
  isNoPhone: true,
  // to make sure people and on yourwebsite.com/emailsuccess, please do this:
  // In MailChimp, audience -> Manage audience -> signup forms -> form builder -> forms and response emails: confirmation thank you page -> send subs to another URL -> https://dunbar.site/emailsuccess -> save
  mailChimpSubscribeUrl: "", // "https://travellifemovement.us16.list-manage.com/subscribe/post?u=211c8e286b504f8faf1b92bb2&amp;id=74a7bddfd2", // nb: with post-json instead of post, you'll get JSON in return instead.
  emailSuccessText: "Thanks for your interest. Your email is underway.",
  colors: {
    primary: "#0054b8",
    primaryLighter: "#0064dc",
    primaryDarker: "#00306a"
  },

  homeSections: [
    { type: "masthead" },
    { type: "features" },
    { type: "reviews" },
    { type: "team" },
    { type: "blog" }
  ],
  // sections. Possibilities: video, masthead, stats, blog, "story", "features", "reviews", "team"

  title: {
    fontFamily: "Arial Rounded MT Bold"
  },

  copy: {
    default: {
      siteTitle: "LECKR",
      title: "Let's Eat Code Kite Repeat",
      text:
        "Let's Eat Code Kite Repeat is a global community for **digital nomads, entrepreneurs and software developers** that share a passion for **extreme sports and adventure**. We strive for **deep work in flow state** and living a **stoked lifestyle** by designing the perfect environment to make this possible. \n\n [Why I started LECKR](https://medium.com/leckr-react-native-graphql-apollo-tutorials/lets-eat-code-kite-repeat-240d7be3b45)"
    }

    // lonely: {
    //   siteTitle: "Booki",
    //   title: "iBook? No, Booki",
    //   text: "The attention economy has disrupted our time for ourselves"
    // }
  },

  stats: {
    loadingText: "Loading stats...",
    text: "Join {0} l in {1} o"
  },

  apiUrl: "",

  driftId: "p87nxp8v5kyi",

  socialNetworks: [
    // {
    //   id: "facebook",
    //   text: "Like us",
    //   icon: <Icon family="fa" name="facebook" />,
    //   color: "#717fea",
    //   link: "https://www.facebook.com/CommunifyCoworking/"
    // }
  ],

  menu: [
    {
      title: "Download",
      id: "masthead"
    },
    {
      title: "Explore",
      id: "directory"
    },
    {
      title: "Blog",
      id: "news"
    }
  ],

  appName: "LECKR",

  copyrightYear: "2019",

  footerLinks: [
    {
      title: "Privacy",
      link: "/privacy"
    }
  ],

  // for inside privacy policy. Can be any tradename I guess?
  companyName: "LECKR",

  //   appSchemeUrl: "communify://communify.cc/",

  //   downloadAppstoreUrl: "https://itunes.apple.com/gb/app/communify/id1366552547?mt=8",
  //   downloadPlaystoreUrl: "https://play.google.com/store/apps/details?id=com.progenworks.communify",

  assets
};

export default Settings;
