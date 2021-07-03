import { Link } from 'react-router-dom'

import './Intro.scss'

const Intro = () => {
	return(
		<section className="Intro">
			<h1 className="Intro__headline">This is the headline</h1>
			<figure className="Intro__image">
				<img alt="This is a text" src="https://via.placeholder.com/150"></img>
			</figure>
			<h2 className="Intro__subheadline">This is the subheadline</h2>
			<p className="Intro__paragraph">This is a very long paragraphThis is a very long paragraphThis is a very long paragraphThis is a very long paragraphThis is a very long paragraphThis is a very long paragraphThis is a very long paragraph</p>
			<Link to="/question1">
				<button className="Intro__button">Start!!</button>
			</Link>
		</section>
	)
}

export default Intro