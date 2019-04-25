// Global Styles
import "typeface-catamaran"; // eslint-disable-line
import "font-awesome/css/font-awesome.css";
import "simple-line-icons/css/simple-line-icons.css";
import "html5-device-mockups/dist/device-mockups.css";
import React from "react";
import Drift from "react-driftjs";
import PageLayout from "components/PageLayout";
import Masthead from "components/Masthead";
import Directory from "components/Directory";
import News from "components/News";
import "./style.css";
import Settings from "settings/index";

import { gql } from "apollo-boost";
import { graphql } from "react-apollo";


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

      stats = `Join ${users} coworkers in ${communities} communities`;
    }

    return (
      <PageLayout sections={Settings.sections}>
        <Masthead
          query={this.props.location.search}
          socialNetworks={Settings.socialNetworks}
          googlePlayDownloadLink={Settings.downloadPlaystoreUrl}
          appStoreDownloadLink={Settings.downloadAppstoreUrl}
          demoScreen={Settings.assets.demoScreen}
        />

        <Directory firstLine={stats} featured={featured} />
        <News posts={mediumArticles} />

        <Drift appId={Settings.driftId} />


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
