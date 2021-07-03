import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import './Elaborating.scss'

const Elaborating = () => {
	const [ visible, setVisible ] = useState(false);

	useEffect(() => {
		setTimeout(() => {
      setVisible(true);
    }, 3000);

	}, [])

	return(
		<section className="Elaborating">
			<h2 className="Elaborating__headline">Sto elaborando i risultati</h2>
			{
				!visible && <div className="Elaborating__spinner"></div>
			}
			<Link to="/results">
				{
					visible && <button className="Elaborating__button">Mostrami i risultati</button>
				}
			</Link>	
		</section>
	)
}

export default Elaborating