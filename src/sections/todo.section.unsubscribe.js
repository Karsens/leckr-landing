import React, { Component } from "react";
import { Link } from "react-router-dom";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
import { Container } from "reactstrap";

import { getLinkObject } from "import";

import PageLayout from "layout/PageLayout";

class UnsubscribeButton extends Component {
  constructor(props) {
    super(props);
    this.state = { result: null };
  }

  handleSubmit(variables) {
    this.setState({ result: "Loading..." });
    if (this.props.mutate) {
      return this.props
        .mutate(variables)
        .then(({ data }) =>
          this.setState({ result: data.saveSettingsFromEmail })
        )
        .catch(e => console.log(e));
    }
    return "no mutation provided";
  }

  render() {
    const obj = getLinkObject(this.props.location.search);

    if (obj) {
      const { emailtoken, key, coid } = obj;

      console.log(obj);

      let page = null;
      if (this.state.result) {
        page = <p>{this.state.result}</p>;
      }

      page = (
        <div style={{ marginBottom: 50 }}>
          <div>
            <p>Are you sure?</p>
          </div>

          <div
            style={{
              flexDirection: "row"
            }}
          >
            <button
              onClick={() =>
                this.handleSubmit({ emailtoken, key, value: 0, coid })
              }
            >
              Yes
            </button>

            <Link style={{ marginLeft: 30 }} to="/">
              No
            </Link>
          </div>
        </div>
      );

      return <Container>{page}</Container>;
    }

    return null;
  }
}

const UNSUB_MUTATION = gql`
  mutation SaveSettingsFromEmail(
    $emailtoken: Int
    $key: String
    $value: Int
    $coid: Int
  ) {
    saveSettingsFromEmail(
      emailtoken: $emailtoken
      key: $key
      value: $value
      coid: $coid
    )
  }
`;

export default graphql(UNSUB_MUTATION)(UnsubscribeButton);
