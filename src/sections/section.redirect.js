import React from "react";
import { Container } from "reactstrap";
import { Redirect } from "react-router-dom";
import { getObjectLink } from "../util/index";

/**
 * A Privacy page
 */
const MarkdownSection = ({ redirectToUrlWith, pathname, search }) => {
  const newUrl = redirectToUrlWith(pathname, getObjectLink(search));
  window.location.replace(newUrl);

  return <Container />;
};

export default MarkdownSection;
