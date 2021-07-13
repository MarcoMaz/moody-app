import { useState } from 'react'

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import question2Image from '../../images/image-question-02.png';

import './Question.scss'

const Question2 = () => {
  const [checked, setChecked] = useState(false)
  const handleClick = () => setChecked(true)

	function SubmitButton(){
    if (checked){
      return <button className="Question__button" type="button">Go!</button>
    } else {
      return <button type="button" className="Question__button -disabled" disabled>Go!</button>
    };
  };

	return(
		<section className="Question Question-2">
			<div className="Question__progress">
				<Link to="/question1">
					<button className="Question__progress__back"><FontAwesomeIcon icon="chevron-left" /></button>
				</Link>
				<span className="Question__progress__numbers">2 di 3</span>
			</div>
			<div className="Question__label">
				<p>Per cosa ti serve?</p>
				<div className="Question__choice1">
					<input type="radio" id="questionChoice1" name="contact" value="email" onChange={handleClick} />
    			<label htmlFor="questionChoice1">Email</label>
				</div>
				<div className="Question__choice2">
					<input type="radio" id="questionChoice2" name="contact" value="phone" onChange={handleClick} />
    			<label htmlFor="questionChoice2">Phone</label>
				</div>
				<div className="Question__choice3">
					<input type="radio" id="questionChoice3" name="contact" value="fax" onChange={handleClick} />
    			<label htmlFor="questionChoice3">Fax</label>
				</div>
			</div>
			<figure className="Question__image">
				<img alt="This is a text" src={question2Image}></img>
			</figure>
			<Link to="/question3">
      	<SubmitButton/>
			</Link>		
		</section>
	)
}

export default Question2