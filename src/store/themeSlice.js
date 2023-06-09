import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    themeState: {
      state: false,
      themeName: 'Light',
    },
  },
  reducers: {
    toggleTheme(state, action) {
      state.themeState.state = !state.themeState.state;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
