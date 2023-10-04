import React from 'react';
import DraggableComponent from '../features/drag-n-drop/WidgetContainer';
import WaterWidget from '../features/water/WaterWidget';
import Message from '../features/web-socket/Message';

const Home = () => {
  return (
    <div style={{
      width: '100%',
      minHeight: '100%',
      maxHeight: '100%',
      border: '1px solid blue',
      overflow: 'hidden',
      padding: '12px',
    }}
    >
      <DraggableComponent
        resizable={{
          width: 250,
          height: 250,
          minWidth: 250,
          minHeight: 250,
          maxWidth: 400,
          maxHeight: 800,
        }}
        header="Chat"
        canBeResized
      >
        <Message />
      </DraggableComponent>

      <DraggableComponent
        resizable={{
          width: 150,
          height: 100,
        }}
        header="Widget 2"
      ><WaterWidget />
      </DraggableComponent>
      <DraggableComponent
        resizable={{
          width: 250,
          height: 300,
          minWidth: 250,
          minHeight: 300,
          maxWidth: 500,
          maxHeight: 500,
        }}
        header="Widget 3"
        canBeResized
      />
      <DraggableComponent
        resizable={{
          width: 250,
          height: 300,
          minWidth: 250,
          minHeight: 300,
          maxWidth: 500,
          maxHeight: 500,
        }}
        header="Widget 4"
        canBeResized
      />
      <DraggableComponent
        resizable={{
          width: 400,
          height: 400,
          minWidth: 400,
          minHeight: 400,
          maxWidth: 500,
          maxHeight: 500,
        }}
        header="Widget 5"
        canBeResized
      />
    </div>
  );
};

export default Home;
