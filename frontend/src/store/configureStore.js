// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import fixturesReducer from '../features/fixtures/fixturesSlice';
import standingsReducer from '../features/standings/standingsSlice';

const store = configureStore({
  reducer: {
    fixtures: fixturesReducer,
    standing: standingsReducer,
  },
});

export default store;
