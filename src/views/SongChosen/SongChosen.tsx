import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface SongChosenProps {
  titleChoice: string
  artistChoice: string
  imageUrlChoice: string
  imageModalAlt: string
  songChangeLabel: string,
	isPlaying: boolean,
	start: () => void,
	stop: () => void,
  handleChangeSong: () => void
}

const SongChosen: React.FunctionComponent<SongChosenProps> = ({
  titleChoice,
  artistChoice,
  imageUrlChoice,
  imageModalAlt,
  songChangeLabel,
	isPlaying,
	start,
	stop,
  handleChangeSong,
}) => {
  return (
    <div className="SongChosen">
      <h1 className="SongChosen__title">{titleChoice}</h1>
      <h2 className="SongChosen__artist">{artistChoice}</h2>
      <figure className="SongChosen__image">
        <img src={imageUrlChoice} alt={imageModalAlt} />
      </figure>
      <div className="SongChosen__buttons">
        {!isPlaying ? (
          <button className="SongChosen__play" onClick={start}>
            <FontAwesomeIcon icon="play" />
          </button>
        ) : (
          <button className="SongChosen__stop" onClick={stop}>
            <FontAwesomeIcon icon="stop" />
          </button>
        )}
        <button className="SongChosen__change" onClick={handleChangeSong}>
          {songChangeLabel}
        </button>
      </div>
    </div>
  )
}

export default SongChosen