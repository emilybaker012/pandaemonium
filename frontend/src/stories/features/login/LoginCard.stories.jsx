import React from 'react';
import LoginCard from '../../../features/login/LoginCard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Features/Login/LoginCard',
  component: LoginCard,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = () => {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <LoginCard />;
    </div>
  );
};

export const Login = Template.bind({});
