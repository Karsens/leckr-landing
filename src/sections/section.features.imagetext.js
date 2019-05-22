import React from "react";
import PropTypes from "prop-types";
import ImageTextSection from "./section.imagetext";
import { View } from "../util/react-native";

class ImageTextFeatures extends React.Component {
  render() {
    const { features, marqueeTitle } = this.props;

    return (
      <View>
        {marqueeTitle && (
          <marquee>
            <h2>{marqueeTitle}</h2>
          </marquee>
        )}
        {features.map((feature, index) => (
          <ImageTextSection {...feature} opposite={index % 2 === 0} />
        ))}
      </View>
    );
  }
}

ImageTextSection.propTypes = {
  features: PropTypes.array
};

ImageTextSection.defaultProps = {
  features: []
};

export default ImageTextFeatures;
