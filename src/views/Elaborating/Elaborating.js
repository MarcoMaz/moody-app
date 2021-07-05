import { useEffect, useState, useContext } from 'react';
import { Rosify } from '../../App'
import { Link } from 'react-router-dom'

import './Elaborating.scss'

const Elaborating = () => {
	const { username } = useContext(Rosify)
	const [ visible, setVisible ] = useState(false);
	const [ newSentence, setNewSentence ] = useState('');

	useEffect(() => {
		const timer1 = setTimeout(() => {
			let maxNumber = sentences.length;
			let randomNumber = Math.floor((Math.random() * maxNumber) + 1);
			setNewSentence(sentences[randomNumber])
		}, 3000)

		return () => clearInterval(timer1)
	})

	useEffect(() => {
		const timer2 = setTimeout(() => {
      setVisible(true);
    }, 9000);

		return () => {
			setVisible(true); 
			clearInterval(timer2)
		}
	}, [])

	const sentences = [
		"Sto elaborando i risultati.",
		"La pazienza e' la virtu' dei forti.",
		"Un attimo di pazienza.",
		"Fra qualche secondo la tua playlist sara' pronta.",
		"Mm. Hai dei gusti interessanti.",
		"La musica e' un bene di prima necessita'."
	]

	return(
		<section className="Elaborating">
			{!visible && 
			<>
				<h2 className="Elaborating__headline">
					{ newSentence }
				</h2>
				<div className="Elaborating__spinner"></div>
			</>
			}
			{ visible &&
				<h2 className="Elaborating__headline">
					La tua playlist e' pronta, { username }.
				</h2>
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