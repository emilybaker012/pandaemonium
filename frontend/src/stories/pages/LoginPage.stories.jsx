import React from 'react';
import LoginPage from '../../pages/LoginPage';
import { Decorators } from '../Decorators';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Pages/LoginPage',
  component: LoginPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    Decorators,
  ],
};

const Template = (args) => { return <LoginPage {...args} />; };

export const Default = Template.bind({});
Default.args = {
  backgroundColor: 'gray',
};
