import React from "react";
import { Container } from "reactstrap";
import ReactMarkdown from "react-markdown";

/**
 * A Privacy page
 */
const MarkdownSection = ({ markdown }) => (
  <Container style={{ padding: 20 }}>
    <ReactMarkdown source={markdown} linkTarget="_blank" />
  </Container>
);

export default MarkdownSection;
