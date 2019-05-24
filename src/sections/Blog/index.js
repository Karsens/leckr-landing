import React from "react";
import PropTypes from "prop-types";
import { Container } from "reactstrap";
import ReactMarkdown from "react-markdown";
// import { gql } from "apollo-boost";
// import { graphql } from "react-apollo";

import { View, Text } from "../../util/react-native";
import "./style.css";

import "whatwg-fetch"; // apparently, fetch isn't defined in safari on iOS otherwise!

const CARDSIZE = 300;

const cutOnWord = (text: string, characters: number, suffix: string): string => {
  if (!text) return "";
  if (text.length <= 100) return text;

  const words = text && text.substring(0, characters).split(" ");
  const wordsWithoutLast = words.slice(0, -1);
  const returnText = wordsWithoutLast.join(" ");
  return returnText + suffix;
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

type Article = {
  id: string,
  date?: Date,
  title: string,
  description: string,
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

  componentDidMount = () => {
    // const {
    //   title, mediumLink, ghostLink, articles
    // } = this.props;

    const { ghostLink } = this.props;

    // await this.fetchMedium(mediumLink);

    this.fetchGhost(ghostLink);

    this.setState({ isLoading: false });
  };

  fetchMedium(url): Article[] {
    if (!url) return null;

    //returns list of medium articles

    // const medium: Article[] = data && data.web && data.web.mediumArticles;

    return null;
  }

  fetchGhost(uri) {
    if (!uri) return;

    fetch(uri)
      .then(response => response.json())
      .then(({ posts }) => {
        this.setState({
          ghostArticles: posts.map(({
            id, created_at, title, excerpt, url, feature_image
          }) => ({
            id,
            date: created_at,
            title,
            description: excerpt,
            link: url,
            figure: feature_image && feature_image.replace("http:", "https:")
          }))
        });
      });
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

    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const flexGoodForIOS = isIOS ? "1 0 auto" : 1;

    return (
      <header className="overlay" style={{ backgroundColor: "#f4f8fb" }}>
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
                  key={`key-${c.id}`}
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    style={{
                      flex: flexGoodForIOS,
                      maxWidth: isIOS ? undefined : "20vw",
                      minWidth: CARDSIZE
                    }}
                  >
                    <div
                      style={{
                        margin: 20,
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "white",
                        boxShadow: "2px 3px 1px #EEE",
                        height: isIOS ? undefined : 500,
                        borderRadius: 5
                      }}
                    >
                      {c.figure && (
                        <div
                          style={{
                            flex: flexGoodForIOS,
                            display: "flex",
                            borderRadius: 20,
                            backgroundColor: "transparent"
                          }}
                        >
                          <img
                            style={{
                              width: "100%",
                              maxHeight: 200,
                              borderTopLeftRadius: 5,
                              borderTopRightRadius: 5
                            }}
                            // height="auto"
                            // width="auto"
                            alt={c.title}
                            src={c.figure}
                          />
                        </div>
                      )}

                      <Text
                        style={{
                          marginTop: 10,
                          marginLeft: 10,
                          marginRight: 10,
                          fontSize: 18,
                          fontWeight: "bold"
                        }}
                      >
                        {c.title}
                      </Text>

                      {c.description && (
                        <View style={{ marginLeft: 10, marginRight: 10 }}>
                          <ReactMarkdown
                            source={cutOnWord(c.description, 100, "...")}
                            linkTarget="_blank"
                          />
                        </View>
                      )}

                      <View style={{ flex: 1 }} />
                    </div>
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
  articles: PropTypes.array
};

Blog.propTypes = propTypes;
Blog.defaultProps = {
  title: "Our blog",
  articles: []
};

export default Blog;
