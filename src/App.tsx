/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// eslint-disable-next-line no-use-before-define
import React, { useState, createContext } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Intro from './views/Intro/Intro';
import Question1 from './views/Questions/Question1';
import Question2 from './views/Questions/Question2';
import Question3 from './views/Questions/Question3';

import Elaborating from './views/Elaborating/Elaborating';
import Results from './views/Results/Results';

import './styles/main.scss';

interface MoodifyProps {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}

export const Moodify = createContext<MoodifyProps>({
  username: '',
  setUsername: () => {},
});

function App() {
  const [username, setUsername] = useState('');

  return (
    <Moodify.Provider value={{ username, setUsername }}>
      <div className="App">
        <Router>
          <Route exact path="/" component={Intro} />
          <Route path="/question1" component={Question1} />
          <Route path="/question2" component={Question2} />
          <Route path="/question3" component={Question3} />
          <Route path="/elaborating" component={Elaborating} />
          <Route path="/results" component={Results} />
        </Router>
      </div>
    </Moodify.Provider>
  );
}

export default App;
