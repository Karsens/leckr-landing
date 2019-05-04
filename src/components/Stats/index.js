import React from "react";
import { Container } from "reactstrap";
import Settings from "settings/index";
import { firstLetters, stringToNumber, randomColor } from "util/index";

import "./style.css";

/**
 * A presentational component for a 'call to action' section
 */

const SIZE = 60;

const Stats = ({ data }) => {
  let stats = Settings.stats.loadingText;
  let featured = {};

  if (data.web) {
    const users = data.web.users;
    const communities = data.web.communities;
    featured = data.web.featured;
    stats = Settings.stats.text.format(users, communities);
  }

  return (
    <section className="bg-white">
      <div className="cta-content">
        <a name="directory" />
        <Container>
          <h4>{stats}</h4>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              flexWrap: "wrap"
            }}
          >
            {featured &&
              featured.length > 0 &&
              featured.map(c => (
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
                ))}
          </div>
        </Container>
      </div>
      <div className="overlay" />
    </section>
  );
};

export default Stats;
