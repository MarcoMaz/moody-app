import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Intro from './views/Intro'
import Question1 from './views/Question1'
import Elaborating from './views/Elaborating'
import Results from './views/Results'

import './App.css';

function App() {
  return (
    <div className="App">
			<Router>
				<Route exact path="/" component={Intro}/>
				<Route path="/question1" component={Question1}/>
				<Route path="/elaborating" component={Elaborating} />
				<Route path="/results" component={Results} />
			</Router>
			bau
    </div>
  );
}

export default App;
