import { useState } from 'react'

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import question3Image from '../../assets/image-question-03.png'
import copyText from '../../assets/copyText'

interface Question3Props {
  headline: string
  id: string
  radioItems: string[]
  cta: string
  progress: string
}

const Question3: React.FunctionComponent = () => {
  const [checked, setChecked] = useState<boolean>(false)
  const handleChange: () => void = () => setChecked(true)
  const {
    headline,
    id,
    radioItems,
    cta,
    progress,
  }: Question3Props = copyText.question3

  const SubmitButton = () => {
    return (
      <button
        type="button"
        className={`Question__button${checked ? '' : ' -disabled'}`}
        disabled={checked === false ? true : false}
      >
        {cta}
      </button>
    )
  }

  return (
    <section className="Question Question-3">
      <div className="Question__progress">
        <Link to="/question2">
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
      <Link to="/elaborating">
        <SubmitButton />
      </Link>
      <figure className="Question__image">
        <img alt={id} src={question3Image} />
      </figure>
    </section>
  )
}

export default Question3
