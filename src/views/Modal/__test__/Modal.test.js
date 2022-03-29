// eslint-disable-next-line no-use-before-define
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Modal from '../Modal';

const ModalElement = (
  <BrowserRouter>
    <Modal />
  </BrowserRouter>
);

it('the modal renders', () => {
  render(ModalElement);
  const modalElement = screen.getByTestId('modal');
  expect(modalElement).toBeInTheDocument();
});
