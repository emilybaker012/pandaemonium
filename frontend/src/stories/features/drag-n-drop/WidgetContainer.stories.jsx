import React from 'react';

import WidgetContainer from '../../../features/drag-n-drop/WidgetContainer';
import { Decorators } from '../../Decorators';

export default {
  title: 'Features/Drag and Drop/WidgetContainer',
  component: WidgetContainer,
  decorators: [
    Decorators,
  ],
  parameters: {
    layout: 'fullscreen',
  },

};

const SampleBody = () => {
  return (
    <div style={{
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    >
      I am sample widget!
    </div>
  );
};

const Template = (args) => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <WidgetContainer {...args}>
        <SampleBody />
      </WidgetContainer>
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  resizable: {
    width: 200,
    height: 150,
    minConstraints: [200, 150],
    maxContraints: [300, 300],
  },
  header: 'Sample Widget',
};
