import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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

function provideApolloProvider(props) {
  const { children } = props;
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

function viewWrapper(props) {
  const { children } = props;
  return <View>{children}</View>;
}

const ProvideApollo = client ? provideApolloProvider : viewWrapper;

class Routes extends React.Component {
  render() {
    const { props } = this;

    return (
      <ProvideApollo client={client}>
        <BrowserRouter {...props} basename={process.env.PUBLIC_URL}>
          <Switch>
            {pages.map((page, index) => {
              const { route } = page;
              const first = index === 0;
              const path = `/${route}`;

              const PageWithSearchObject = props => {
                const search = props.location && props.location.search && getLinkObject(props.location.search);

                return (
                  <Page {...props} pathname={props.location.pathname} search={search} {...page} />
                );
              };

              const pathOrNot = page.is404 ? undefined : { path };

              return (
                <Route
                  key={`route-${page.route}`}
                  exact={first}
                  {...pathOrNot}
                  component={PageWithSearchObject}
                />
              );
            })}
          </Switch>
        </BrowserRouter>
      </ProvideApollo>
    );
  }
}

export default Routes;
