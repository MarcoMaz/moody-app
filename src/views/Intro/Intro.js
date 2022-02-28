import { Link } from 'react-router-dom'

import introImage from '../../images/image-intro.png';
import background from "../../images/moody-logo.png";


import './Intro.scss'

const Intro = () => {

	return(
		<section className="Intro">
			<h1 className="Intro__headline">Welcome to
				<span style={{ backgroundImage: `url(${background})` }}>oody</span>
			</h1>
			<figure className="Intro__image">
				<img alt="intro app" src={introImage}></img>
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