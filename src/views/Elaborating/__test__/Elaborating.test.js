// eslint-disable-next-line no-use-before-define
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Elaborating from '../Elaborating';

const ElaboratingElement = (
  <BrowserRouter>
    <Elaborating />
  </BrowserRouter>
);

describe('Elaborating View renders', () => {
  it('the spinner', () => {
    render(ElaboratingElement);
    const spinnerElement = screen.getByTestId('spinner');
    expect(spinnerElement).toBeInTheDocument();
  });

  it('the headline', () => {
    render(ElaboratingElement);
    const headlineElement = screen.getByRole('heading');
    expect(headlineElement).toBeInTheDocument();
  });

  it('the image', async () => {
    jest.useFakeTimers();
    jest.runAllTimers();
    render(ElaboratingElement);
    const imageElement = await screen.findByTestId('figure');
    expect(imageElement).toBeInTheDocument();
  });

  it('the button', async () => {
    jest.useFakeTimers();
    jest.runAllTimers();
    render(ElaboratingElement);
    const buttonElement = await screen.findByTestId('show-me-button');
    expect(buttonElement).toBeInTheDocument();
  });
});
