import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import Navigation from "../Navigation";
import Footer from "../Footer";
import "./style.css";

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  internalPage: PropTypes.bool
};

const defaultProps = {
  children: null,
  internalPage: false
};

/**
 * A page layout component including common bits to all pages.
 */
const PageLayout = ({ children, internalPage }) => (
  <div className={classnames("app", { "internal-page": internalPage })}>
    <Navigation />
    {children}
    <Footer />
  </div>
);

PageLayout.propTypes = propTypes;
PageLayout.defaultProps = defaultProps;

export default PageLayout;