import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import { View, H3 } from "../util/react-native";

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
      <View
        style={{
          flex: 1
        }}
      >
        <View style={{ marginTop: 30, paddingLeft: 30, paddingRight: 30 }}>
          <H3>{title}</H3>
          <View style={{ marginTop: 10 }}>
            <ReactMarkdown source={text} linkTarget="_blank" />
          </View>
        </View>
      </View>
    );
  }

  renderImage(image, title) {
    return (
      <View
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center"
        }}
      >
        <img src={image} alt={title} width="100%" height="auto" />
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
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          backgroundColor: opposite ? "#EEE" : undefined
        }}
      >
        {left}

        {right}
      </View>
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
