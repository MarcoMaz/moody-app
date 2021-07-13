import { useState } from 'react'

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import question3Image from '../../images/image-question-03.png';

import './Question.scss'

const Question3 = () => {
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
		<section className="Question Question-3">
			<div className="Question__progress">
				<Link to="/question2">
					<button className="Question__progress__back"><FontAwesomeIcon icon="chevron-left" /></button>
				</Link>
				<span className="Question__progress__numbers">3 di 3</span>
			</div>
			<div className="Question__checkbox">
				<p>Quanto sei felice oggi? <br/>
					0 poco, 5 tanto
				</p>
				<div className="Question__choice Question__choice1">
					<input type="radio" id="questionChoice1" name="contact" value="1" onChange={handleClick} />
    			<label htmlFor="questionChoice1">1</label>
				</div>
				<div className="Question__choice Question__choice2">
					<input type="radio" id="questionChoice2" name="contact" value="2" onChange={handleClick} />
    			<label htmlFor="questionChoice2">2</label>
				</div>
				<div className="Question__choice Question__choice3">
					<input type="radio" id="questionChoice3" name="contact" value="3" onChange={handleClick} />
    			<label htmlFor="questionChoice3">3</label>
				</div>
				<div className="Question__choice Question__choice4">
					<input type="radio" id="questionChoice4" name="contact" value="4" onChange={handleClick} />
    			<label htmlFor="questionChoice4">4</label>
				</div>
				<div className="Question__choice Question__choice5">
					<input type="radio" id="questionChoice5" name="contact" value="5" onChange={handleClick} />
    			<label htmlFor="questionChoice5">5</label>
				</div>
			</div>
			<figure className="Question__image">
				<img alt="This is a text" src={question3Image}></img>
			</figure>
			<Link to="/elaborating">
      	<SubmitButton/>
			</Link>		
		</section>
	)
}

export default Question3