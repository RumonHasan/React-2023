import { configureStore } from '@reduxjs/toolkit';
import generalReducer from './slices';

// configure stores for containing reducers
const store = configureStore({
  reducer: {
    generalReducer: generalReducer,
  },
});

export default store;
