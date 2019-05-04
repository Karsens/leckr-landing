import React from "react";
import Icon from "components/Icon";
import * as assets from "./assets_dunbar/index";


const Settings = {

  mastHead: {

    default: { // entrepreneur audience
      title: "Personal CRM for Entrepreneurs",
      text: "According to Dunbar, the limit of active stable relationships is 150. With Dunbar, we help you to organize, analyze and improve your personal and professional relationships."
    },
    broad: {
      title: "Put meaning into your relationships",
      text: "Dunbars Limit (150) is the limit of maintainable stable relationships. Most people have more, but very sparsified relationships. Spending less time on each relationship makes them less valuable. Dunbar helps you get less but more worthwhile connections."
    }


  },


  home: {
    statsLoading: "Loading stats...",
    stats: "Join {0} coworkers in {1} communities"
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

    // {
    //   title: "Communify Open",
    //   link: "https://github.com/EAT-CODE-KITE-REPEAT/communify-open"
    // }
  ],

  companyName: "ProGen Works",


  //   appSchemeUrl: "communify://communify.cc/",

  //   downloadAppstoreUrl: "https://itunes.apple.com/gb/app/communify/id1366552547?mt=8",
  //   downloadPlaystoreUrl: "https://play.google.com/store/apps/details?id=com.progenworks.communify",

  assets
};

export default Settings;
