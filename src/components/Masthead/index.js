import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";
import SocialButton from "../SocialButton";

import DeviceMockup from "../DeviceMockup";
import "./style.css";
import googlePlayBadge from "./images/google-play-badge.svg";
import appStoreBadge from "./images/app-store-badge.svg";
import logo from "./images/logo_small.png";

import { getLinkObject } from "../../import";

const propTypes = {
  text: PropTypes.string.isRequired,
  googlePlayDownloadLink: PropTypes.string.isRequired,
  appStoreDownloadLink: PropTypes.string.isRequired,
  demoScreen: PropTypes.string.isRequired
};

/**
 * The masthead for the home page
 */
const Masthead = ({
  query,
  googlePlayDownloadLink,
  appStoreDownloadLink,
  demoScreen,
  socialNetworks
}) => {
  const obj = query && getLinkObject(query);
  let title = "The Coworking Community Builder";

  let text =
    "All Coworking spaces need a platform where their Coworkers can find eachother and see what they are working on. Slack is too impersonal, Facebook groups are too messy and covered up between other FB posts. The good news? Communify solves this.";

  if (obj.user) {
    if (obj.user === "fbads1") {
      title = "Where Coworkers Thrive";
      text = "Discover other coworkers, chat, connect, collaborate";
    }
  }

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
                    alt="Communify Logo"
                    src={logo}
                    width={100}
                    height={100}
                  />
                </div>

                <div style={{}}>
                  <h1>
                    <b>{title}</b>
                  </h1>
                </div>
              </div>

              <h4>{text}</h4>

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
