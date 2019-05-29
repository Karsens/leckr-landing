import React from "react";
import { Container } from "reactstrap";
import ReactMarkdown from "react-markdown";

/**
 * A Privacy page
 */
class MarkdownSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      source: props.markdown
    };
  }

  componentDidMount() {
    if (this.props.url) {
      this.getMarkdown(this.props.url);
    }
  }

  getMarkdown(url) {
    fetch(url)
      .then(response => response.text())
      .then(source => {
        this.setState({ source });
      });
  }

  render() {
    const { markdown, linkTarget, url } = this.props;
    const { source } = this.state;

    return (
      <Container style={{ padding: 20, marginTop: 30 }}>
        <ReactMarkdown
          source={source}
          linkTarget={linkTarget !== undefined ? linkTarget : "_blank"}
        />
      </Container>
    );
  }
}

export default MarkdownSection;
