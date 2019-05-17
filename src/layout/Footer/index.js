import React from "react";
import { Container } from "reactstrap";

import normalize from "util/normalize-string";
import "./style.css";

import Settings from "settings";

const { pages } = Settings;

const links = pages.filter(page => page.showInFooter);
/**
 * The footer presentational component
 */
const Footer = () => (
  <footer>
    <Container>
      <p>
        &copy; {Settings.copyrightYear} {Settings.appName}. All Rights Reserved.
      </p>
      <ul className="list-inline">
        {links.map(({ title, route }) => (
          <li className="list-inline-item" key={normalize(title)}>
            <a href={route}>{title}</a>
          </li>
        ))}
      </ul>
    </Container>
  </footer>
);

export default Footer;
