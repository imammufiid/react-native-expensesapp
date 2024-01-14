import {configureStore} from "@reduxjs/toolkit";
import expenseReducer from "./expenses"

export const store = configureStore({
  reducer: {
    expense: expenseReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
})

export type RootState = ReturnType<typeof store.getState>