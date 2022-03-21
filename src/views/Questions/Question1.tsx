// eslint-disable-next-line no-use-before-define
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Moodify } from '../../App';

import question1Image from '../../assets/image-question-01.png';
import copyText from '../../assets/copyText';

interface Question1Props {
  id: string;
  labels: string[];
  cta: string;
  progress: string;
  placeHolder: string;
}

const Question1: React.FunctionComponent = () => {
  const { username, setUsername } = useContext(Moodify);
  const { id, labels, cta, progress, placeHolder }: Question1Props =
    copyText.question1;

  const handleChange = (e: { target: { value: string } }) => {
    return setUsername(e.target.value);
  };

  const SubmitButton = () => {
    return (
      <button
        type="button"
        className={`Question__button${username ? '' : ' -disabled'}`}
        disabled={username === ''}
      >
        {cta}
      </button>
    );
  };

  return (
    <section className="Question Question-1">
      <div className="Question__progress">
        <span className="Question__progress__numbers">{progress}</span>
      </div>
      <div className="Question__label">
        <label htmlFor={id}>
          {labels.map((label, index) => (
            <p key={index}>{label}</p>
          ))}
        </label>
        <input
          value={username}
          type="text"
          id={id}
          name={id}
          placeholder={placeHolder}
          onChange={handleChange}
          required
        />
      </div>
      <Link to="/question2">
        <SubmitButton />
      </Link>
      <figure className="Question__image">
        <img alt={id} src={question1Image} />
      </figure>
    </section>
  );
};

export default Question1;
