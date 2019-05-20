import React from "react";
import PropTypes from "prop-types";
import { Container } from "reactstrap";
import ReactMarkdown from "react-markdown";
import { View, H1 } from "../util/react-native";

/**
 * In the end, this component should be able to render video's too. On mollie.com, jpg's change into video once the video is loaded. This should be doable.
 *
 * #todo
 * - [ ] Align picture right
 * - [ ] Add video mp4 prop & render it the way mollie does
 * - [ ] on mobile, text should always be below image. uniformity
 */
class ImageTextSection extends React.Component {
  renderText(title, text) {
    return (
      <View style={{ flex: 1, marginTop: 50 }}>
        <H1>{title}</H1>
        <View style={{ marginTop: 10 }}>
          <ReactMarkdown source={text} linkTarget="_blank" />
        </View>
      </View>
    );
  }

  renderImage(image, title) {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <img src={image} alt={title} width="50%" height="100%" />
      </View>
    );
  }

  render() {
    const {
      opposite, image, title, text
    } = this.props;

    const textRender = this.renderText(title, text);

    const imageRender = this.renderImage(image, title);

    const left = opposite ? textRender : imageRender;
    const right = opposite ? imageRender : textRender;

    return (
      <Container>
        <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
          {left}

          {right}
        </View>
      </Container>
    );
  }
}

ImageTextSection.propTypes = {
  opposite: PropTypes.bool,
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string
};

ImageTextSection.defaultProps = {
  opposite: false,
  image: null,
  title: null,
  text: null
};

export default ImageTextSection;
