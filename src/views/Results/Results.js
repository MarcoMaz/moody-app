import { useState, useRef, useEffect, useContext, useMemo } from 'react';
import { Rosify } from '../../App'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Modal from './Modal'
import fakeData from '../fakeData'

import './Results.scss'

const Results = () => {
	const { setUsername, isFilterActive, setIsFilterActive } = useContext(Rosify)

	const [ activeChoice, setActiveChoice ] = useState({
		imageUrlChoice: '',
		titleChoice: '',
		artistChoice: '',
		songChoice: ''
	})

	const [ visibleAlbum, setVisibleAlbum ] = useState(false)
	const [ isPlaying, setIsPlaying ] = useState(false)
	const [ isOver, setIsOver ] = useState(false)
	
	const newPlaylist = useMemo(() => {
		let chosePlaylist = (isFilterActive === true ) ? fakeData.real : fakeData.rosi

		// Add a random key
		let randomSortKey = {}

		chosePlaylist.forEach(d => randomSortKey[d] = Math.random())
	
		//add the sortKey property to the individual array entries
		let dataSortable = chosePlaylist.map(x => {
			return {
				...x, 
				sortKey: Math.random()
			}
		})
		
		// Sort the List, cut it to six values and create a new playlist
		return dataSortable.sort((a, b) => a.sortKey - b.sortKey).slice(0, 6)
	},[isFilterActive]);

	let audio = useRef();

	const start = (selectedSong) => {
		audio.current = new Audio(activeChoice.songChoice)
		audio.current.play()
		setIsPlaying(true)
	}
	
	const stop = () => {
		if ( audio.current !== undefined){
			audio.current.pause()
		}
		setIsPlaying(false)
	}

	const handleClick = (music) => {
		setActiveChoice({
			imageUrlChoice: music.imageUrl,
			titleChoice: music.title,
			artistChoice: music.artist,
			songChoice: music.song
		})
		setVisibleAlbum(true)
	}

	let counter = 0;

	const handleVideo = () => {
		counter++;
		if (counter === 2){
			setIsOver(true)
		}
 	}

	useEffect( 
		() => { 
			( visibleAlbum === true) ?
				document.querySelector('body').classList.add('blocked') :
				document.querySelector('body').classList.remove('blocked')
		} 
	)

	return(
		<>
		{ visibleAlbum && <Modal /> }
		<section className="Results">
			<h2 className="Results__headline" onClick={handleVideo}>This is your personalized playlist.</h2>
			<h3 className="Results__subheadline">Have fun!</h3>
			<ul className="Results__songs">
				{
					newPlaylist.map((music, index) => (
						<li
							className="Results__song" 
							onClick={() => handleClick(music)} 
							key={index}>
								<figure className="Results__song-image" >
									<img alt="This is somethnig" src={music.imageUrl}></img>
								</figure>
								<div className="Results__song-title">{ music.title }</div>
								<div className="Results__song-artist">{ music.artist }</div>
						</li>))
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
						{
							!isPlaying ?
							( <button className="Song__play" onClick={start}><FontAwesomeIcon icon="play" /></button>) :
							( <button className="Song__stop" onClick={stop}><FontAwesomeIcon icon="stop" /></button> )
						}
						<button className="Song__change" onClick={() => {
							setVisibleAlbum(false); 
							stop()
							setIsPlaying(false)}}>Change song</button>
					</div>					
				</div>
			}
			{
				!isOver && 
				<Link to="/">
				<button className="Results__back" onClick={() => {
					setUsername(''); 
					setIsFilterActive('');
					}}>Start over
				</button>
			</Link>
			}
			{
				isOver && <Link to="/Video"><button>Vai al video!</button></Link>
			}
		</section>
		</>
	)
}

export default Results