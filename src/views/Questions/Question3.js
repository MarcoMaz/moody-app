import { useState } from 'react'

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import question3Image from '../../images/image-question-03.png';

import './Question.scss'

const Question3 = () => {
	const [ something, setSomething ] = useState('')

	function SubmitButton(){
    if (something){
      return <button className="Question__button" type="button">Go!</button>
    } else {
      return <button type="button" className="Question__button -disabled" disabled>Go!</button>
    };
  };

	return(
		<section className="Question Question-3">
			<div className="Question__progress">
				<Link to="/Question2">
					<button className="Question__progress__back"><FontAwesomeIcon icon="chevron-left" /></button>
				</Link>
				<span className="Question__progress__numbers">3 di 3</span>
			</div>
			<div className="Question__label">
				<label htmlFor="question3">Question 3</label>
				<input 
					value={something} 
					type="text" 
					id="question3" 
					name="question3"  
					placeholder="Inserisci il tuo nome"
					onChange={ e => setSomething(e.target.value)} 
					required
					/>
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