import { useState } from 'react';
import { Link } from 'react-router-dom'

import audio from '../dormono.mp3';

import fakeData from './fakeData'

const Results = () => {
	const [ activeAlbum, setActiveAlbum ] = useState('')
	const [ visibleAlbum, setVisibleAlbum ] = useState(false)

	let newAudio = new Audio(audio)

	const start = () => {
    newAudio.play();
  }

	const stop = () => {
		newAudio.pause()
	}

	const handleClick = (music) => {
		setActiveAlbum(music.album)
		setVisibleAlbum(true)
	}

	return(
		<div>
			<p>questi sono i risultati</p>
			<ul>
				{
					fakeData.rosi.map((music, index) => (
						<li onClick={() => handleClick(music)} key={index}>{music.album}</li>
					))
				}
			</ul>
			{
				visibleAlbum && 
				<div>
					<strong>Hai scelto { activeAlbum}</strong><br/>
					<button onClick={start}>Play me!</button>
					<button onClick={stop}>Stop me!</button>
					<button onClick={() => setVisibleAlbum(false)}>Cambia canzone</button>
				</div>
			}
			<Link to="/">
				<button>Ritorna all'inizio</button>
			</Link>
		</div>
	)
}

export default Results