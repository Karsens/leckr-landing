
import React from "react";

import Settings from "settings/index";

const getMobileOperatingSystem = () => {
  const navigator = window.navigator;

  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

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

const Redirect = ({ location }) => {
  const schemeUrl = `${Settings.appSchemeUrl}${location.search}`;

  const os = getMobileOperatingSystem();


  window.location.assign(schemeUrl);

  if (os === "iOS") {
    setTimeout(() => window.location.assign(Settings.downloadAppstoreUrl), 500);
  } else if (os === "Android") {
    setTimeout(() => window.location.assign(Settings.downloadPlaystoreUrl), 500);
  } else {
    // to-do, should add QR Code here since you're not gonna be on your phone here.
    return (
      <div>
        <a href={Settings.downloadPlaystoreUrl}>Download for iOS</a> |
        <a href={Settings.downloadPlaystoreUrl}>Download for Android</a>
      </div>
    );
  }

  return <p>Redirecting</p>;
};

export default Redirect;
