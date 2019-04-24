import React from "react";
import { Container } from "reactstrap";

import "./style.css";

/**
 * A presentational component for a 'call to action' section
 */

const SIZE = 60;

const firstLetters = text =>
  text
    .split(" ")
    .map(word => word.substring(0, 1))
    .join("")
    .substring(0, 2);

const stringToNumber = t =>
  parseInt(
    t
      .split("")
      .map(l => l.charCodeAt(0))
      .join(""),
    10
  ) % 1000000;

const colors = "#1abc9c, #f1c40f, #f39c12, #2ecc71, #27ae60, #27ae60, #e67e22, #3498db, #2980b9, #e74c3c, #c0392b, #9b59b6, #9b59b6, #ecf0f1, #bdc3c7, #34495e, #2c3e50, #2c3e50, #7f8c8d".split(
  ", "
);
const randomColor = id => colors[id % colors.length];

const CallToAction = ({ firstLine, featured }) => {
  return (
    <section className="bg-white">
      <div className="cta-content">
        <a name="directory" />
        <Container>
          <h4>{firstLine}</h4>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              flexWrap: "wrap"
            }}
          >
            {featured &&
              featured.length > 0 &&
              featured.map(c => {
                return (
                  <a href={`app/?code=${c.code}`}>
                    <div key={c.id} style={{ margin: 10 }}>
                      <div
                        style={{
                          width: SIZE,
                          height: SIZE,
                          borderRadius: SIZE / 4,
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: c.color1
                            ? c.color1
                            : randomColor(stringToNumber(c.name))
                        }}
                      >
                        {c.logo ? (
                          <img
                            style={{ borderRadius: SIZE / 4 }}
                            width={SIZE}
                            height={SIZE}
                            alt={c.name}
                            src={c.logo}
                          />
                        ) : (
                          <p
                            style={{
                              textAlign: "center",
                              paddingTop: SIZE / 4
                            }}
                          >
                            {firstLetters(c.name)}
                          </p>
                        )}
                      </div>
                      <p
                        style={{
                          marginTop: 10,
                          textAlign: "center",
                          width: SIZE,
                          fontSize: 10,
                          color: "black"
                        }}
                      >
                        {c.name}
                      </p>
                    </div>
                  </a>
                );
              })}
          </div>
        </Container>
      </div>
      <div className="overlay" />
    </section>
  );
};

export default CallToAction;
