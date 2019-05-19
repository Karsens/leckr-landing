import React from "react";
import { Container } from "reactstrap";

const Button = ({ onPress, title }) => (
  <button
    type="button"
    style={{
      color: "white",
      backgroundColor: "darkblue",
      borderRadius: "10",
      width: "100%"
    }}
    onClick={onPress}
  >
    {title}
  </button>
);
/**
 * column for every package
 */
const Pricing = ({ packages }) => (
  <Container>
    <div style={{ display: "flex", flexDirection: "row" }}>
      {packages.map(item => (
        <div
          style={{
            margin: 10,
            padding: 10,
            flex: 1,
            borderRadius: 5,
            border: "1px solid black"
          }}
        >
          <p style={{ flex: 1 }}>
            <b>{item.name}</b>
          </p>
          <p style={{ flex: 1 }}>{item.description}</p>
          <p style={{ flex: 1 }}>
            <i>{item.price}</i>
          </p>

          {item.link && (
            <Button style={{ flex: 1 }} title="Pay" onPress={() => (window.location = item.link)} />
          )}
        </div>
      ))}
    </div>
  </Container>
);

export default Pricing;
