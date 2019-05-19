import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import Page from "./page";
import { getLinkObject } from "./util/index";
import Settings from "./settings";

const { pages, apiUrl } = Settings;

const client = new ApolloClient({
  uri: apiUrl
});

const Routes = props => {
  console.log("pages: ", pages.length);
  return (
    <ApolloProvider client={client}>
      <BrowserRouter {...props} basename={process.env.PUBLIC_URL}>
        <div>
          {pages.map((page, index) => {
            const { route } = page;
            const first = index === 0;
            const path = `/${route}`;

            const PageWithSearchObject = props => {
              const search = props.location && props.location.search && getLinkObject(props.location.search);

              return <Page {...props} search={search} {...page} />;
            };
            return <Route exact={first} path={path} component={PageWithSearchObject} />;
          })}
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default Routes;
