import { useContext } from 'react'
import { Rosify } from '../../App'

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import question1Image from '../../images/image-question-01.png';

import './Question.scss'

const Question1 = () => {
	const { username, setUsername } = useContext(Rosify)

	function SubmitButton(){
    if (username){
      return <button className="Question__button" type="button">Go on!</button>
    } else {
      return <button type="button" className="Question__button -disabled" disabled>Go on!</button>
    };
  };

	return(
		<section className="Question Question-1">
			<div className="Question__progress">
				<Link to="/question1">
					<button className="Question__progress__back"><FontAwesomeIcon icon="chevron-left" /></button>
				</Link>
				<span className="Question__progress__numbers">1 / 3</span>
			</div>
			<div className="Question__label">
				<label htmlFor="question1">
					That's an easy one.<br/>
					Just type your name.
				</label>
				<input 
					value={username} 
					type="text" 
					id="question1" 
					name="question1"  
					placeholder="Your name here"
					onChange={ e => setUsername(e.target.value)} 
					required
					/>
			</div>
			<Link to="/question2">
      	<SubmitButton/>
			</Link>		
			<figure className="Question__image">
				<img alt="This is a text" src={question1Image}></img>
			</figure>
		</section>
	)
}

export default Question1