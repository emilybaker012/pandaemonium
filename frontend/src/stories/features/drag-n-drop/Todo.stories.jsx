import React from 'react';

import Todo from '../../../features/drag-n-drop/Todo';
import { Decorators } from '../../Decorators';

export default {
  title: 'Features/Drag and Drop/Todo',
  component: Todo,
  decorators: [
    Decorators,
  ],

};

const Template = (args) => { return <Todo {...args} />; };

export const Default = Template.bind({});
