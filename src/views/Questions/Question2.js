import { useState } from 'react'

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import question2Image from '../../images/image-question-02.png';

import './Question.scss'

const Question2 = () => {
	const [ something, setSomething ] = useState('')

	function SubmitButton(){
    if (something){
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
				<label htmlFor="question2">Question2</label>
				<input 
					value={something} 
					type="text" 
					id="question2" 
					name="question2"  
					placeholder="Inserisci il tuo nome"
					onChange={ e => setSomething(e.target.value)} 
					required
					/>
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