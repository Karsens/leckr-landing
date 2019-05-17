import React from "react";
import Icon from "ui/Icon";
import * as assets from "./assets_dunbar/index";

import { Page, GlobalSettings, Settings } from "./_types";

const home: Page = {
  title: "Home",
  route: "",
  showInMenu: true,
  showInFooter: false,
  sections: [
    {
      type: "masthead",
      optionsArray: [
        {
          ref: "default",
          // entrepreneur audience
          siteTitle: "Dunbar - CRM for your Friends",
          title: "CRM for your Friends",
          text:
            "According to Robin Dunbar, an extraordinary anthropologist and evolutionary psychologist, the limit of active stable relationships is [150](https://www.forbes.com/sites/kenmakovsky/2014/08/07/dunbars-number-and-the-need-for-relationship-management/#38dca12e397b). With Dunbar, we help you to organize, analyze and improve your personal and professional relationships."
        },

        {
          ref: "short",
          // entrepreneur audience
          siteTitle: "Dunbar - Organize, Analyse, Improve",
          title: "Organize, Analyse, Improve",
          text:
            "According to Robin Dunbar, an extraordinary anthropologist and evolutionary psychologist, the limit of active stable relationships is [150](https://www.forbes.com/sites/kenmakovsky/2014/08/07/dunbars-number-and-the-need-for-relationship-management/#38dca12e397b). With Dunbar, we help you to organize, analyze and improve your personal and professional relationships."
        },

        {
          ref: "broad",
          // broad audience
          siteTitle: "Dunbar - Put meaning into your relationships",
          title: "Put meaning into your relationships",
          text:
            "Dunbars Limit (150) is the limit of maintainable stable relationships. Most people have more, but very sparsified relationships. Spending less time on each relationship makes them less valuable. Dunbar helps you get less but more worthwhile connections."
        },

        {
          ref: "lonely",
          siteTitle: "Dunbar - Reconnect. Engage. Bond.",
          title: "Reconnect. Engage. Bond.",
          text:
            "I care about my friends, but FB, other Social Media, and contact apps make it hard to really maintain my relationships. I want to decide who I care about, and not let the algorithms decide who I get information about (e.g. on the FB Timeline). I want to do more meaningful activities with my friends, rather than using flat communication platforms like WhatsApp, Facebook and SnapChat. I want fewer, but stronger friendships."
        }
      ]
    },
    {
      type: "features",

      optionsArray: [
        {
          title: "Why would I need Dunbar?",
          subtitle: "A lot of reasons...",
          features: [
            {
              title: "OV-Fiets Planner",
              description: "Plan je trein en fiets reis",
              icon: <Icon family="simple" name="screen-smartphone" />
            },
            {
              title: "Inzichten",
              description: "Zie je bespaarde tijd, CO2 en verbrande calorieën!",
              icon: <Icon family="simple" name="present" />
            },
            {
              title: "Overstap Alarm",
              description: "Ontvang een notificatie zodra je moet overstappen",
              icon: <Icon family="simple" name="exclamation" />
            },
            {
              title: "OV Fiets beschikbaarheid",
              description: "Zie hoeveel OV Fietsen er nog beschikbaar zijn op je reis",
              icon: <Icon family="fa" name="bicycle" />
            }
          ]
        }
      ]
    },

    {
      type: "stats",
      options: [
        {
          loadingText: "Loading stats...",
          text: "Join {0} coworkers in {1} communities"
        }
      ]
    },

    { type: "reviews" },
    { type: "team" },
    { type: "blog" }
  ]
};

const privacy: Page = {
  title: "Privacy",
  route: "privacy",
  showInMenu: false,
  showInFooter: true,
  sections: [{ type: "privacy" }]
};

const pages: Page[] = [home, privacy];

const globalSettings: GlobalSettings = {
  mailChimpSubscribeUrl:
    "https://travellifemovement.us16.list-manage.com/subscribe/post?u=211c8e286b504f8faf1b92bb2&amp;id=74a7bddfd2",

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
  copyrightYear: "2019",
  companyName: "Dunbar"
};

const settings: Settings = {
  pages,
  assets,
  ...globalSettings
};

export default settings;
