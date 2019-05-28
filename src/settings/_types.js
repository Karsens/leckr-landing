/**
 * To summarize, all pages are just a set of sections,
 * which can have options or no options to use default options.
 * If multiple options are given, the right options are chosen based on the ref key.
 */

import React from "react";

export type Colors = {
  primary: string,
  primaryDarker: string,
  primaryLighter: string
};
export type Style = { fontFamily: { title: string, text: string } };

export type GlobalSettings = {
  appName: string,
  copyrightYear: string,
  apiUrl: string,
  driftId: string,
  companyName: string,
  colors: Colors,
  style: Style
};

/**
 * hard to define all options, as it depends per section.
 *
 * But for localization:
 * - every string can be a string or a language-object, which is an object like this: `{nl: string, en: string, de: string, es: string, pt: string}`.
 *
 */
export type Options = { ref?: string } & any;

export type Section = { type: string, optionsArray: Options[] } & Options;

export type Page = {
  title: string,
  route: string, // route without prefixed '/'
  showInMenu: boolean,
  showInFooter: boolean,
  sections: Section[]
};

export type Assets = { logo: img, image1: img, image2: img };

export type Settings = { pages: Page[], assets: Assets } & GlobalSettings;

// section.features
export type Feature = {
  title: string,
  description: string,
  icon: React.Element
};
export type FeaturesOptions = {
  ref?: string,
  title: string,
  subtitle: string,
  features: Feature[],
  image1: string
};

/**
 * todo define options for every sectionType specifically here,
 * so I can easily remember them.
 * I can then make a different options type for every section
 *  */
