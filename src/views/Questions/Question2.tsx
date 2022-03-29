// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';

import question2Image from '../../assets/image-question-02.png';
import copyText from '../../assets/copyText';

interface Question2Props {
  headline: string;
  id: string;
  radioItems: string[];
  cta: string;
  progress: string;
}

const Question2: React.FunctionComponent = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const handleChange: () => void = () => setChecked(true);
  const { headline, id, radioItems, cta, progress }: Question2Props =
    copyText.question2;

  const SubmitButton = () => {
    return (
      <button
        type="button"
        className={`Question__button__submit${checked ? '' : ' -disabled'}`}
        disabled={checked === false}
      >
        {cta}
      </button>
    );
  };

  return (
    <section className="Question Question-2">
      <div className="Question__progress">
        <Link to="/question1" className="Question__progress__back">
          <button type="button">
            <FaChevronLeft aria-label="chevron-left-icon" />
          </button>
        </Link>
        <span className="Question__progress__numbers">{progress}</span>
      </div>
      <div className="Question__radio">
        <p>{headline}</p>
        {radioItems.map((radioItem, index) => {
          return (
            <div className="Question__radio-item" key={index}>
              <input
                type="radio"
                id={`id-${index}`}
                name={id}
                value={`value-${index}`}
                onChange={handleChange}
              />
              <label htmlFor={`id-${index}`}>{radioItem}</label>
            </div>
          );
        })}
      </div>
      <Link to="/question3" className="Question__button">
        <SubmitButton />
      </Link>
      <figure className="Question__image">
        <img alt={id} src={question2Image} />
      </figure>
    </section>
  );
};

export default Question2;
