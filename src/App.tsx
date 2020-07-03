import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Chat from './components/Chat/Chat';

const App = () => (
  <Router>
    <Route path="/chat" component={Chat}></Route>
  </Router>
);

export default App;
