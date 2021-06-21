import { Link } from 'react-router-dom'

const Question1 = () => {
	return(
		<div>
			This is the first question
			<Link to="/elaborating">
				<button>Go!</button>
			</Link>		
		</div>
	)
}

export default Question1