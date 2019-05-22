import React from "react";
import { Container } from "reactstrap";

import {
  View, Text, H1, H3
} from "../util/react-native";
import Button from "../dui/button";
/**
 * column for every package
 */

import Icon from "../dui/Icon";

const colors = ["green", "blue", "purple", "red"];

const PRICING_WIDTH = 250;

class Pricing extends React.Component {
  renderFeature = (feature: string, available: boolean) => (
    <View style={{ display: "flex", alignItems: "center" }}>
      <Icon
        family="simple"
        name={available ? "check" : "close"}
        style={{ color: available ? "green" : "red" }}
      />
      <Text style={{ margin: 5, maxWidth: "60vw" }}>{feature}</Text>
    </View>
  );

  renderHeader(item, index) {
    const { titleFontSize, buttonTitle } = this.props;
    const color = item.color || colors[index % colors.length];

    return (
      <View
        style={{
          borderRadius: 5,
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
          border: `2px solid ${color}`
        }}
      >
        <H1
          style={{
            flex: "1 0 auto",
            fontWeight: "bold",
            fontSize: titleFontSize,
            color,
            textAlign: "center"
          }}
        >
          {item.name}
        </H1>
        {item.nameDescription && (
          <Text
            style={{
              color,
              position: "absolute",
              textAlign: "center",
              marginTop: -20,
              width: PRICING_WIDTH - 30 //30 padding and margins
            }}
          >
            {item.nameDescription}
          </Text>
        )}

        <View style={{ flex: "1 0 auto", flexDirection: "column" }}>
          <Text
            style={{
              color,
              fontSize: 80,
              textAlign: "center",
              fontWeight: 100
            }}
          >
            {item.price}
          </Text>
          <Text
            style={{
              marginTop: -50,
              color,
              textAlign: "center",
              fontWeight: 100
            }}
          >
            {item.priceDescription || "Limited Edition"}
          </Text>
        </View>

        {item.link && (
          <Button
            color={color}
            style={{ flex: 1 }}
            title={item.buttonTitle || buttonTitle || `Get ${item.name}`}
            onPress={() => (window.location = item.link)}
          />
        )}
      </View>
    );
  }

  renderFeatures(item, index) {
    const { packages, isIncremental, titleFontSize } = this.props;
    const color = item.color || colors[index % colors.length];

    const previous = packages[index - 1];

    return (
      <View
        style={{
          margin: 10,
          padding: 10,
          flex: 1
        }}
      >
        <H3 style={{ color, fontSize: titleFontSize }}>
          {item.name}
          {" "}
includes
        </H3>

        {isIncremental === false ? null : (
          <Text style={{ color }}>
            {previous ? `Everything in ${previous.name}, and:` : "All of these features:"}
          </Text>
        )}

        <View style={{ height: 1, backgroundColor: color, width: "100%" }} />

        {item.features && item.features.map(feature => this.renderFeature(feature, true))}
        {item.notFeatures && item.notFeatures.map(feature => this.renderFeature(feature, false))}
      </View>
    );
  }

  render() {
    const { packages } = this.props;

    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const flexGoodForIOS = isIOS ? "1 0 auto" : 1;
    /**
     * This is a problem with flex-wrap on older safari versions (ios <10.3)
     *
     * Beware of this! Also test for older safari browsers and older android browsers.
     * With flexbox especially, issues may arise...
     */

    return (
      <Container>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap"
          }}
        >
          {packages.map((item, index) => (
            <View
              style={{
                margin: 10,
                padding: 10,
                flex: flexGoodForIOS,
                minWidth: PRICING_WIDTH
              }}
            >
              {this.renderHeader(item, index)}

              {this.renderFeatures(item, index)}
            </View>
          ))}
        </View>
      </Container>
    );
  }
}

export default Pricing;
