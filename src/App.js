import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Intro from './views/Intro/Intro'
import Question1 from './views/Question1/Question1'
import Elaborating from './views/Elaborating/Elaborating'
import Results from './views/Results/Results'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons'
import './App.scss';

library.add(fab, faPlay, faStop)

function App() {
  return (
    <div className="App">
			<Router>
				<Route exact path="/" component={Intro}/>
				<Route path="/question1" component={Question1}/>
				<Route path="/elaborating" component={Elaborating} />
				<Route path="/results" component={Results} />
			</Router>
    </div>
  );
}

export default App;
