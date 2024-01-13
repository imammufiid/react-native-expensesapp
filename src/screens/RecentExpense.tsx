import {ExpensesOutput} from "@components/ExpensesOutput/ExpensesOutput";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {getDateMinusDays} from "@/utils/date";
import {Expense} from "@data/models/Expense";

export const RecentExpense = () => {
  const filter7DaysAgo = (expense: Expense) => {
    const today = new Date()
    const date7DaysAgo = getDateMinusDays(today, 7)
    return expense.date > date7DaysAgo
  }

  const expenses = useSelector((state: RootState) => state.expense.expenses)
    .filter(filter7DaysAgo)

  console.log('Recent Expense', expenses)

  return (
    <ExpensesOutput expenses={expenses} expensesPeriod='Last 7 Days'/>
  )
}