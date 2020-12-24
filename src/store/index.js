import { configureStore } from "@reduxjs/toolkit"
import userReducer from '../slice/userSlice';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const rootReducer = {
  user: userReducer,
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger]
})
