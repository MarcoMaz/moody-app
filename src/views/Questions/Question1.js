import { useContext } from 'react'
import { Rosify } from '../../App'

import { Link } from 'react-router-dom'

import question1Image from '../../images/image-question-01.png';

import './Question.scss'

const Question1 = () => {
	const { username, setUsername } = useContext(Rosify)

	function SubmitButton(){
    if (username){
      return <button className="Question__button" type="button">Go!</button>
    } else {
      return <button type="button" className="Question__button -disabled" disabled>Go!</button>
    };
  };

	return(
		<section className="Question Question-1">
			<div className="Question__progress">
				<span className="Question__progress__numbers">1 di 3</span>
			</div>
			<div className="Question__label">
				<label htmlFor="question1">Inserisci il tuo nome</label>
				<input 
					value={username} 
					type="text" 
					id="question1" 
					name="question1"  
					placeholder="Inserisci il tuo nome"
					onChange={ e => setUsername(e.target.value)} 
					required
					/>
			</div>
			<figure className="Question__image">
				<img alt="This is a text" src={question1Image}></img>
			</figure>
			<Link to="/question2">
      	<SubmitButton/>
			</Link>		
		</section>
	)
}

export default Question1