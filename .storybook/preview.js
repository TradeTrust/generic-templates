import React from "react";
import { addDecorator } from "@storybook/react";
import "../src/main.css";

addDecorator((storyFn) => <>{storyFn()}</>);
