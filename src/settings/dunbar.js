import React from "react";
import Icon from "components/Icon";
import * as assets from "./assets_dunbar/index";


const Settings = {


  homeSections: ["masthead", "story", "features", "reviews", "team"],
  // sections. Possibilities: video, masthead, stats, blogs,  "story", "features", "reviews", "team"

  title: {
    fontFamily: "Times",
  },

  copy: {

    default: { // entrepreneur audience
      siteTitle: "Dunbar - CRM for your Friends",
      title: "CRM for your Friends",
      text: "According to Dunbar, the limit of active stable relationships is 150. With Dunbar, we help you to organize, analyze and improve your personal and professional relationships."
    },

    broad: { // broad audience
      siteTitle: "Dunbar - Put meaning into your relationships",
      title: "Put meaning into your relationships",
      text: "Dunbars Limit (150) is the limit of maintainable stable relationships. Most people have more, but very sparsified relationships. Spending less time on each relationship makes them less valuable. Dunbar helps you get less but more worthwhile connections."
    },

    lonely: {
      siteTitle: "Dunbar - Reconnect. Engage. Bond.",
      title: "Reconnect. Engage. Bond.",
      text: "I care about my friends, but FB, other Social Media, and contact apps make it hard to really maintain my relationships. I want to decide who I care about, and not let the algorithms decide who I get information about (e.g. on the FB Timeline). I want to do more meaningful activities with my friends, rather than using flat communication platforms like WhatsApp, Facebook and SnapChat. I want fewer, but stronger friendships."
    }

  },

  stats: {
    loadingText: "Loading stats...",
    text: "Join {0} coworkers in {1} communities"
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


  sections: [
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

  appName: "Dunbar",

  copyrightYear: "2019",

  footerLinks: [
    {
      title: "Privacy",
      link: "/privacy"
    },

  ],

  companyName: "ProGen Works",


  //   appSchemeUrl: "communify://communify.cc/",

  //   downloadAppstoreUrl: "https://itunes.apple.com/gb/app/communify/id1366552547?mt=8",
  //   downloadPlaystoreUrl: "https://play.google.com/store/apps/details?id=com.progenworks.communify",

  assets
};

export default Settings;
