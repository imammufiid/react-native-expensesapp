import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Expense} from "@data/models/Expense";
import {DUMMY_EXPENSES} from "@data/source/local/DummyData";

type ExpensesState = {
  expenses: Expense[]
}

const initialState: ExpensesState = {
  expenses: DUMMY_EXPENSES
}

export type AddExpensePayload = {
  expense: Expense
}

export type UpdateExpensePayload = {
  expense: Expense
}

export type DeleteExpensePayload = {
  id: string
}

const expensesSlice = createSlice({
  initialState: initialState,
  name: 'expense',
  reducers: {
    addExpense: (state, action: PayloadAction<AddExpensePayload>) => {
      const payload = action.payload
      state.expenses.splice(0, 0, payload.expense)
    },
    deleteExpense: (state, action: PayloadAction<DeleteExpensePayload>) => {
      const expenseIndex = state.expenses.findIndex(ex => ex.id === action.payload.id)
      state.expenses.splice(expenseIndex, 1)
    },
    updateExpense: (state, action: PayloadAction<UpdateExpensePayload>) => {
      const expenseIndex = state.expenses.findIndex(ex => ex.id === action.payload.expense.id)
      const expense = state.expenses[expenseIndex]
      const payload = action.payload.expense
      state.expenses[expenseIndex] = new Expense(expense.id, payload.description, payload.amount, payload.date)
    },
  }
})

export const {addExpense, updateExpense, deleteExpense} = expensesSlice.actions


export default expensesSlice.reducer