import React from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

import { Container } from "reactstrap";
import { Options } from "../../settings/_types";

import { firstLetters, stringToNumber, randomColor } from "../../util/index";

import "./style.css";

/**
 * format a string to replace any {n} with all arguments given after.
 */
const formatText = (string: string, args: any[]) => {
  let result = string;
  args.forEach((arg, k) => {
    result = string.replace(`{${k}}`, arg);
  });

  return result;
};

/**
 * A presentational component for a 'stats' section
 */

const SIZE = 60;

const Stats = ({
  data, ref, text, loadingText
}: Options) => {
  let txt = loadingText;
  let featured = {};

  if (data.web) {
    const { users } = data.web;
    const { communities } = data.web;
    featured = data.web.featured;
    txt = formatText(text, [users, communities]);
  }

  return (
    <section className="bg-white">
      <div className="cta-content">
        {/* <a name="directory" /> */}
        <Container>
          <h4>{txt}</h4>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              flexWrap: "wrap"
            }}
          >
            {featured
              && featured.length > 0
              && featured.map(c => (
                <a href={`app/?code=${c.code}`}>
                  <div key={c.id} style={{ margin: 10 }}>
                    <div
                      style={{
                        width: SIZE,
                        height: SIZE,
                        borderRadius: SIZE / 4,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: c.color1 ? c.color1 : randomColor(stringToNumber(c.name))
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

const WEB_QUERY = gql`
  query Web {
    web {
      users
      communities
      featured {
        id
        name
        color1
        code
        logo
      }
    }
  }
`;

export default graphql(WEB_QUERY)(Stats);
