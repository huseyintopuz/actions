import { configureStore } from '@reduxjs/toolkit';
import actionsReducer from '../app/api';

export const store = configureStore({
  reducer: {
    actions: actionsReducer,
  },
})