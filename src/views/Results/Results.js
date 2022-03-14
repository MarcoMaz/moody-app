import { useState, useRef, useEffect, useContext, useMemo } from 'react'
import { Moodify } from '../../App'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import fakeSong from '../../assets/africa.mp3'
import copyText from '../../assets/copyText'

import Modal from './Modal'
import fakeData from '../fakeData'

import './Results.scss'

const Results = () => {
  const { setUsername } = useContext(Moodify)

  const [activeChoice, setActiveChoice] = useState({
    imageUrlChoice: '',
    titleChoice: '',
    artistChoice: '',
    songChoice: '',
  })

  const [visibleAlbum, setVisibleAlbum] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const { headline, subHeadline, changeSong, startOver } = copyText.results

  const newPlaylist = useMemo(() => {
    let chosePlaylist = fakeData

    // Add a random key
    let randomSortKey = {}

    chosePlaylist.forEach((d) => (randomSortKey[d] = Math.random()))

    //add the sortKey property to the individual array entries
    let dataSortable = chosePlaylist.map((playlist) => {
      return {
        ...playlist,
        sortKey: Math.random(),
      }
    })

    // Sort the List, cut it to six values and create a new playlist
    return dataSortable.sort((a, b) => a.sortKey - b.sortKey).slice(0, 6)
  }, [])

  let audio = useRef()

  const start = (selectedSong) => {
    audio.current = new Audio(activeChoice.songChoice)
    audio.current.play()
    setIsPlaying(true)
  }

  const stop = () => {
    if (audio.current !== undefined) {
      audio.current.pause()
    }
    setIsPlaying(false)
  }

  const handleClick = (music) => {
    setActiveChoice({
      imageUrlChoice: music.imageUrl,
      titleChoice: music.title,
      artistChoice: music.artist,
      songChoice: fakeSong,
    })
    setVisibleAlbum(true)
  }

  useEffect(() => {
    visibleAlbum === true
      ? document.querySelector('body').classList.add('blocked')
      : document.querySelector('body').classList.remove('blocked')
  })

  return (
    <>
      {visibleAlbum && <Modal />}
      <section className="Results">
        <h2 className="Results__headline">{headline}</h2>
        <h3 className="Results__subheadline">{subHeadline}</h3>
        <ul className="Results__songs">
          {newPlaylist.map((music, index) => (
            <li
              className="Results__song"
              onClick={() => handleClick(music)}
              key={index}
            >
              <figure className="Results__song-image">
                <img alt="cover of the song" src={music.imageUrl}></img>
              </figure>
              <div className="Results__song-title">{music.title}</div>
              <div className="Results__song-artist">{music.artist}</div>
            </li>
          ))}
        </ul>
        {visibleAlbum && (
          <div className="Song">
            <h2 className="Song__title">{activeChoice.titleChoice}</h2>
            <h3 className="Song__artist">{activeChoice.artistChoice}</h3>
            <figure className="Song__image">
              <img src={activeChoice.imageUrlChoice} alt="cover of the song" />
            </figure>
            <div className="Song__slider"></div>
            <div className="Song__buttons">
              {!isPlaying ? (
                <button className="Song__play" onClick={start}>
                  <FontAwesomeIcon icon="play" />
                </button>
              ) : (
                <button className="Song__stop" onClick={stop}>
                  <FontAwesomeIcon icon="stop" />
                </button>
              )}
              <button
                className="Song__change"
                onClick={() => {
                  setVisibleAlbum(false)
                  stop()
                  setIsPlaying(false)
                }}
              >
                {changeSong}
              </button>
            </div>
          </div>
        )}
        {
          <Link to="/">
            <button
              className="Results__back"
              onClick={() => {
                setUsername('')
              }}
            >
              {startOver}
            </button>
          </Link>
        }
      </section>
    </>
  )
}

export default Results
