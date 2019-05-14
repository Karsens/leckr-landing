import React from "react";
import Icon from "components/Icon";
import * as assets from "./assets_karsens/index";

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
    { type: "masthead" }, { type: "reviews" }, { type: "team" }, { type: "blog" }
  ],
  // sections. Possibilities: video, masthead, stats, blog, "story", "features", "reviews", "team"

  title: {
    fontFamily: "Arial Rounded MT Bold",
  },

  copy: {

    default: {
      siteTitle: "Karsens",
      title: "Wijnand Karsens",
      text: "Hi, I'm Wijnand.\nThis is what I do:\n\n- CRM for your Friends - [Dunbar](https://dunbar.site)\n\n - Go Basic. Go [Booki](https://gobooki.co)\n\n - Over 95% code sharing between 5 platforms (iOS, Android, Web, Mac, and Windows) with our universal boilerplates and components - [LECKR](https://leckr.io)\n\n - Writing in my [blog](https://blog.karsens.com)\n\n"
    },

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
    },

  ],

  // for inside privacy policy. Can be any tradename I guess?
  companyName: "LECKR",


  //   appSchemeUrl: "communify://communify.cc/",

  //   downloadAppstoreUrl: "https://itunes.apple.com/gb/app/communify/id1366552547?mt=8",
  //   downloadPlaystoreUrl: "https://play.google.com/store/apps/details?id=com.progenworks.communify",

  assets
};

export default Settings;
