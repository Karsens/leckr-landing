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
      {Settings.emailSuccessText}
    </Container>
  </PageLayout>
);

export default EmailSuccess;
