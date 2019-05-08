import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import PrivacyPage from "./pages/Privacy";
import EmailSuccessPage from "./pages/EmailSuccess";
import UserProfilePage from "./pages/UserProfile";
import UnsubscribePage from "./pages/Unsubscribe";
import RedirectPage from "./pages/Redirect";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import Settings from "settings/index";

const client = new ApolloClient({
  uri: Settings.apiUrl
});


const Routes = (props) => (
  <ApolloProvider client={client}>
    <Router {...props} basename={process.env.PUBLIC_URL}>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route path="/privacy" component={PrivacyPage} />
        <Route path="/emailsuccess" component={EmailSuccessPage} />
        <Route path="/u" component={UserProfilePage} />
        <Route path="/unsubscribe" component={UnsubscribePage} />
        <Route path="/app" component={RedirectPage} />
      </div>
    </Router>
  </ApolloProvider>
);
// class Routes extends React.Component {
//   render() {
//     const { props } = this;
//     return
//   }
// }

export default Routes;
