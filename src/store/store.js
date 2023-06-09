import { configureStore } from '@reduxjs/toolkit';
import generalReducer from './slices';
import themeReducer from './themeSlice';

// configure stores for containing reducers
const store = configureStore({
  reducer: {
    generalReducer: generalReducer,
    themeReducer: themeReducer,
  },
});

export default store;
