import React from "react";
import { shallow } from "enzyme";

import CallToAction from "./index";

describe("News", () => {
  it("renders without crashing", () => {
    const props = {
      posts: {}
    };
    shallow(<CallToAction {...props} />);
  });
});
