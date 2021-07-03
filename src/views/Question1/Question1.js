import { useState } from 'react'
import { Link } from 'react-router-dom'

import './Question.scss'

const Question1 = () => {
	const [ question1, setQuestion1 ] = useState('');

	function SubmitButton(){
    if (question1){
      return <button className="Question__button" type="button">Go!</button>
    } else {
      return <button type="button" className="Question__button -disabled" disabled>Go!</button>
    };
  };

	return(
		<section className="Question Question-1">
			<div className="Question__label">
				<label htmlFor="question1">Question #1</label>
				<input value={question1} onChange={ e => setQuestion1(e.target.value)} type="text" id="question1" name="question1" required placeholder="Question #1"/>
			</div>
			<figure className="Question__image">
				<img alt="This is a text" src="https://via.placeholder.com/150"></img>
			</figure>
			<div className="Question__stepper">
				<span className="Question__stepper__line-behind"></span>
				<span className="Question__stepper__dot"></span>
				<span className="Question__stepper__dot"></span>
				<span className="Question__stepper__dot"></span>
				<span className="Question__stepper__dot"></span>
				<span className="Question__stepper__dot"></span>
			</div>
			<div className="Question__arrows">
				<div className="Question__arrows__left"></div>
				<div className="Question__arrows__right"></div>
			</div>

			<Link to="/elaborating">
      	<SubmitButton/>
			</Link>		
		</section>
	)
}

export default Question1