import React from "react";

import Settings from "../settings";
// a basic form

class MailChimpForm extends React.Component {
  state = {
    value: ""
  };

  render() {
    const categories = Settings.mailChimpCategories;
    const subscribeUrl = Settings.mailChimpSubscribeUrl;

    return (
      <div>
        <link
          href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css"
          rel="stylesheet"
          type="text/css"
        />

        <div
          style={{
            marginTop: 35,
            clear: "left",
            font: "14px Helvetica,Arial,sans-serif",
            width: "100%"
          }}
        >
          <form
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            // target="_blank"
            noValidate
            action={subscribeUrl}
          >
            <div id="mc_embed_signup_scroll">
              {categories && (
                <div>
                  <strong style={{ fontSize: 20 }}>What do you want to know more about? </strong>
                  <ul style={{ listStyle: "none", margin: 10 }}>
                    {categories.map(({ group, value, label }, index) => (
                      <li key={`group-${group}-${value}`}>
                        <input
                          type="checkbox"
                          value={value}
                          name={`group[${group}][${value}]`}
                          id={`mce-group[${group}]-${group}-${index}`}
                        />
                        <label
                          style={{ marginLeft: 10 }}
                          htmlFor={`mce-group[${group}]-${group}-${index}`}
                        >
                          {label}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <input
                style={{
                  float: "left",
                  borderRadius: 10,
                  fontSize: 30,
                  paddingLeft: 10,
                  paddingRight: 10,
                  marginTop: 10,
                  marginBottom: 10,
                  width: "100%",
                  //backgroundColor: Settings.colors.primary,
                  borderTopColor: Settings.colors.primaryLighter,
                  borderBottomColor: Settings.colors.primaryDarker,
                  borderRightColor: Settings.colors.primaryDarker,
                  borderLeftColor: Settings.colors.primaryLighter
                }}
                value={this.state.value}
                // ref="searchStringInput"
                onChange={({ value }) => this.setState({ value })}
                type="email"
                name="EMAIL"
                id="mce-EMAIL"
                placeholder="Your email"
                required
              />

              <div style={{ position: "absolute", left: -5000 }} aria-hidden="true">
                <input
                  type="text"
                  name="b_211c8e286b504f8faf1b92bb2_74a7bddfd2"
                  tabIndex="-1"
                  value=""
                  onChange={({ value }) => this.setState({ fakeValue: value })} //do this to prevent warning without having to use readonly
                />
              </div>
              <div className="clear">
                <input
                  style={{
                    borderRadius: 10,
                    marginTop: 10,
                    fontSize: 30,
                    width: "100%",
                    color: "#FFF",
                    backgroundColor: Settings.colors.primary,
                    borderTopColor: Settings.colors.primaryLighter,
                    borderBottomColor: Settings.colors.primaryDarker,
                    borderRightColor: Settings.colors.primaryDarker,
                    borderLeftColor: Settings.colors.primaryLighter
                  }}
                  type="submit"
                  value={Settings.mailFormTitle || "Get it"}
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default MailChimpForm;
