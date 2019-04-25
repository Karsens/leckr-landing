import React from "react";
import Icon from "components/Icon";
import * as assets from "./assets_communify/index";


/*
  endpoint should have this mutation in GraphQL:

    mutation SaveSettingsFromEmail(
    $emailtoken: Int
    $key: String
    $value: Int
    $coid: Int
  ) {
    saveSettingsFromEmail(
      emailtoken: $emailtoken
      key: $key
      value: $value
      coid: $coid
    )
  }

also the web query

query Web {
    web {
      users
      communities
      featured {
        id
        name
        color1
        code
        logo
      }
      mediumArticles {
        title
        link
        figure
      }
    }
  }

  this should definitely be split apart or some parts can be in the landing-api
*/

const Settings = {

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
