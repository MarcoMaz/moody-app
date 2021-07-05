import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import './Elaborating.scss'

const Elaborating = () => {
	const [ visible, setVisible ] = useState(false);
	const [ newSentence, setNewSentence ] = useState('');

	useEffect(() => {
		setTimeout(() => {
			let maxNumber = sentences.length;
			let randomNumber = Math.floor((Math.random() * maxNumber) + 1);
			setNewSentence(sentences[randomNumber])
		}, 3000)
	})

	useEffect(() => {
		setTimeout(() => {
      setVisible(true);
    }, 9000);
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
			{
				<h2 className="Elaborating__headline">
					La tua playlist e' pronta.
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