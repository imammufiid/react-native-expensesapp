import {configureStore} from "@reduxjs/toolkit";
import expenseReducer from "./expenses"

export const store = configureStore({
  reducer: {
    expense: expenseReducer
  }
})

export type RootState = ReturnType<typeof store.getState>