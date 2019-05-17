import React from "react";
import { Container } from "reactstrap";
import Settings from "../settings/index";

const propTypes = {};

const defaultProps = {};

/**
 * A component for a features section.
 */
const EmailSuccess = () => <Container>{Settings.emailSuccessText}</Container>;

EmailSuccess.propTypes = propTypes;
EmailSuccess.defaultProps = defaultProps;

export default EmailSuccess;
