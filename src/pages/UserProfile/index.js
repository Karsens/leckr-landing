import React from "react";
import { Container } from "reactstrap";

import PageLayout from "../../components/PageLayout";
import Settings from "settings/index";

/**
 * A FAQ page
 */
const EmailSuccess = () => (
  <PageLayout internalPage>
    <Container>
      <h2>Wijnand Karsens</h2>
      <p><b>Number:</b> +31681904650</p>
      <p><b>Email:</b> karsens@outlook.com</p>
      <p><i>Great to meet you!</i></p>
    </Container>
  </PageLayout>
);

export default EmailSuccess;
