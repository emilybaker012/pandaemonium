import React from 'react';
import LoginCard from '../../../features/login/LoginCard';
import { Decorators } from '../../Decorators';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Features/Login/LoginCard',
  component: LoginCard,
  decorators: [
    Decorators,
  ],
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = () => {
  return (
    <LoginCard />
  );
};

export const Login = Template.bind({});
