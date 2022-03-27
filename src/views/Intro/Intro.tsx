// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Link } from 'react-router-dom';

import background from '../../assets/moody-logo.png';
import copyText from '../../assets/copyText';
import introImage from '../../assets/image-intro.png';

interface IntroProps {
  headline: string;
  imageAlt: string;
  appName: string;
  subHeadline: string;
  paragraphs: string[];
  cta: string;
}

const Intro: React.FunctionComponent = () => {
  const {
    headline,
    imageAlt,
    appName,
    subHeadline,
    paragraphs,
    cta,
  }: IntroProps = copyText.intro;
  // Cut the first letter and use a background image instead
  const backgroundImage: string = background;
  const introImageSrc: string = introImage;

  return (
    <section className="Intro">
      <h1 className="Intro__headline">
        {headline}
        <span style={{ backgroundImage: `url(${backgroundImage})` }}>
          {appName}
        </span>
      </h1>
      <figure className="Intro__image">
        <img alt={imageAlt} src={introImageSrc} />
      </figure>
      <h2 className="Intro__subheadline">{subHeadline}</h2>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="Intro__paragraph" role="paragraph">
          {paragraph}
        </p>
      ))}
      <Link to="/question1" className="Intro__button">
        <button type="button">{cta}</button>
      </Link>
    </section>
  );
};

export default Intro;
