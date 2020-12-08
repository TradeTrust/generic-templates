import { withKnobs } from "@storybook/addon-knobs";
import { addDecorator, configure } from "@storybook/react";

configure(require.context("../src", true, /\.stories\.(tsx|js|mdx)$/), module);
addDecorator(withKnobs);
