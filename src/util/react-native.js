import React from "react";

const Text = ({ children, ...rest }) => <p {...rest}>{children}</p>;
const View = ({ children, ...rest }) => <div {...rest}>{children}</div>;
const Image = ({ children, alt, ...rest }) => (
  <img alt={alt} {...rest}>
    {children}
  </img>
);
const H1 = ({ children, ...rest }) => <h1 {...rest}>{children}</h1>;
const H2 = ({ children, ...rest }) => <h2 {...rest}>{children}</h2>;
const H3 = ({ children, ...rest }) => <h3 {...rest}>{children}</h3>;
const Header = ({ children, ...rest }) => <header {...rest}>{children}</header>;
const TouchableOpacity = ({ children, href, ...rest }) => (
  <a href={href} {...rest}>
    {children}
  </a>
);
const TouchableWithoutOpacity = ({ children, href, ...rest }) => (
  <a href={href} {...rest}>
    {children}
  </a>
);
export {
  View, Text, Image, H1, H2, H3, Header, TouchableOpacity, TouchableWithoutOpacity
};
