import React from "react";
import Navbar from "./Navbar";
import ShallowRenderer from "react-test-renderer/shallow";

it("Renders Navbar", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Navbar />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});
