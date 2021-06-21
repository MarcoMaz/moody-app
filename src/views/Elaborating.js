import { Link } from 'react-router-dom'

const Elaborating = () => {
	return(
		<div>
			Sto elaborando i risultati
			<Link to="/results">
				<button>Go!</button>
			</Link>	
		</div>
	)
}

export default Elaborating