import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import PrivacyPage from "./pages/Privacy";
import UnsubscribePage from "./pages/Unsubscribe";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const remote = "https://server.communify.cc";

const client = new ApolloClient({
  uri: remote
});

const getMobileOperatingSystem = () => {
  const navigator = window.navigator;

  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return "Windows Phone";
  }

  if (/android/i.test(userAgent)) {
    return "Android";
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS";
  }

  return "unknown";
};

const redirectComponent = ({ location }) => {
  const schemeUrl = `communify://communify.cc/${location.search}`;

  const os = getMobileOperatingSystem();

  const DOWNLOAD_APPSTORE =
    "https://itunes.apple.com/gb/app/communify/id1366552547?mt=8";
  const DOWNLOAD_GOOGLEPLAY =
    "https://play.google.com/store/apps/details?id=com.progenworks.communify";

  window.location.assign(schemeUrl);

  if (os === "iOS") {
    setTimeout(() => window.location.assign(DOWNLOAD_APPSTORE), 500);
  } else if (os === "Android") {
    setTimeout(() => window.location.assign(DOWNLOAD_GOOGLEPLAY), 500);
  } else {
    return (
      <div>
        <a href={DOWNLOAD_APPSTORE}>Download for iOS</a> |
        <a href={DOWNLOAD_GOOGLEPLAY}>Download for Android</a>
      </div>
    );
  }

  return <p>Redirecting</p>;
};

const Routes = props => {
  console.log("LOGGING");
  return (
    <ApolloProvider client={client}>
      <Router {...props} basename={process.env.PUBLIC_URL}>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route path="/privacy" component={PrivacyPage} />
          <Route path="/unsubscribe" component={UnsubscribePage} />
          <Route path="/app" component={redirectComponent} />
        </div>
      </Router>
    </ApolloProvider>
  );
};

export default Routes;
