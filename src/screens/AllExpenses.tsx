import {ExpensesOutput} from "@components/ExpensesOutput/ExpensesOutput";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";

export const AllExpenses = () => {
  const expenses = useSelector((state: RootState) => state.expense.expenses)
  console.log('All Expense', expenses)
  return (
    <ExpensesOutput expenses={expenses} expensesPeriod='Total' fallback="No Data"/>
  )
}