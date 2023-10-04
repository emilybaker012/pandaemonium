/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Rnd } from 'react-rnd';
import styles from './DraggableComponent.module.scss';
import 'react-resizable/css/styles.css';

const DraggableComponent = ({
  children, resizable, header, canBeResized = false,
}) => {
  const headerClasses = clsx({
    header: true,
    [styles.header]: true,
  });

  const enable = {
    bottom: false,
    bottomLeft: false,
    bottomRight: true,
    left: false,
    right: false,
    top: false,
    topLeft: false,
    topRight: false,
  };

  const [size, setSize] = useState({
    width: resizable.width,
    height: resizable.height,
    x: 0,
    y: 0,
  });

  return (
    <Rnd
      default={{
        x: 0,
        y: 0,
        width: size.width,
        height: size.height,
      }}
      minWidth={resizable?.minWidth || 100}
      minHeight={resizable?.minHeight || 100}
      bounds="parent"
      enableResizing={canBeResized && enable}
      onDragStop={(e, d) => { setSize({ ...size, x: d.x, y: d.y }); }}
      onResize={(e, direction, ref, delta, position) => {
        setSize({
          width: ref.offsetWidth,
          height: ref.offsetHeight,
          ...position,
        });
      }}
    >
      <div className={styles.container}>
        <div
          className={headerClasses}
          style={{
            fontWeight: 'bolder',
            fontFamily: 'Itim',
          }}
        > {header}
        </div>
        <div className={styles.body}>
          {children}
        </div>
      </div>

    </Rnd>

  );
};

export default DraggableComponent;
