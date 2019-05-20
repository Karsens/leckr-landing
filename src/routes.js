import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import { View } from "./util/react-native";
import Page from "./page";
import { getLinkObject } from "./util/index";
import Settings from "./settings";

const { pages, apiUrl } = Settings;

const client = apiUrl
  && new ApolloClient({
    uri: apiUrl
  });

const ProvideApollo = client
  ? ({ children }) => <ApolloProvider client={client}>{children}</ApolloProvider>
  : ({ children }) => <View>{children}</View>;

const Routes = props => (
  <ProvideApollo client={client}>
    <BrowserRouter {...props} basename={process.env.PUBLIC_URL}>
      <div>test 123</div>
      <View>
        {pages.map((page, index) => {
          const { route } = page;
          const first = index === 0;
          const path = `/${route}`;

          const PageWithSearchObject = props => {
            const search = props.location && props.location.search && getLinkObject(props.location.search);

            return <Page {...props} pathname={props.location.pathname} search={search} {...page} />;
          };

          return (
            <Route
              key={`route-${page.route}`}
              exact={first}
              path={path}
              component={PageWithSearchObject}
            />
          );
        })}
      </View>
    </BrowserRouter>
  </ProvideApollo>
);

export default Routes;
