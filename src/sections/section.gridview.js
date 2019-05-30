import React from "react";
import PropTypes from "prop-types";
import { View } from "../util/react-native";

class GridView extends React.Component {
  render() {
    const { grid } = this.props;

    return (
      <View>
        {grid.map(({ image, title, url }, index) => (
          <a href={url} rel="noopener noreferrer" target="_blank">
            <div>
              <img src={image} alt="" width="100%" height="100%" />
              <p>{title}</p>
            </div>
          </a>
        ))}
      </View>
    );
  }
}

GridView.propTypes = {
  grid: PropTypes.array
};

GridView.defaultProps = {
  grid: []
};

export default GridView;
