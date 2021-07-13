import React, { useState, createContext } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Intro from './views/Intro/Intro'
import Question1 from './views/Questions/Question1'
import Question2 from './views/Questions/Question2'
import Question3 from './views/Questions/Question3'

import Elaborating from './views/Elaborating/Elaborating'
import Results from './views/Results/Results'
import Video from './views/Video/Video'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faChevronLeft, faPlay, faStop } from '@fortawesome/free-solid-svg-icons'
import './App.scss';

export const Rosify = createContext()

library.add(fab, faPlay, faStop, faChevronLeft)

function App() {
	const [ username, setUsername ] = useState('')
	const [ isFilterActive, setIsFilterActive ] = useState(false)

  return (
		<Rosify.Provider value={{username, setUsername, isFilterActive, setIsFilterActive}}>
    <div className="App">
			<Router>
				<Route exact path="/" component={Intro}/>
				<Route path="/question1" component={Question1}/>
				<Route path="/question2" component={Question2}/>
				<Route path="/question3" component={Question3}/>
				<Route path="/elaborating" component={Elaborating} />
				<Route path="/results" component={Results} />
				<Route path="/video" component={Video} />
			</Router>
    </div>
		</Rosify.Provider>
  );
}

export default App;
