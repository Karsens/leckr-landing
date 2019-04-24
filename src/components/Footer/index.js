import React from "react";
import { Container } from "reactstrap";

import normalize from "../../services/normalize-string";
import "./style.css";

const LINKS = [
  {
    title: "Privacy",
    link: "/privacy"
  },

  {
    title: "Communify Open",
    link: "https://github.com/EAT-CODE-KITE-REPEAT/communify-open"
  }
];

/**
 * The footer presentational component
 */
const Footer = () => (
  <footer>
    <Container>
      <p>&copy; 2017 Communify. All Rights Reserved.</p>
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
