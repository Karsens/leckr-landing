import React from "react";
import { Container } from "reactstrap";

const IMG_SIZE = 100;
/**
 * column for every package
 */
const Blurps = ({ blurps }) => (
  <Container>
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {blurps.map(item => (
        <div
          style={{
            margin: 10,
            padding: 10,
            borderRadius: 20,
            border: "1px solid black",
            minWidth: 200,
            flex: "1 0 auto"
          }}
        >
          <div
            style={{
              width: IMG_SIZE,
              height: IMG_SIZE,
              backgroundColor: "#CCC",
              borderRadius: IMG_SIZE / 2
            }}
          >
            <img alt={item.title} src={item.image} width={IMG_SIZE} height={IMG_SIZE} />
          </div>
          <p>
            <b>{item.title}</b>
          </p>
          <p>
            <i>{item.subtitle}</i>
          </p>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  </Container>
);

export default Blurps;
