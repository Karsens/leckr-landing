/*
 * Every page is the same. It's built up out of sections,
 * and has some universal page things that every page has in common,
 * like a container, menu, footer, and a contact button
 * */

// Global Styles
import React from "react";
import Drift from "react-driftjs";

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
import Features from "./sections/section.features"; // should I use this at all?
import EmailSuccess from "./sections/section.emailsuccess";

import ImageTitle from "./sections/Masthead"; // rename
import DoubleImageTitle from "./sections/Masthead"; // 2 images with oneliner in the middle + buttons or email catcher
import Reviews from "./sections/Masthead"; // 3 reviews in a row
import Blurps from "./sections/Masthead"; // 3 blurps in a row
import About from "./sections/Masthead"; // long story with pictures here and there (use markdown)
import ImageCover from "./sections/Masthead"; // 100% width image with optional title hovering over it
import Video from "./sections/Masthead"; // 100% width video
import Privacy from "./sections/Masthead"; // long page with privacy statement

import Stats from "./sections/Stats"; // should be CommunifyStats

const SectionComponents = {
  ImageTitle,
  DoubleImageTitle,
  Features,
  Stats,
  Blog,
  Reviews,
  Blurps,
  About,
  ImageCover,
  Video,
  Privacy,
  EmailSuccess
};

/**
 * sections
    .filter(({ showInMenu }) => !!showInMenu)
    .map(({ title, route }) => ({ title, id: route }))

  //maybe needed later, sections to show in menu. we now just show pages.
 */
class PageComponent extends React.Component<Page> {
  render() {
    const {
      sections,
      search: { ref }
    } = this.props;

    return (
      <PageLayout>
        {sections.map(({ type, optionsArray }: Section) => {
          const SectionComponent = SectionComponents[type];

          if (!SectionComponent) {
            console.log("Can't find section ", type);
            return <div />;
          }

          const options: Options = optionsArray && (
            optionsArray.find(opt => opt.ref === ref) || optionsArray[0]
          );

          return <SectionComponent {...options} />;
        })}

        <Drift appId={Settings.driftId} />
      </PageLayout>
    );
  }
}
//NB: OMG SO PRETTY SO CLEAN SO THOUGHT THROUGH IM GOD :O

export default PageComponent;
