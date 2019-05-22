import React from "react";
import { Container } from "reactstrap";
import ReactMarkdown from "react-markdown";

/**
 * A Privacy page
 */
const MarkdownSection = ({ markdown, linkTarget }) => (
  <Container style={{ padding: 20, marginTop: 30 }}>
    <ReactMarkdown
      source={markdown}
      linkTarget={linkTarget !== undefined ? linkTarget : "_blank"}
    />
  </Container>
);

export default MarkdownSection;
