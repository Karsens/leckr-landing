import React from "react";
import PropTypes from "prop-types";
import { Container } from "reactstrap";
// import { gql } from "apollo-boost";
// import { graphql } from "react-apollo";

import "./style.css";

const CARDSIZE = 300;

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

type Article = {
  id: string,
  date?: Date,
  title: string,
  link: string,
  figure: string // can be an URL, but can also be required image
};

class Blog extends React.Component {
  state = {
    hover: null,
    mediumArticles: [],
    ghostArticles: [],
    isLoading: true
  };

  async componentDidMount() {
    // const {
    //   title, mediumLink, ghostLink, articles
    // } = this.props;

    // await this.fetchMedium(mediumLink);

    // await this.fetchGhost(ghostLink);

    this.setState({ isLoading: false });
  }

  async fetchMedium(url): Article[] {
    if (!url) return null;

    //returns list of medium articles

    // const medium: Article[] = data && data.web && data.web.mediumArticles;

    return null;
  }

  async fetchGhost(url): Article[] {
    if (!url) return [];

    //returns list of medium articles

    return null;
  }

  render() {
    const { title, articles } = this.props;

    const { isLoading, mediumArticles, ghostArticles } = this.state;

    const allArticles = []
      .concat(articles, mediumArticles, ghostArticles)
      .sort((a: Article, b: Article) => a.date < b.date);

    const aStyle = id => ({
      color: "black",
      textDecoration: "none",
      transform: this.state.hover === id ? "scale(1.03)" : undefined
    });

    return (
      <header className="cta overlay">
        <Container>
          <br />
          <h1>{title}</h1>
          {isLoading && <p>Loading... </p>}

          <div style={{ flexDirection: "row", display: "flex", flexWrap: "wrap" }}>
            {allArticles
              && allArticles.length > 0
              && allArticles.map((c: Article) => (
                <a
                  onMouseEnter={() => this.setState({ hover: c.id })}
                  onMouseLeave={() => this.setState({ hover: null })}
                  style={aStyle(c.id)}
                  hover
                  key={`key-${c.id}`}
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    style={{
                      margin: 20,
                      backgroundColor: "white",
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      maxWidth: "20vw",
                      minWidth: CARDSIZE,
                      borderRadius: 5
                    }}
                  >
                    <div
                      style={{
                        flex: 1,
                        display: "flex",
                        borderRadius: 20,
                        backgroundColor: "transparent"
                      }}
                    >
                      <img
                        style={{
                          width: "100%",
                          height: "100%",
                          borderTopLeftRadius: 5,
                          borderTopRightRadius: 5
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
                        marginLeft: 10,
                        marginRight: 10,
                        fontSize: 20
                      }}
                    >
                      {c.title}
                    </p>

                    <p style={{ marginLeft: 10, marginRight: 10 }}>{c.description}</p>
                  </div>
                </a>
              ))}
          </div>
        </Container>
      </header>
    );
  }
}
const propTypes = {
  title: PropTypes.string,
  articles: PropTypes.object
};

Blog.propTypes = propTypes;
Blog.defaultProps = {
  title: "Our blog",
  articles: []
};

export default Blog;
