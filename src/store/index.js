import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './todo-slice.js';

const store = configureStore({
  reducer: { todo: todoSlice.reducer },
});

export default store;
