import audio from '../dormono.mp3';

const Results = () => {

	let newAudio = new Audio(audio)

	const start = () => {
    newAudio.play();
  }

	const stop = () => {
		newAudio.pause()
	}


	return(
		<div>
			questi sono i risultati
			<div>
				<strong>Io sono un risultato</strong><br/>
				<button onClick={start}>Play me!</button>
				<button onClick={stop}>Stop me!</button>
			</div>
		</div>
	)
}

export default Results