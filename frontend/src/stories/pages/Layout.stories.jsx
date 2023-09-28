import React from 'react';

import Layout from '../../pages/components/Layout';
import { Decorators } from '../Decorators';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Pages/Layout',
  component: Layout,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { Layout: 'color' },
  },
  decorators: [
    Decorators,
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => { return <Layout {...args} />; };

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {

};
