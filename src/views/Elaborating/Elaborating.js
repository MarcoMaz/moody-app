import { useEffect, useState, useContext } from 'react'
import { Moodify } from '../../App'
import { Link } from 'react-router-dom'

import elaboratingImage from '../../assets/image-elaborating-02.png'
import copyText from '../../assets/copyText.js'

import './Elaborating.scss'

const Elaborating = () => {
  const { username } = useContext(Moodify)
  const [isElaboratingVisible, setIsElaboratingVisible] = useState(false)
  const [newHeadline, setNewHeadline] = useState('')

  const THREE_SECONDS = 3000
  const NINE_SECONDS = 9000

  const { headline, imageAlt, cta, sentences } = copyText.elaborating

  useEffect(() => {
    const timerElaborating = setTimeout(() => {
      let maxNumber = sentences.length
      let randomNumber = Math.floor(Math.random() * maxNumber + 1)
      setNewHeadline(sentences[randomNumber])
    }, THREE_SECONDS)

    return () => clearInterval(timerElaborating)
  })

  useEffect(() => {
    const timerElaboratingEnd = setTimeout(() => {
      setIsElaboratingVisible(true)
    }, NINE_SECONDS)

    return () => {
      setIsElaboratingVisible(true)
      clearInterval(timerElaboratingEnd)
    }
  }, [])

  return (
    <section className="Elaborating">
      {!isElaboratingVisible && (
        <>
          <h2 className="Elaborating__headline">{newHeadline}</h2>
          <div className="Elaborating__spinner"></div>
        </>
      )}
      {isElaboratingVisible && (
        <>
          <h2 className="Elaborating__headline">
            {headline} <span>{username}</span>.
          </h2>
          <figure className="Elaborating__image">
            <img alt={imageAlt} src={elaboratingImage}></img>
          </figure>
        </>
      )}
      <Link to="/results">
        {isElaboratingVisible && (
          <button className="Elaborating__button">{cta}</button>
        )}
      </Link>
    </section>
  )
}

export default Elaborating
