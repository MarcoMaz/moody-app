// eslint-disable-next-line no-use-before-define
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Intro from '../Intro';

const IntroElement = (
  <BrowserRouter>
    <Intro />
  </BrowserRouter>
);

describe('Intro view renders', () => {
  it('the headline', () => {
    render(IntroElement);
    const headingElement = screen.getByRole('heading', {
      name: 'Welcome to Moody',
    });
    expect(headingElement).toBeInTheDocument();
  });

  it('the image', () => {
    render(IntroElement);
    const imageElement = screen.getByAltText('intro');
    expect(imageElement).toBeInTheDocument();
  });

  it('the subheadline', () => {
    render(IntroElement);
    const subHeadingElement = screen.getByRole('heading', {
      name: 'Shape a playlist around your mood',
    });
    expect(subHeadingElement).toBeInTheDocument();
  });

  it('the first paragraph', () => {
    render(IntroElement);
    const firstParagraphElement = screen.getByText('YOU answer 3 questions.');
    expect(firstParagraphElement).toBeInTheDocument();
  });

  it('the second paragraph', () => {
    render(IntroElement);
    const secondParagraphElement = screen.getByText(
      'WE shape the perfect playlist.',
    );
    expect(secondParagraphElement).toBeInTheDocument();
  });

  it('the third paragraph', () => {
    render(IntroElement);
    const thirdParagraphElement = screen.getByText("It's THAT easy.");
    expect(thirdParagraphElement).toBeInTheDocument();
  });

  it('the button', () => {
    render(IntroElement);
    const buttonElement = screen.getByRole('button', {
      name: "Let's start!",
    });
    expect(buttonElement).toBeInTheDocument();
  });
});
