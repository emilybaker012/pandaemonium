import React from 'react';
import LoginForm from '../../../features/login/LoginForm';
import { Decorators } from '../../Decorators';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Features/Login/LoginForm',
  component: LoginForm,
  decorators: [Decorators],
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = () => { return <LoginForm />; };

export const Login = Template.bind({});
