import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";
import { View, Text } from "../util/react-native";

import normalize from "../util/normalize-string";
import FeatureCard, { propTypes as featurePropTypes } from "../dui/FeatureCard";
import DeviceMockup from "../dui/DeviceMockup";
import { FeaturesOptions, Feature } from "../settings/_types";

const propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.shape(featurePropTypes)).isRequired,
  demoScreen: PropTypes.string.isRequired
};

const defaultProps = {
  subtitle: ""
};

/**
 * A component for a features section.
 */
const Features = ({
  title, subtitle, features, image1
}: FeaturesOptions) => {
  if (!features) {
    return (
      <View>
        <Text>No features given!</Text>
      </View>
    );
  }
  // Group features in pairs to display each pair in a row
  const pairs = features.reduce((list, value, index, array) => {
    if (index % 2 === 0) {
      list.push(array.slice(index, index + 2));
    }
    return list;
  }, []);

  return (
    <section className="features" id="features">
      <Container>
        <View style={{ textAlign: "center", marginBottom: 100 }}>
          <h2 style={{ marginTop: 0 }}>{title}</h2>
          <p style={{ marginBottom: 0 }}>{subtitle}</p>
          <hr />
        </View>
        <Row>
          <Col lg="4" xs="12" className="my-auto">
            <DeviceMockup device="iPhone6Plus" orientation="portrait" color="white">
              <img src={image1} className="img-fluid" alt="" />
            </DeviceMockup>
          </Col>
          <Col lg="8" xs="12" className="my-auto">
            <Container fluid>
              {pairs.map(pair => (
                <Row key={normalize(pair.map(item => item.title).join("-"))}>
                  {pair.map((item: Feature) => (
                    <div className="col-lg-6" key={normalize(item.title)}>
                      <FeatureCard {...item} />
                    </div>
                  ))}
                </Row>
              ))}
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

Features.propTypes = propTypes;
Features.defaultProps = defaultProps;

export default Features;
