import React from 'react';

import WaterWidget from '../../../features/water/WaterWidget';

export default {
  title: 'Widgets/WaterWidget',
  component: WaterWidget,
};

const Template = (args) => { return <WaterWidget {...args} />; };

export const Default = Template.bind({});
