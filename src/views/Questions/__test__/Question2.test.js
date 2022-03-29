// eslint-disable-next-line no-use-before-define
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Question2 from '../Question2';

const Question2Element = (
  <BrowserRouter>
    <Question2 />
  </BrowserRouter>
);

describe('The Question #2 view renders', () => {
  it('the chevron-left icon', () => {
    render(Question2Element);
    const chevronLeftElement = screen.getByLabelText('chevron-left-icon');
    expect(chevronLeftElement).toBeInTheDocument();
  });

  it('the progress', () => {
    render(Question2Element);
    const progressElement = screen.getByText('2 / 3');
    expect(progressElement).toBeInTheDocument();
  });

  it('the radio button label', () => {
    render(Question2Element);
    const radioButtonLabelElement = screen.getByText(
      'Usually, where do you listen to music ?',
    );
    expect(radioButtonLabelElement).toBeInTheDocument();
  });

  it('the radio buttons', () => {
    render(Question2Element);
    const radioButtonsElement = screen.getAllByRole('radio');
    expect(radioButtonsElement).toHaveLength(4);
  });

  it('the first radio button', () => {
    render(Question2Element);
    const radioButton1Element = screen.getByRole('radio', {
      name: 'In my car',
    });
    expect(radioButton1Element).toBeInTheDocument();
  });

  it('the second radio button', () => {
    render(Question2Element);
    const radioButton2Element = screen.getByRole('radio', {
      name: 'While I do jogging',
    });
    expect(radioButton2Element).toBeInTheDocument();
  });

  it('the third radio button', () => {
    render(Question2Element);
    const radioButton3Element = screen.getByRole('radio', {
      name: 'In my bathtub',
    });
    expect(radioButton3Element).toBeInTheDocument();
  });

  it('the fourth radio button', () => {
    render(Question2Element);
    const radioButton4Element = screen.getByRole('radio', {
      name: 'Somewhere else...',
    });
    expect(radioButton4Element).toBeInTheDocument();
  });

  it('the button', () => {
    render(Question2Element);
    const buttonElement = screen.getByRole('button', {
      name: 'Almost there...',
    });
    expect(buttonElement).toBeInTheDocument();
  });

  it('the button disabled', () => {
    render(Question2Element);
    const buttonElement = screen.getByRole('button', {
      name: 'Almost there...',
    });
    expect(buttonElement).toBeDisabled();
  });
});
