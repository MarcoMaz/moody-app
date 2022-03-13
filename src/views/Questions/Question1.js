import { useContext } from "react";
import { Moodify } from "../../App";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import question1Image from "../../assets/image-question-01.png";
import copyText from "../../assets/copyText";

import "./Question.scss";

const Question1 = () => {
  const { username, setUsername } = useContext(Moodify);

  const { labels, cta } = copyText.question1;

  function SubmitButton() {
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
        <span className="Question__progress__numbers">1 / 3</span>
      </div>
      <div className="Question__label">
        <label htmlFor="question1">
          {labels.map((label) => (
            <p>{label}</p>
          ))}
        </label>
        <input
          value={username}
          type="text"
          id="question1"
          name="question1"
          placeholder="Your name here"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <Link to="/question2">
        <SubmitButton />
      </Link>
      <figure className="Question__image">
        <img alt="question 1" src={question1Image}></img>
      </figure>
    </section>
  );
};

export default Question1;
