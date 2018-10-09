import React from 'react';
import './App.css';

import Navigation from './container/Navigation';
import Main from './container/Main';

const App = () => (
  <div className='app'>
    <h1>Raphael Carpi</h1>
    <Navigation />
    <Main />
  </div>
);
export default App;