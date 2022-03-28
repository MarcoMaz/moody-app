// eslint-disable-next-line no-use-before-define
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Question1 from '../Question1';

const Question1Element = (
  <BrowserRouter>
    <Question1 />
  </BrowserRouter>
);

describe('The Question #1 view renders', () => {
  it('the progress', () => {
    render(Question1Element);
    const progressElement = screen.getByText('1 / 3');
    expect(progressElement).toBeInTheDocument();
  });

  it('the input label', () => {
    render(Question1Element);
    const inputElement = screen.getByLabelText(
      "That's an easy one.Just type your name.",
    );
    expect(inputElement).toBeInTheDocument();
  });

  it('the input box', () => {
    render(Question1Element);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });

  it('the button', () => {
    render(Question1Element);
    const buttonElement = screen.getByRole('button', {
      name: 'Go on!',
    });
    expect(buttonElement).toBeInTheDocument();
  });

  it('the button disabled', () => {
    render(Question1Element);
    const buttonElement = screen.getByRole('button', {
      name: 'Go on!',
    });
    expect(buttonElement).toBeDisabled();
  });

  it('the image', () => {
    render(Question1Element);
    const imageElement = screen.getByAltText('question1');
    expect(imageElement).toBeInTheDocument();
  });
});
