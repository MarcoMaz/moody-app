import { useContext } from "react";
import { Moodify } from "../../App";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import question1Image from "../../assets/image-question-01.png";
import copyText from "../../assets/copyText";

import "./Question.scss";

const Question1 = () => {
  const { username, setUsername } = useContext(Moodify);
  const { id, labels, cta, progress, placeHolder } = copyText.question1;

	const handleChange = (e) => {
		return setUsername(e.target.value)
	}

  const SubmitButton = () => {
    return (
      <button
        type="button"
        className={`Question__button${username ? "" : " -disabled"}`}
        disabled={username === "" ? true : false}
      >
        {cta}
      </button>
    );
  }

  return (
    <section className="Question Question-1">
      <div className="Question__progress">
        <Link to="/question1">
          <button className="Question__progress__back">
            <FontAwesomeIcon icon="chevron-left" />
          </button>
        </Link>
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
        <img alt={id} src={question1Image}></img>
      </figure>
    </section>
  );
};

export default Question1;
