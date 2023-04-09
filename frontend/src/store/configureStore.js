// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import fixturesReducer from '../features/fixtures/fixturesSlice';
import standingsReducer from '../features/standings/standingsSlice';
import loginReducer from '../features/login/loginSlice';
const store = configureStore({
  reducer: {
    fixtures: fixturesReducer,
    standing: standingsReducer,
    login: loginReducer,
  },
});

export default store;
