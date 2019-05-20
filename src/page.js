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
import Download from "./sections/section.download";
import ImageIconsFeatures from "./sections/section.features.imageicons";
import ImageTextFeatures from "./sections/section.features.imagetext";


import ImageTitle from "./sections/ImageTitle";

import Stats from "./sections/Stats"; // should be CommunifyStats

const SectionComponents = {
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
  Privacy,
  // Reviews,
  // DoubleImageTitle,
  // About,
  // ImageCover,
  // Video,
};

class PageComponent extends React.Component<Page> {
  render() {
    const {
      pathname,
      sections,
      internalPage,
      search,
    } = this.props;

    return (
      <PageLayout pathname={pathname} internalPage={internalPage}>
        <Helmet>
          <link rel="shortcut icon" href={Settings.assets.favicon} />
          <title>{Settings.siteTitle}</title>

          <script async src={`https://www.googletagmanager.com/gtag/js?id=${Settings.googleAnalyticsId}`} />
          {`<script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${Settings.googleAnalyticsId}');
          </script>`}

        </Helmet>
        
        {sections.map(({ type, optionsArray }: Section, index) => {
          const SectionComponent = SectionComponents[type];

          const key = `section-${index}`;

          if (!SectionComponent) {
            console.log("Can't find section ", type);
            return <div key={key} />;
          }

          const options: Options = optionsArray && (
            optionsArray.find(opt => opt.reference === search.ref) || optionsArray[0]
          );

          return <SectionComponent key={key} {...options} />;
        })}

        <Drift appId={Settings.driftId} />
      </PageLayout>
    );
  }
}
//NB: OMG SO PRETTY SO CLEAN SO THOUGHT THROUGH IM GOD :O

export default PageComponent;
