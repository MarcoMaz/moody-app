// eslint-disable-next-line no-use-before-define
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Results from '../Results';

const ResultsElement = (
  <BrowserRouter>
    <Results />
  </BrowserRouter>
);

describe('The Results View renders', () => {
  it('the headline', () => {
    render(ResultsElement);
    const headlineElement = screen.getByRole('heading', {
      name: 'This is your personalized playlist.',
    });
    expect(headlineElement).toBeInTheDocument();
  });

  it('the subheadline', () => {
    render(ResultsElement);
    const subheadlineElement = screen.getByRole('heading', {
      name: 'Click a song and have fun!',
    });
    expect(subheadlineElement).toBeInTheDocument();
  });

  it('six covers', () => {
    render(ResultsElement);
    const sixCoversElement = screen.getAllByRole('button');
    // length should be 7 because...6 covers (all buttons) + Start over button
    expect(sixCoversElement).toHaveLength(7);
  });

  it('the button', () => {
    render(ResultsElement);
    const buttonElement = screen.getByTestId('back-button');
    expect(buttonElement).toBeInTheDocument();
  });
});
