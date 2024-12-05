import React from "react";
import "../src/main.css";

const preview = {
  decorators: [(storyFn) => <>{storyFn()}</>],
};

export default preview;
