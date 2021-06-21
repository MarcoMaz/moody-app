import { Link } from 'react-router-dom'

const Intro = () => {
	return(
		<div>
			Intro
			<Link to="/question1">
				<button>Go!</button>
			</Link>
		</div>
	)
}

export default Intro