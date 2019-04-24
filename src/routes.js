import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import PrivacyPage from "./pages/Privacy";
import UnsubscribePage from "./pages/Unsubscribe";
import RedirectPage from "./pages/Redirect";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import Settings from "settings/index";


const client = new ApolloClient({
  uri: Settings.apiUrl
});


const Routes = props => (
  <ApolloProvider client={client}>
    <Router {...props} basename={process.env.PUBLIC_URL}>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route path="/privacy" component={PrivacyPage} />
        <Route path="/unsubscribe" component={UnsubscribePage} />
        <Route path="/app" component={RedirectPage} />
      </div>
    </Router>
  </ApolloProvider>
);

export default Routes;
