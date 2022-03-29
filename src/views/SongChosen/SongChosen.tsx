// eslint-disable-next-line no-use-before-define
import React from 'react';
import { FaPlay, FaStop } from 'react-icons/fa';

interface SongChosenProps {
  titleChoice: string;
  artistChoice: string;
  imageUrlChoice: string;
  imageModalAlt: string;
  songChangeLabel: string;
  isPlaying: boolean;
  start: () => void;
  stop: () => void;
  handleChangeSong: () => void;
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
          <button type="button" className="SongChosen__play" onClick={start}>
            <FaPlay />
          </button>
        ) : (
          <button type="button" className="SongChosen__stop" onClick={stop}>
            <FaStop />
          </button>
        )}
        <button
          type="button"
          className="SongChosen__change"
          onClick={handleChangeSong}
        >
          {songChangeLabel}
        </button>
      </div>
    </div>
  );
};

export default SongChosen;
