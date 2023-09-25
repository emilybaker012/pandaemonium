import React from 'react';
import { MemoryRouter } from 'react-router-dom';

export const Decorators = (Story) => {
  return (
    <MemoryRouter><Story /></MemoryRouter>
  );
};
