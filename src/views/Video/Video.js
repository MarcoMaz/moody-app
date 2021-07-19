import { useContext } from 'react';
import { Rosify } from '../../App'
import { Link } from 'react-router-dom'

import './Video.scss'

const Video = () => {
	const { setUsername, setIsFilterActive } = useContext(Rosify)

	return(
		<div className="Video">
				<iframe 
					width="560" 
					height="315" 
					src="https://www.youtube.com/embed/Q9DNe0Nuxx0" 
					title="YouTube video player" 
					frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			<Link to="/">
				<button className="Results__back" onClick={() => {
					setUsername(''); 
					setIsFilterActive('');
					}}>Ritorna all'inizio
				</button>
			</Link>
		</div>
	)
}

export default Video