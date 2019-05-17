import React from "react";
import PropTypes from "prop-types";
import { Container } from "reactstrap";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

import "./style.css";

const propTypes = {
  data: PropTypes.object.isRequired
};

/**
 * Responsibility: This blog thingy now gets an input of blogs,
 * but blogs are always gotten from the internet. So why don't I just put an API here?
 *  It's better because then it kind of becomes a CMS powered page, not hardcoded.
 *
 * It could have multiple purposes:
 *
 * - Blogging for ourselves, on Medium.
 * - Blogging for ourselves on Ghost
 * - Crossposting interesting blogs I read before.
 * - Linking to interesting websites (medium articles) of other people,
 * that are social proof of the truth of my app
 * - Linking to scientific evidence
 * - Linking to books, maybe?
 *
 * This component is just presentational now. That's good.
 * I can make a wise wrapper that gets an api url
 * (and, optionally, a transformMap to transform wrong structures).
 * This wise thing, then gives the blogs to the presentational component.
 *
 * This presentational component can also present the same structure in different ways.
 *
 * - Grid view
 * - List view
 * - Just pictures
 * - Carousel, even
 *
 * In the end, it would be brilliant if people can even choose to subscribe
 * to different of these kind of feeds (by email, and by push notifications,
 * and by whatever). But let's not go there yet.
 */
const Blog = ({ data }) => {
  const posts = data && data.web && data.web.mediumArticles;

  return (
    <header className="cta overlay">
      {/* <a name="news"> gives warning.
    #todo make this work again for every section by making a wrapper
    around section that has this feature. */}
      <Container>
        <br />
        <h1>Our blog</h1>
        <div style={{ flexDirection: "row", display: "flex", flexWrap: "wrap" }}>
          {posts
            && posts.length > 0
            && posts.map(c => (
              <a key={`key-${c.id}`} href={c.link} target="_blank" rel="noopener noreferrer">
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
            ))}
        </div>
      </Container>
    </header>
  );
};

Blog.propTypes = propTypes;

const WEB_QUERY = gql`
  query Web {
    web {
      mediumArticles {
        title
        link
        figure
      }
    }
  }
`;

export default graphql(WEB_QUERY)(Blog);
