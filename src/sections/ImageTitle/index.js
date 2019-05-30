import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";
import ReactMarkdown from "react-markdown";

import { Helmet } from "react-helmet";

import Settings from "../../settings/index";

//ui
import DeviceMockup from "../../dui/DeviceMockup";

import Download from "../../wui/download";

import "./style.css";

/**
 * The masthead for the home page
 */
const ImageTitle = ({
  siteTitle, title, text, image1, includeDownload, width
}) => {
  const img = <img src={image1} className="img-fluid" alt="" width="100%" height="100%" />;
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
                {width > 992 && (
                  <div style={{ float: "left", marginRight: 20, marginTop: 5 }}>
                    <img
                      alt={`${Settings.appName} logo`}
                      src={Settings.assets.logo}
                      width={80}
                      height={80}
                    />
                  </div>
                )}

                <div
                  style={{
                    display: "flex",
                    // #toRemember: display flex is needed to do flexbox things, otherwise it does nothing.
                    alignItems: "center"
                  }}
                >
                  <h1 style={{ fontWeight: "bold", fontFamily: Settings.style.fontFamily.title }}>
                    {title}
                  </h1>
                </div>
              </div>

              <div style={{ marginTop: 10 }}>
                <ReactMarkdown source={text} linkTarget="_blank" />
              </div>
              {!(includeDownload === false) && <Download />}
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

ImageTitle.propTypes = {
  isNoPhone: PropTypes.bool,
  googlePlayDownloadLink: PropTypes.string,
  appStoreDownloadLink: PropTypes.string
};

ImageTitle.defaultProps = {
  isNoPhone: false,
  googlePlayDownloadLink: null,
  appStoreDownloadLink: null
};

export default ImageTitle;
