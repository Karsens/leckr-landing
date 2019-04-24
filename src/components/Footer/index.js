import React from "react";
import { Container } from "reactstrap";

import normalize from "../../services/normalize-string";
import "./style.css";

import Settings from "settings/index";

const LINKS = Settings.footerLinks;

/**
 * The footer presentational component
 */
const Footer = () => (
  <footer>
    <Container>
      <p>&copy; {Settings.copyrightYear} {Settings.appName}. All Rights Reserved.</p>
      <ul className="list-inline">
        {LINKS.map(({ title, link }) => (
          <li className="list-inline-item" key={normalize(title)}>
            <a href={link}>{title}</a>
          </li>
        ))}
      </ul>
    </Container>
  </footer>
);

export default Footer;
