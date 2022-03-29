// eslint-disable-next-line no-use-before-define
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Question3 from '../Question3';

const Question3Element = (
  <BrowserRouter>
    <Question3 />
  </BrowserRouter>
);

describe('The Question #3 view renders', () => {
  it('the chevron-left icon', () => {
    render(Question3Element);
    const chevronLeftElement = screen.getByLabelText('chevron-left-icon');
    expect(chevronLeftElement).toBeInTheDocument();
  });

  it('the progress', () => {
    render(Question3Element);
    const progressElement = screen.getByText('3 / 3');
    expect(progressElement).toBeInTheDocument();
  });

  it('the radio button label', () => {
    render(Question3Element);
    const radioButtonLabelElement = screen.getByText("How's your mood today ?");
    expect(radioButtonLabelElement).toBeInTheDocument();
  });

  it('the radio buttons', () => {
    render(Question3Element);
    const radioButtonsElement = screen.getAllByRole('radio');
    expect(radioButtonsElement).toHaveLength(5);
  });

  it('the first radio button', () => {
    render(Question3Element);
    const radioButton1Element = screen.getByRole('radio', {
      name: 'Very bad',
    });
    expect(radioButton1Element).toBeInTheDocument();
  });

  it('the second radio button', () => {
    render(Question3Element);
    const radioButton2Element = screen.getByRole('radio', {
      name: 'Bad',
    });
    expect(radioButton2Element).toBeInTheDocument();
  });

  it('the third radio button', () => {
    render(Question3Element);
    const radioButton3Element = screen.getByRole('radio', {
      name: 'Normal',
    });
    expect(radioButton3Element).toBeInTheDocument();
  });

  it('the fourth radio button', () => {
    render(Question3Element);
    const radioButton4Element = screen.getByRole('radio', {
      name: 'Good',
    });
    expect(radioButton4Element).toBeInTheDocument();
  });

  it('the fifth radio button', () => {
    render(Question3Element);
    const radioButton5Element = screen.getByRole('radio', {
      name: 'Very good!',
    });
    expect(radioButton5Element).toBeInTheDocument();
  });

  it('the button', () => {
    render(Question3Element);
    const buttonElement = screen.getByRole('button', {
      name: 'Go!',
    });
    expect(buttonElement).toBeInTheDocument();
  });

  it('the button disabled', () => {
    render(Question3Element);
    const buttonElement = screen.getByRole('button', {
      name: 'Go!',
    });
    expect(buttonElement).toBeDisabled();
  });

  it('the image', () => {
    render(Question3Element);
    const imageElement = screen.getByRole('figure');
    expect(imageElement).toBeInTheDocument();
  });
});
