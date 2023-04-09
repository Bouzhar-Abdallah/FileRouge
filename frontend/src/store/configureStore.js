// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/login/loginSlice';
import fixturesReducer from '../features/fixtures/fixturesSlice';
import standingsReducer from '../features/standings/standingsSlice';
import playersReducer from '../features/fantazy/playersSlice';
const store = configureStore({
  reducer: {
    fixtures: fixturesReducer,
    standing: standingsReducer,
    login: loginReducer,
    players: playersReducer,
  },
});

export default store;
