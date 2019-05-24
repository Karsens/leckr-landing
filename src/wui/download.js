import React from "react";
import { View } from "../util/react-native";
import Settings from "../settings";
// a basic form

import SocialButton from "../dui/SocialButton";
import MailChimpForm from "./mailchimpform";

import googlePlayBadge from "../settings/assets/google-play-badge.svg";
import appStoreBadge from "../settings/assets/app-store-badge.svg";

const socialNetworks = [];

class Download extends React.Component {
  state = {
    value: ""
  };

  render() {
    return (
      <View>
        {Settings.mailChimpSubscribeUrl && <MailChimpForm />}

        <div className="badges">
          <div className="badge-item">
            {Settings.googlePlayDownloadLink && (
              <a className="badge-link" href={Settings.googlePlayDownloadLink}>
                <img src={googlePlayBadge} alt="" />
              </a>
            )}
          </div>

          <div className="badge-item">
            {Settings.appStoreDownloadLink && (
              <a className="badge-link" href={Settings.appStoreDownloadLink}>
                <img src={appStoreBadge} alt="" />
              </a>
            )}
          </div>

          <div className="badge-item contact">
            {socialNetworks.map(({ id, ...props }) => (
              <SocialButton {...props} element="div" key={id} />
            ))}
          </div>
        </div>
      </View>
    );
  }
}

export default Download;
