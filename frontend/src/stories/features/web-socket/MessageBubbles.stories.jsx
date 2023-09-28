import React from 'react';

import MessageBubble from '../../../features/web-socket/MessageBubble';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Messaging/MessageBubbles',
  component: MessageBubble,
  parameters: {
    layout: 'fullscreen',
  },
};

const messages = [
  {
    username: 'Jessica Day',
    message: 'Hello, Nick Miller!',
    timestamp: new Date().toLocaleTimeString(),
    sent: false,
  },
  {
    username: 'Nick Miller',
    message: 'Hello, Jessica Day',
    timestamp: new Date().toLocaleTimeString(),
    sent: true,
  },
  {
    username: 'Winston Bishop',
    message: 'Has anyone seen Furguson?',
    timestamp: new Date().toLocaleTimeString(),
    sent: false,
  },
  {
    username: 'Schmitt',
    message: 'Winston, no one has seen your cat!',
    timestamp: new Date().toLocaleTimeString(),
    sent: false,
  },
  {
    username: 'Nick Miller',
    message: 'No one come into the kitchen. I need to fix the sink',
    timestamp: new Date().toLocaleTimeString(),
    sent: true,
  },

];

const Template = () => {
  const conversation = messages.map((item) => { return <MessageBubble {...item} />; });
  return (
    <div style={{
      padding: '12px',
      backgroundColor: 'var(--panda-lightest-gray)',
      minHeight: '100vh',
    }}
    >
      {conversation}
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {

};
