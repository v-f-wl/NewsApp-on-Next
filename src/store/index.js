import { configureStore } from "@reduxjs/toolkit";
import userReduser from './userSlice'
// настриваем

//экспортируем 
export default configureStore({
  // можно несколько 
  reducer: {
    user: userReduser
  }
})