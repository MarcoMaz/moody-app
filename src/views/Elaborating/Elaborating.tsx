import { useEffect, useState, useContext } from 'react'
import { Moodify } from '../../App'
import { Link } from 'react-router-dom'

import elaboratingImage from '../../assets/image-elaborating-02.png'
import copyText from '../../assets/copyText.js'

import './Elaborating.scss'

interface ElaboratingProps {
  headline: string
  imageAlt: string
  cta: string
  sentences: string[]
}

const Elaborating: React.FunctionComponent = () => {
  const { username } = useContext(Moodify)
  const [isElaboratingVisible, setIsElaboratingVisible] = useState<boolean>(
    false,
  )
  const [newHeadline, setNewHeadline] = useState<string>('')

  const THREE_SECONDS: number = 3000
  const NINE_SECONDS: number = 9000

  const {
    headline,
    imageAlt,
    cta,
    sentences,
  }: ElaboratingProps = copyText.elaborating

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
          <h1 className="Elaborating__headline">{newHeadline}</h1>
          <div className="Elaborating__spinner" />
        </>
      )}
      {isElaboratingVisible && (
        <>
          <h1 className="Elaborating__headline">
            {headline} <span>{username}</span>.
          </h1>
          <figure className="Elaborating__image">
            <img alt={imageAlt} src={elaboratingImage} />
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
