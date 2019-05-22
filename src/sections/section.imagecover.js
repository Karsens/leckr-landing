import React from "react";
import { View, Image, Text } from "../util/react-native";
import Settings from "../settings";

const ImageCover = ({ title, description, image }) => (
  <View
    style={{
      marginTop: 50
    }}
  >
    <Image
      src={image}
      style={{
        position: "relative",
        width: "100%",
        maxHeight: 1000
      }}
    />
    <Text
      style={{
        position: "absolute",
        fontFamily: Settings.style.fontFamily.title,
        top: 50,
        width: "100%",
        padding: 15,
        fontSize: 20
      }}
    >
      {title}
    </Text>
  </View>
);

export default ImageCover;
