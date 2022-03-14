import { Link } from 'react-router-dom';

import background from '../../assets/moody-logo.png';
import copyText from '../../assets/copyText';
import introImage from '../../assets/image-intro.png';

import './Intro.scss';

const Intro = () => {
	const { headline, appName, subHeadline, paragraphs, cta } = copyText.intro;
	// Cut the first letter and use a background image instead
	const appNameWithImage = appName.slice(1);

	return (
		<section className="Intro">
			<h1 className="Intro__headline">
				{headline}
				<span style={{ backgroundImage: `url(${background})` }}>
					{appNameWithImage}
				</span>
			</h1>
			<figure className="Intro__image">
				<img alt="intro" src={introImage}></img>
			</figure>
			<h2 className="Intro__subheadline">{subHeadline}</h2>
			{paragraphs.map((paragraph, index) => (
				<p key={index} className="Intro__paragraph">{paragraph}</p>
			))}
			<Link to="/question1">
				<button className="Intro__button">{cta}</button>
			</Link>
		</section>
	)
}

export default Intro
