import React from "react";
import PropTypes from "prop-types";
import { Container } from "reactstrap";

import "./style.css";

const propTypes = {
  posts: PropTypes.array.isRequired
};

/**
 * A presentational component for a 'call to action' section
 */
const News = ({ posts }) => (
  <header className="cta overlay">
    <a name="news" />
    <Container>
      <br />
      <h1>Our blog</h1>
      <div style={{ flexDirection: "row", display: "flex", flexWrap: "wrap" }}>
        {posts &&
          posts.length > 0 &&
          posts.map((c, i) => {
            return (
              <a key={i} href={c.link} target="_blank">
                <div
                  style={{
                    margin: 10,
                    textAlign: "center"
                  }}
                >
                  <div
                    style={{
                      width: 200,
                      height: 200,
                      borderRadius: 20,
                      backgroundColor: "transparent"
                    }}
                  >
                    <img
                      style={{
                        maxWidth: 200,
                        maxHeight: 200
                      }}
                      height="auto"
                      width="auto"
                      alt={c.title}
                      src={c.figure}
                    />
                  </div>
                  <p
                    style={{
                      marginTop: 10,
                      textAlign: "center",
                      width: 200,
                      fontSize: 20,
                      color: "white"
                    }}
                  >
                    {c.title}
                  </p>
                </div>
              </a>
            );
          })}
      </div>
    </Container>
  </header>
);

News.propTypes = propTypes;

export default News;
