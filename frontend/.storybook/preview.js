/** @type { import('@storybook/react').Preview } */
import '../src/common/styles/custom.scss';

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'centered'
  },
};

export default preview;
