import {DUMMY_EXPENSES} from "@data/source/local/DummyData";
import {ExpensesOutput} from "@components/ExpensesOutput/ExpensesOutput";

export const RecentExpense = () => {
  return (
    <ExpensesOutput expenses={DUMMY_EXPENSES} expensesPeriod='Last 7 Days'/>
  )
}