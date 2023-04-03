// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import fixturesReducer from '../features/fixtures/fixturesSlice';

const store = configureStore({
  reducer: {
    fixtures: fixturesReducer,
  },
});

export default store;
