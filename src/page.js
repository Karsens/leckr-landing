/*
 * Every page is the same. It's built up out of sections,
 * and has some universal page things that every page has in common,
 * like a container, menu, footer, and a contact button
 * */

// Global Styles
import React from "react";
import Drift from "react-driftjs";
import { Helmet } from "react-helmet";

import "typeface-catamaran"; // eslint-disable-line
import "font-awesome/css/font-awesome.css";
import "simple-line-icons/css/simple-line-icons.css";
import "html5-device-mockups/dist/device-mockups.css";

import PageLayout from "./layout/PageLayout";

import "./style.css";

// settings
import Settings from "./settings";
import { Page, Section, Options } from "./settings/_types";

// components
import Blog from "./sections/Blog"; // make general purpose
import Privacy from "./sections/section.privacy"; // long page with privacy statement
import Markdown from "./sections/section.markdown";
import Pricing from "./sections/section.pricing";
import Blurps from "./sections/section.blurps"; // 3 blurps in a row
import Timeline from "./sections/section.timeline";
import ImageCover from "./sections/section.imagecover";
import Download from "./sections/section.download";
import ImageIconsFeatures from "./sections/section.features.imageicons";
import ImageTextFeatures from "./sections/section.features.imagetext";

import ImageTitle from "./sections/ImageTitle";
import Stats from "./sections/Stats"; // should be CommunifyStats

const SectionComponents = {
  ImageCover,
  Markdown,
  Pricing,
  Download,
  Timeline,
  ImageTitle,
  ImageIconsFeatures,
  ImageTextFeatures,
  Stats,
  Blog,
  Blurps,
  Privacy
  // Reviews,
  // DoubleImageTitle,
  // About,
  // ImageCover,
  // Video,
};

/**
 *
 *
 */

const isObject = value => value !== null && typeof value === "object";
const isArray = obj => obj !== null && Array.isArray(obj);
const isLanguageObject = value => isObject(value) && value.en !== undefined;
const isNoLanguageObjectButObject = val => {
  console.log("is val?", val);

  return isObject(val) && !isLanguageObject(val);
};

/**
 * to be called with deepMap. converts all languageObjects to strings.
 * @param {*} value
 * @param {*} key
 */
const getTranslateValues = ({ value, key, tryLanguage, fallbackLanguage }) => {
  if (!isLanguageObject(value)) {
    console.log("WEIRDD", value, key);
    return value; //shouldn't happen
  }
  const translatedValue = value[tryLanguage] || value[fallbackLanguage];
  return translatedValue;
};

/**
 * Modified answer of this (https://stackoverflow.com/questions/25333918/js-deep-map-function) to work with my isLanguageObject check.
 * @param {*} obj
 * @param {*} f (value: languageObject, key) =>
 * @param {*} shouldRecurse val => boolean
 */
function deepMap(obj, f, shouldRecurse) {
  if (isArray(obj)) {
    return obj.map(function(val, key) {
      return shouldRecurse(val) ? deepMap(val, f, shouldRecurse) : f(val, key);
    });
  } else if (isObject(obj)) {
    var res = {};
    for (var key in obj) {
      var val = obj[key];
      if (shouldRecurse(val)) {
        res[key] = deepMap(val, f, shouldRecurse);
      } else {
        res[key] = f(val, key);
      }
    }
    return res;
  } else {
    return obj;
  }
}

class PageComponent extends React.Component<Page> {
  render() {
    const { pathname, sections, internalPage, search } = this.props;

    return (
      <PageLayout pathname={pathname} internalPage={internalPage}>
        <Helmet>
          <link rel="shortcut icon" href={Settings.assets.favicon} />
          <title>{Settings.siteTitle}</title>

          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${Settings.googleAnalyticsId}`}
          />
          {`<script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${Settings.googleAnalyticsId}');
          </script>`}
        </Helmet>

        {sections.map(({ type, optionsArray, ...rest }: Section, index) => {
          const SectionComponent = SectionComponents[type];

          const key = `section-${index}`;

          if (!SectionComponent) {
            console.log("Can't find section ", type);
            return <div key={key} />;
          }

          /**
           * step 1: find options (personalisation)
           */
          const options: Options = optionsArray
            ? optionsArray.find(opt => opt.reference === search.ref) || optionsArray[0]
            : rest;

          /**
           * step 2: find all language strings
           */
          const setLanguage = search.lang; //"es";
          const deviceLanguage = "nl";
          const fallbackLanguage = "en";

          const tryLanguage = setLanguage || deviceLanguage;

          const translatedOptions = deepMap(
            options,
            (value, key) => getTranslateValues({ value, key, tryLanguage, fallbackLanguage }),
            isNoLanguageObjectButObject
          );

          /**
           * Object.keys(options)
            .map(translateValues)
            .reduce(
              (newObject, thisObject) => ({
                ...newObject,
                [thisObject.key]: thisObject.value
              }),
              {}
            );

            (oLDDDD)
           */

          return <SectionComponent key={key} {...translatedOptions} />;
        })}

        {Settings.driftId && <Drift appId={Settings.driftId} />}
      </PageLayout>
    );
  }
}
//NB: OMG SO PRETTY SO CLEAN SO THOUGHT THROUGH IM GOD :O

export default PageComponent;
