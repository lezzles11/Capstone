import React from "react";
import Footer from "./Footer";
import ShallowRenderer from "react-test-renderer/shallow";

it("Renders Footer", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Footer />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});
