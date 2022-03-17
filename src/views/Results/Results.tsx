import { useState, useRef, useEffect, useContext, useMemo } from 'react'
import { Moodify } from '../../App'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import fakeSong from '../../assets/africa.mp3'
import copyText from '../../assets/copyText'

import Modal from './Modal'
import fakeData from '../fakeData'

import './Results.scss'

interface musicProps {
  sortKey: number
  title: string
  artist: string
  imageUrl: string
}

interface musicChoiceProps {
  imageUrlChoice: string
  titleChoice: string
  artistChoice: string
  songChoice: string
}

interface resultsProps {
  headline: string
  subHeadline: string
  changeSong: string
  startOver: string
  imageAlt: string
  imageModalAlt: string
}

const Results = () => {
  const { setUsername } = useContext(Moodify)

  const [activeChoice, setActiveChoice] = useState({
    imageUrlChoice: '',
    titleChoice: '',
    artistChoice: '',
    songChoice: '',
  } as musicChoiceProps)

  const [visibleAlbum, setVisibleAlbum] = useState<boolean>(false)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  const {
    headline,
    subHeadline,
    changeSong,
    startOver,
    imageAlt,
    imageModalAlt,
  }: resultsProps = copyText.results

  const newPlaylist = useMemo(() => {
    let chosePlaylist = fakeData

    let dataSortable = chosePlaylist.map((playlist) => {
      return {
        ...playlist,
        sortKey: Math.random(),
      }
    })

    // Sort the List, cut it to six values and create a new playlist
    return dataSortable.sort((a, b) => a.sortKey - b.sortKey).slice(0, 6)
  }, [])

  let audio = useRef<HTMLAudioElement>(null!)

  const start: () => void = () => {
    audio.current = new Audio(activeChoice.songChoice)
    audio.current.play()
    setIsPlaying(true)
  }

  const stop: () => void = () => {
    audio.current.pause()
    setIsPlaying(false)
  }

  const clickChangeSong: () => void = () => {
    setVisibleAlbum(false)
    stop()
    setIsPlaying(false)
  }

  const handleClick = (music: musicProps) => {
    setActiveChoice({
      imageUrlChoice: music.imageUrl,
      titleChoice: music.title,
      artistChoice: music.artist,
      songChoice: fakeSong,
    })
    setVisibleAlbum(true)
  }

  const clickReset: () => void = () => {
    setUsername('')
  }

  useEffect(() => {
    const bodyElement = document.querySelector('body')

    if (bodyElement) {
      visibleAlbum === true
        ? bodyElement.classList.add('blocked')
        : bodyElement.classList.remove('blocked')
    }
  })

  return (
    <>
      {visibleAlbum && <Modal />}
      <section className="Results">
        <h1 className="Results__headline">{headline}</h1>
        <h2 className="Results__subheadline">{subHeadline}</h2>
        <ul className="Results__songs">
          {newPlaylist.map((music, index) => (
            <li
              className="Results__song"
              onClick={() => handleClick(music)}
              key={index}
            >
              <figure className="Results__song-image">
                <img alt={imageAlt} src={music.imageUrl}></img>
              </figure>
              <div className="Results__song-title">{music.title}</div>
              <div className="Results__song-artist">{music.artist}</div>
            </li>
          ))}
        </ul>
        {visibleAlbum && (
          <div className="Song">
            <h1 className="Song__title">{activeChoice.titleChoice}</h1>
            <h2 className="Song__artist">{activeChoice.artistChoice}</h2>
            <figure className="Song__image">
              <img src={activeChoice.imageUrlChoice} alt={imageModalAlt} />
            </figure>
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
              <button className="Song__change" onClick={clickChangeSong}>
                {changeSong}
              </button>
            </div>
          </div>
        )}
        {
          <Link to="/">
            <button className="Results__back" onClick={clickReset}>
              {startOver}
            </button>
          </Link>
        }
      </section>
    </>
  )
}

export default Results
