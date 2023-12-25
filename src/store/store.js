import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../store/slice";

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})