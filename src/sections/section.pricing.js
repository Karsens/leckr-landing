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

const colors = ["blue", "green", "purple", "red"];

const renderFeature = (feature: string, available: boolean) => (
  <View style={{ display: "flex", alignItems: "center" }}>
    <Icon
      family="simple"
      name={available ? "check" : "close"}
      style={{ color: available ? "green" : "red" }}
    />
    <Text style={{ margin: 5 }}>{feature}</Text>
  </View>
);
const Pricing = ({ packages }) => (
  <Container>
    <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {packages.map((item, index) => {
        const color = colors[index];

        const previous = packages[index - 1];
        return (
          <View
            style={{
              margin: 10,
              padding: 10,
              flex: 1,
              minWidth: 200
            }}
          >
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
                  flex: 1,
                  fontWeight: "bold",
                  color,
                  textAlign: "center"
                }}
              >
                {item.name}
              </H1>

              <View style={{ flex: 1, flexDirection: "column" }}>
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
                  title={item.buttonTitle || `Get ${item.name}`}
                  onPress={() => (window.location = item.link)}
                />
              )}
            </View>

            <View
              style={{
                margin: 10,
                padding: 10,
                flex: 1
              }}
            >
              <H3 style={{ color }}>
                {item.name}
                {" "}
includes
              </H3>

              <Text style={{ color }}>
                {previous ? `Everything in ${previous.name}, and:` : "All of these features:"}
              </Text>

              <View style={{ height: 1, backgroundColor: color, width: "100%" }} />

              <Text style={{ flex: 1, color }}>{item.description}</Text>

              {item.features && item.features.map(feature => renderFeature(feature, true))}
              {item.notFeatures && item.notFeatures.map(feature => renderFeature(feature, false))}
            </View>
          </View>
        );
      })}
    </View>
  </Container>
);

export default Pricing;
