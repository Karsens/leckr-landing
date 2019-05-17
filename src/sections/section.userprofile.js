import React from "react";
import { Container } from "reactstrap";

import Settings from "settings/index";

const UserProfile = () => (
  <Container>
    <h2>Wijnand Karsens</h2>
    <p>
      <b>Number:</b> <a href="tel:+31681904650">+31681904650</a>
    </p>
    <p>
      <b>Email:</b> <a href="mailto:karsens@outlook.com">karsens@outlook.com</a>
    </p>
    <p>
      <i>Great to meet you!</i>
    </p>
  </Container>
);

export default UserProfile;
