/** @type { import('@storybook/react-vite').StorybookConfig } */
import { withRouter } from 'storybook-addon-react-router-v6';
import { MemoryRouter } from "react-router";

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "npm install storybook-addon-react-router-v6"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  decorators: [withRouter],
};
export default config;
