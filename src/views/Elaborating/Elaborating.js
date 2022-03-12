import { useEffect, useState, useContext } from 'react';
import { Moodify } from '../../App'
import { Link } from 'react-router-dom'

import elaboratingImage from '../../assets/image-elaborating-02.png';

import './Elaborating.scss'

const Elaborating = () => {
	const { username } = useContext(Moodify)
	const [ isElaboratingVisible, setIsElaboratingVisible ] = useState(false);
	const [ newHeadline, setNewHeadline ] = useState('');

	useEffect(() => {
		const timerElaborating = setTimeout(() => {
			let maxNumber = sentences.length;
			let randomNumber = Math.floor((Math.random() * maxNumber) + 1);
			setNewHeadline(sentences[randomNumber])
		}, 3000)

		return () => clearInterval(timerElaborating)
	})

	useEffect(() => {
		const timerElaboratingEnd = setTimeout(() => {
      setIsElaboratingVisible(true);
    }, 9000);

		return () => {
			setIsElaboratingVisible(true); 
			clearInterval(timerElaboratingEnd)
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
			{!isElaboratingVisible && 
			<>
				<h2 className="Elaborating__headline">
					{ newHeadline }
				</h2>
				<div className="Elaborating__spinner"></div>
			</>
			}
			{ isElaboratingVisible &&
				<>
					<h2 className="Elaborating__headline">
						Your playlist is ready, <span>{username}</span>.
					</h2>
					<figure className="Elaborating__image">
						<img alt="This is a text" src={elaboratingImage}></img>
					</figure>
				</>
			}
			<Link to="/results">
				{ isElaboratingVisible && <button className="Elaborating__button">Show me the result</button> }
			</Link>	
		</section>
	)
}

export default Elaborating