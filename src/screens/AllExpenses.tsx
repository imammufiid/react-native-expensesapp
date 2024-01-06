import {ExpensesOutput} from "@components/ExpensesOutput/ExpensesOutput";
import {DUMMY_EXPENSES} from "@data/source/local/DummyData";

export const AllExpenses = () => {
  return (
    <ExpensesOutput expenses={DUMMY_EXPENSES} expensesPeriod='Total'/>
  )
}