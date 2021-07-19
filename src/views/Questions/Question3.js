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
				<span className="Question__progress__numbers">3 / 3</span>
			</div>
			<div className="Question__radio">
				<p>How's your mood today?</p>
				<div className="Question__radio-item">
						<input type="radio" id="op1" name="opi" value="op1" onChange={handleClick}/>
						<label htmlFor="op1">Very bad</label>
				</div>
				<div className="Question__radio-item">
						<input type="radio" id="op2" name="opi" value="op2" onChange={handleClick}/>
						<label htmlFor="op2">Bad</label>
				</div>
				<div className="Question__radio-item">
						<input type="radio" id="op3" name="opi" value="op3" onChange={handleClick}/>
						<label htmlFor="op3">Normal</label>
				</div>
				<div className="Question__radio-item">
						<input type="radio" id="op4" name="opi" value="op4" onChange={handleClick}/>
						<label htmlFor="op4">Good</label>
				</div>
				<div className="Question__radio-item">
						<input type="radio" id="op5" name="opi" value="op5" onChange={handleClick}/>
						<label htmlFor="op5">Very good!</label>
				</div>
			</div>
			<Link to="/elaborating">
      	<SubmitButton/>
			</Link>		
			<figure className="Question__image">
				<img alt="This is a text" src={question3Image}></img>
			</figure>
		</section>
	)
}

export default Question3