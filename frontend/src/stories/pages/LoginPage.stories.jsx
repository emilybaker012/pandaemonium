import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import LoginPage from '../../pages/LoginPage';

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
    (Story) => { return (<MemoryRouter><Story /></MemoryRouter>); },
  ],
};

const Template = (args) => { return <LoginPage {...args} />; };

export const Default = Template.bind({});
Default.args = {
  backgroundColor: 'gray',
};
