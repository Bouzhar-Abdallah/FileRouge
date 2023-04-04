// src/App.js
import React, { useEffect } from 'react';


import Test from './components/Navbar';
import Fixtures from './features/fixtures/Fixtures';
import Standings from './features/standings/Standings';
import { useDispatch } from 'react-redux';
import { getStandings } from './features/standings/standingsSlice';
import { getGames } from './features/fixtures/fixturesSlice';


function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getGames());
  }, []);
  
  useEffect(() => {
    dispatch(getStandings())
  }, [])

  return (
    <div>
      <Test />
      <Standings />
      <Fixtures />
      
    </div>
  );
}

export default App;
