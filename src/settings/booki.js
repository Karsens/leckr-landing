import React from "react";
import Icon from "components/Icon";
import * as assets from "./assets_booki/index";

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
    { type: "masthead" }, { type: "features" }, { type: "reviews" }, { type: "team" }, { type: "blog" }
  ],
  // sections. Possibilities: video, masthead, stats, blog, "story", "features", "reviews", "team"

  title: {
    fontFamily: "Arial Rounded MT Bold",
  },

  copy: {

    opposite: {
      siteTitle: "Go basic. Go Booki",
      title: "Go Basic. Go Booki",
      text: "In an age of distraction, we all fight for our attention and focus. Your smartphone isn't making it easy. Booki gives you back your calm, focus and attention."
    },

    default: {
      siteTitle: "Go Basic. Go Booki",
      title: "Go Basic. Go Booki",
      text: "Smartphones are the new sigarettes, and multitasking has proven to be very unhealthy. Privacy is gone, and it's only getting worse... Booki is a structured pocketbook the size of your phone that has the same key functionalities as a smartphone, but analog."
    },

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

  appName: "Booki",

  copyrightYear: "2019",

  footerLinks: [
    {
      title: "Privacy",
      link: "/privacy"
    },

  ],

  // for inside privacy policy. Can be any tradename I guess?
  companyName: "Booki",


  //   appSchemeUrl: "communify://communify.cc/",

  //   downloadAppstoreUrl: "https://itunes.apple.com/gb/app/communify/id1366552547?mt=8",
  //   downloadPlaystoreUrl: "https://play.google.com/store/apps/details?id=com.progenworks.communify",

  assets
};

export default Settings;
