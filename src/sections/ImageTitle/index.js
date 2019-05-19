import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";
import ReactMarkdown from "react-markdown";

import { Helmet } from "react-helmet";

import Settings from "../../settings/index";

//ui
import SocialButton from "../../dui/SocialButton";
import DeviceMockup from "../../dui/DeviceMockup";
import MailChimpForm from "../../wui/mailchimpform";

import "./style.css";
import googlePlayBadge from "../../settings/assets/google-play-badge.svg";
import appStoreBadge from "../../settings/assets/app-store-badge.svg";

const propTypes = {
  isNoPhone: PropTypes.bool.isRequired,
  googlePlayDownloadLink: PropTypes.string.isRequired,
  appStoreDownloadLink: PropTypes.string.isRequired,
  demoScreen: PropTypes.string.isRequired
};

/**
 * The masthead for the home page
 */
const Masthead = ({ siteTitle, title, text }) => {
  const socialNetworks = [];

  const img = (
    <img src={Settings.assets.image1} className="img-fluid" alt="" width="100%" height="100%" />
  );
  return (
    <header className="masthead">
      {/* eslint-disable-next-line */}
      <a name="masthead" />
      <Container className="h-100">
        <Helmet>
          <link rel="shortcut icon" href={Settings.assets.favicon} />
          {/* #todo replace this with automatically moved favicon from assets when deploying */}

          <title>{siteTitle}</title>
        </Helmet>
        <Row className="h-100">
          <Col lg="7" xs="12" className="my-auto">
            <div className="header-content mx-auto">
              <div style={{ overflow: "hidden" }}>
                <div style={{ float: "left", marginRight: 20, marginTop: 5 }}>
                  <img
                    alt={`${Settings.appName} logo`}
                    src={Settings.assets.logo}
                    width={80}
                    height={80}
                  />
                </div>

                <div
                  style={{
                    height: 100,
                    display: "flex",
                    // #toRemember: display flex is needed to do flexbox things, otherwise it does nothing.
                    alignItems: "center"
                  }}
                >
                  <h1 style={{ fontFamily: Settings.style.fontFamily.title }}>
                    <b>{title}</b>
                  </h1>
                </div>
              </div>

              <div style={{ marginTop: 10 }}>
                <ReactMarkdown source={text} linkTarget="_blank" />
              </div>
              {Settings.mailChimpSubscribeUrl && (
                <MailChimpForm url={Settings.mailChimpSubscribeUrl} />
              )}

              <div className="badges">
                <div className="badge-item">
                  {Settings.googlePlayDownloadLink && (
                    <a className="badge-link" href={Settings.googlePlayDownloadLink}>
                      <img src={googlePlayBadge} alt="" />
                    </a>
                  )}
                </div>

                <div className="badge-item">
                  {Settings.appStoreDownloadLink && (
                    <a className="badge-link" href={Settings.appStoreDownloadLink}>
                      <img src={appStoreBadge} alt="" />
                    </a>
                  )}
                </div>

                <div className="badge-item contact">
                  {socialNetworks.map(({ id, ...props }) => (
                    <SocialButton {...props} element="div" key={id} />
                  ))}
                </div>
              </div>
            </div>
          </Col>
          <Col lg="5" xs="12" className="my-auto">
            {Settings.isNoPhone ? (
              img
            ) : (
              <DeviceMockup device="iPhone7" orientation="portrait" color="black">
                {img}
              </DeviceMockup>
            )}
          </Col>
        </Row>
      </Container>
    </header>
  );
};

Masthead.propTypes = propTypes;

export default Masthead;
