import React from 'react';

import MessageBubble from '../../../features/web-socket/MessageBubble';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Messaging/MessageBubble',
  component: MessageBubble,
};

const Template = (args) => { return <MessageBubble {...args} />; };

export const Sent = Template.bind({});
export const Recieved = Template.bind({});

Recieved.args = {
  username: 'Jessica Day',
  message: 'Hello, Nick Miller!',
  timestamp: new Date().toLocaleTimeString(),
  sent: false,
};

Sent.args = {
  username: 'Nick Miller',
  message: 'Hello, Jessica Day',
  timestamp: new Date().toLocaleTimeString(),
  sent: true,
};
