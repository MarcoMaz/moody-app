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
      return <button className="Question__button" type="button">Almost there...</button>
    } else {
      return <button type="button" className="Question__button -disabled" disabled>Almost there...</button>
    };
  };

	return(
		<section className="Question Question-2">
			<div className="Question__progress">
				<Link to="/question1">
					<button className="Question__progress__back"><FontAwesomeIcon icon="chevron-left" /></button>
				</Link>
				<span className="Question__progress__numbers">2 / 3</span>
			</div>
			<div className="Question__radio">
				<p>
					Usually, where do you listen to music?
				</p>
				<div className="Question__radio-item">
						<input type="radio" id="ritema" name="ritem" value="ropt1" onChange={handleClick}/>
						<label htmlFor="ritema">In my car</label>
				</div>
				<div className="Question__radio-item">
						<input type="radio" id="ritemb" name="ritem" value="ropt2" onChange={handleClick}/>
						<label htmlFor="ritemb">While I do jogging</label>
				</div>
				<div className="Question__radio-item">
						<input type="radio" id="ritemc" name="ritem" value="ritemc" onChange={handleClick}/>
						<label htmlFor="ritemc">In my bathtub</label>
				</div>
				<div className="Question__radio-item">
						<input type="radio" id="ritemd" name="ritem" value="ritemd" onChange={handleClick}/>
						<label htmlFor="ritemd">Somewhere else...</label>
				</div>
			</div>
			<Link to="/question3">
      	<SubmitButton/>
			</Link>		
			<figure className="Question__image">
				<img alt="This is a text" src={question2Image}></img>
			</figure>
		</section>
	)
}

export default Question2