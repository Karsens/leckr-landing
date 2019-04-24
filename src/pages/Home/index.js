// Global Styles
import "typeface-catamaran"; // eslint-disable-line
import "font-awesome/css/font-awesome.css";
import "simple-line-icons/css/simple-line-icons.css";
import "html5-device-mockups/dist/device-mockups.css";
import React from "react";
import Drift from "react-driftjs";
import PageLayout from "../../components/PageLayout";
import Masthead from "../../components/Masthead";
import Directory from "../../components/Directory";
import News from "../../components/News";
import Icon from "../../components/Icon";
import demoScreen from "./images/app.gif";
import "./style.css";

import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const SECTIONS = [
  {
    title: "Download",
    id: "masthead"
  },
  {
    title: "Explore",
    id: "directory"
  },
  {
    title: "Blog",
    id: "news"
  }
];
const SOCIAL_NETWORKS = [
  {
    id: "facebook",
    text: "Like us",
    icon: <Icon family="fa" name="facebook" />,
    color: "#717fea",
    link: "https://www.facebook.com/CommunifyCoworking/"
  }
];

/**
 * The home page
 */
class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const data = this.props.data;
    if (data.eror) {
      console.log(data.error);
    }
    let stats = "Loading stats";
    let featured = {};
    let mediumArticles = [];
    if (data.web) {
      const users = data.web.users;
      const communities = data.web.communities;
      featured = data.web.featured;
      mediumArticles = data.web.mediumArticles;

      stats = `Join ${users} users in ${communities} communities`;
    }

    return (
      <PageLayout sections={SECTIONS}>
        <Masthead
          query={this.props.location.search}
          socialNetworks={SOCIAL_NETWORKS}
          googlePlayDownloadLink="https://play.google.com/store/apps/details?id=com.progenworks.communify"
          appStoreDownloadLink="https://itunes.apple.com/gb/app/communify/id1366552547?mt=8"
          demoScreen={demoScreen}
        />

        <Directory firstLine={stats} featured={featured} />
        <News posts={mediumArticles} />

        <Drift appId="p87nxp8v5kyi" />
      </PageLayout>
    );
  }
}

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
      mediumArticles {
        title
        link
        figure
      }
    }
  }
`;

export default graphql(WEB_QUERY)(HomePage);
