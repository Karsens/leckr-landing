// Global Styles
import React from "react";
import Drift from "react-driftjs";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

import "typeface-catamaran"; // eslint-disable-line
import "font-awesome/css/font-awesome.css";
import "simple-line-icons/css/simple-line-icons.css";
import "html5-device-mockups/dist/device-mockups.css";


import PageLayout from "components/PageLayout";
import "./style.css";

// settings
import Settings from "settings/index";
import { getCopySettings } from "util/index";

// components
import Masthead from "components/Masthead";
import Stats from "components/Stats";
import Blog from "components/Blog";

const Video = Blog;// not really

/**
 * The home page
 */
class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }


  // setting the title:
  componentDidMount() {
    const copySettings = getCopySettings(this.props.location.search);
    document.title = copySettings.siteTitle;
    // #todo - work with react helmet instead
  }

  render() {
    const data = this.props.data;
    if (data.eror) {
      console.log(data.error);
    }

    const mediumArticles = data.web && data.web.mediumArticles;


    return (
      <PageLayout sections={Settings.menu}>


        {Settings.homeSections.map(({ type, options }) => {
          switch (type) {
            case "masthead":

              return (<Masthead
                options={options}
                query={this.props.location.search}
                socialNetworks={Settings.socialNetworks}
                googlePlayDownloadLink={Settings.downloadPlaystoreUrl}
                appStoreDownloadLink={Settings.downloadAppstoreUrl}
                demoScreen={Settings.assets.demoScreen}
              />);

            case "video":


              return (<Video
                options={options}
                url={Settings.videoUrl}
              />);

            case "stats":

                return <Stats data={data} />;

            case "story":
              console.log("story block");

              break;
            case "features":
              console.log("features block");

              break;
            case "blogs":

            return <Blog posts={mediumArticles} />;


            case "reviews":

              console.log("reviews block");

              break;
            case "team":

              console.log("team block");

              break;

            default:
              console.log("Hmmmm", type);
          }
        })}

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
