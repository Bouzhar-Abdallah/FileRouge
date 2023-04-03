// src/App.js
import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Test from './components/Navbar';
import { getGames } from './features/fixtures/fixturesSlice';

function App() {
  const { weeks, isLoading} = useSelector((state) => state.fixtures);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGames());
  }, []);

  return (
    <div>
      <Test />
      
    </div>
  );
}

export default App;
