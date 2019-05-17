import React from "react";
const Text = ({ children, ...rest }) => <p {...rest}>{children}</p>;
const View = ({ children, ...rest }) => <div {...rest}>{children}</div>;

export { View, Text };
