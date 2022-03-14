import { useState } from 'react';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import question2Image from '../../assets/image-question-02.png';
import copyText from '../../assets/copyText';

import './Question.scss';

const Question2 = () => {
  const [checked, setChecked] = useState(false)
  const handleChange = () => setChecked(true)
  const { headline, id, radioItems, cta, progress } = copyText.question2

  const SubmitButton = () => {
    return (
      <button
        type="button"
        className={`Question__button${checked ? '' : ' -disabled'}`}
        disabled={checked === '' ? true : false}
      >
        {cta}
      </button>
    )
  }

  return (
    <section className="Question Question-2">
      <div className="Question__progress">
        <Link to="/question1">
          <button className="Question__progress__back">
            <FontAwesomeIcon icon="chevron-left" />
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
          )
        })}
      </div>
      <Link to="/question3">
        <SubmitButton />
      </Link>
      <figure className="Question__image">
        <img alt={id} src={question2Image}></img>
      </figure>
    </section>
  )
}

export default Question2
