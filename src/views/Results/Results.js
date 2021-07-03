import { useState } from 'react';
import { Link } from 'react-router-dom'

import audio from '../../dormono.mp3';

import fakeData from '../fakeData'

import './Results.scss'

const Results = () => {
	const [ activeChoice, setActiveChoice ] = useState({
		imageUrlChoice: '',
		titleChoice: '',
		artistChoice: ''
	})
	const [ visibleAlbum, setVisibleAlbum ] = useState(false)

	let newAudio = new Audio(audio)
	const start = () => newAudio.play();
	const stop = () => newAudio.pause();

	const handleClick = (music) => {
		setActiveChoice({
			imageUrlChoice: music.imageUrl,
			titleChoice: music.title,
			artistChoice: music.artist
		})
		setVisibleAlbum(true)
	}

	return(
		<section className="Results">
			<h2 className="Results__headline">questi sono i risultati</h2>
			<h3 className="Results__subheadline">subheadline</h3>
			<ul className="Results__songs">
				{
					fakeData.rosi.map((music, index) => (
						<li 
							className="Results__song" 
							onClick={() => handleClick(music)} 
							key={index}>
							<figure className="Results__song-image" >
								<img alt="This is somethnig" src={music.imageUrl}></img>
							</figure>
							<div className="Results__song-title">{ music.title }</div>
							<div className="Results__song-artist">{ music.artist }</div>
						</li>
					))
				}
			</ul>
			{
				visibleAlbum && 
				<div className="Song">
					<h2 className="Song__title">{ activeChoice.titleChoice }</h2>
					<h3 className="Song__artist">{ activeChoice.artistChoice }</h3>
					<figure className="Song__image">
						<img src={ activeChoice.imageUrlChoice } alt="This is a text" />
					</figure>
					<div className="Song__slider"></div>
					<div className="Song__buttons">
						<button className="Song__play" onClick={start}>Play me!</button>
						<button className="Song__stop" onClick={stop}>Stop me!</button>
						<button className="Song__change" onClick={() => setVisibleAlbum(false)}>Cambia canzone</button>
					</div>					
				</div>
			}
			<Link to="/">
				<button className="Results__back">Ritorna all'inizio</button>
			</Link>
		</section>
	)
}

export default Results