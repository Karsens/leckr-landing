import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";

import Settings from "settings/index";

import SocialButton from "../SocialButton";

import DeviceMockup from "../DeviceMockup";
import "./style.css";
import googlePlayBadge from "./images/google-play-badge.svg";
import appStoreBadge from "./images/app-store-badge.svg";

import { getLinkObject } from "../../import";

const propTypes = {
  query: PropTypes.string.isRequired,
  googlePlayDownloadLink: PropTypes.string.isRequired,
  appStoreDownloadLink: PropTypes.string.isRequired,
  demoScreen: PropTypes.string.isRequired,
  socialNetworks: PropTypes.object.isRequired
};

/**
 * The masthead for the home page
 */
const Masthead = ({
  query,
  googlePlayDownloadLink,
  appStoreDownloadLink,
  demoScreen,
  socialNetworks,
}) => {
  const obj = query && getLinkObject(query);

  const key = obj.user || "default";

  const mastHeadSettings = Settings.mastHead[key] || Settings.mastHead.default;

  const { title, text } = mastHeadSettings;

  return (
    <header className="masthead">
      {/* eslint-disable-next-line */}
      <a name="masthead" />
      <Container className="h-100">
        <Row className="h-100">
          <Col lg="7" xs="12" className="my-auto">
            <div className="header-content mx-auto">
              <div style={{ overflow: "hidden" }}>
                <div style={{ float: "left" }}>
                  <img
                    alt={`${Settings.appName} logo`}
                    src={Settings.assets.logo}
                    width={100}
                    height={100}
                  />
                </div>

                <div>
                  <h1 style={{ fontFamily: "\"ff-meta-serif-web-pro\",\"PT Serif\",Georgia,\"Droid Serif\",serif;" }}>
                    <b>{title}</b>
                  </h1>
                </div>
              </div>

              <h4 style={{ marginTop: 20 }}>{text}</h4>

              <div className="badges">
                <div className="badge-item">
                  {googlePlayDownloadLink && (
                    <a className="badge-link" href={googlePlayDownloadLink}>
                      <img src={googlePlayBadge} alt="" />
                    </a>
                  )}
                </div>

                <div className="badge-item">
                  {appStoreDownloadLink && (
                    <a className="badge-link" href={appStoreDownloadLink}>
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
            <DeviceMockup device="iPhone7" orientation="portrait" color="black">
              <img
                src={demoScreen}
                className="img-fluid"
                alt=""
                width="100%"
                height="100%"
              />
            </DeviceMockup>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

Masthead.propTypes = propTypes;

export default Masthead;
