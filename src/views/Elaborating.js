import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const Elaborating = () => {
	const [ visible, setVisible ] = useState(false);

	useEffect(() => {
		setTimeout(() => {
      setVisible(true);
    }, 3000);

	}, [])

	return(
		<div className="Elaborating">
			<h2 className="Elaborating__headline">Sto elaborando i risultati</h2>
			<div className="Elaborating__spinner">Spinner</div>
			<Link to="/results">
				{
					visible && <button className="Elaborating__button">Mostrami i risultati</button>
				}
			</Link>	
		</div>
	)
}

export default Elaborating