import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { Rosify } from '../../App'

import introImage from '../../images/image-intro.png';

import './Intro.scss'

const Intro = () => {
	const { setIsFilterActive } = useContext(Rosify)

	let counter = 0;

	const activateFilter = () => {
		counter++
		if (counter === 2){
			setIsFilterActive(true)
		}
	}

	return(
		<section className="Intro">
			<h1 className="Intro__headline">Welcome to Moody</h1>
			<figure className="Intro__image" onClick={activateFilter}>
				<img alt="This is a text" src={introImage}></img>
			</figure>
			<h2 className="Intro__subheadline">Shape a playlist around your mood</h2>
			<p className="Intro__paragraph">
				YOU answer 3 questions.<br/>
				WE shape the perfect playlist.<br/><br/>
				It's THAT easy.
			</p>
			<Link to="/question1">
				<button className="Intro__button">Let's start!</button>
			</Link>
		</section>
	)
}

export default Intro