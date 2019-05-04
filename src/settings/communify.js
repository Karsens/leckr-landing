import React from "react";
import Icon from "components/Icon";
import * as assets from "./assets_communify/index";


const Settings = {

  mastHead: {

    default: {
      title: "The Coworking Community Builder",
      text: "All Coworking spaces need a platform where their Coworkers can find eachother and see what they are working on. Slack is too impersonal, Facebook groups are too messy and covered up between other FB posts. The good news? Communify solves this."
    },
    fbads1: {
      title: "Where Coworkers Thrive",
      text: "Discover other coworkers, chat, connect, collaborate"
    }


  },


  home: {
    statsLoading: "Loading stats...",
    stats: "Join {0} coworkers in {1} communities"
  },

  apiUrl: "https://server.communify.cc",

  driftId: "p87nxp8v5kyi",

  socialNetworks: [
    {
      id: "facebook",
      text: "Like us",
      icon: <Icon family="fa" name="facebook" />,
      color: "#717fea",
      link: "https://www.facebook.com/CommunifyCoworking/"
    }
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

  appName: "Communify",

  copyrightYear: "2019",

  footerLinks: [
    {
      title: "Privacy",
      link: "/privacy"
    },

    {
      title: "Communify Open",
      link: "https://github.com/EAT-CODE-KITE-REPEAT/communify-open"
    }
  ],

  companyName: "ProGen Works",


  appSchemeUrl: "communify://communify.cc/",

  downloadAppstoreUrl: "https://itunes.apple.com/gb/app/communify/id1366552547?mt=8",
  downloadPlaystoreUrl: "https://play.google.com/store/apps/details?id=com.progenworks.communify",

  assets
};

export default Settings;
