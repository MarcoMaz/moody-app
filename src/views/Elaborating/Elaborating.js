import { useEffect, useState, useContext } from 'react';
import { Rosify } from '../../App'
import { Link } from 'react-router-dom'

import elaborating2Image from '../../images/image-elaborating-02.png';

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
		"I'm elaborating the results",
		"Patience is a virtue.",
		"One moment more..",
		"In few seconds your playlist will be ready.",
		"Mm. You have an interesting taste.",
		"Music is the best."
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
				<>
					<h2 className="Elaborating__headline">
						Your playlist is ready, <span>{ username }</span>.
					</h2>
					<figure className="Elaborating02__image">
						<img alt="This is a text" src={elaborating2Image}></img>
					</figure>
				</>
			}
			<Link to="/results">
				{
					visible && <button className="Elaborating__button">Show me the result</button>
				}
			</Link>	
		</section>
	)
}

export default Elaborating