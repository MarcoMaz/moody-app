import { useContext } from 'react';
import { Rosify } from '../../App'
import { Link } from 'react-router-dom'

const Video = () => {
	const { setUsername, setIsFilterActive } = useContext(Rosify)

	return(
		<section className="Video">
		<p>Qua ci andra' il video</p>
		<Link to="/">
			<button className="Results__back" onClick={() => {
				setUsername(''); 
				setIsFilterActive('');
				}}>Ritorna all'inizio
			</button>
		</Link>
		</section>
	)
}

export default Video