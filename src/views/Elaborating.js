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
		<div>
			Sto elaborando i risultati
			<Link to="/results">
				{
					visible && <button>Go!</button>
				}
			</Link>	
		</div>
	)
}

export default Elaborating