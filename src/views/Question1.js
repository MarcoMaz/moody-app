import { Link } from 'react-router-dom'

const Question1 = () => {
	return(
		<div className="Question Question-1">
			<div className="Question__label">
				<label for="question1">Question #1</label>
				<input type="text" id="question1" name="question1" required minlength="4" maxlength="8" size="10"/>
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
				<button>Go!</button>
			</Link>		
		</div>
	)
}

export default Question1