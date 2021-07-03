import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Intro from './views/Intro/Intro'
import Question1 from './views/Question1/Question1'
import Elaborating from './views/Elaborating'
import Results from './views/Results/Results'

import './App.scss';

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
