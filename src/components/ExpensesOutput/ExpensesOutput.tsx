import {View} from "react-native";
import {ExpensesSummary} from "@components/ExpensesOutput/ExpensesSummary";
import {ExpensesList} from "@components/ExpensesOutput/ExpensesList";

export type ExpensesOutputProp = {
  expenses: any[],
  expensesPeriod: string
}

const DUMMY_EXPENSES = [

]

export const ExpensesOutput = (props: ExpensesOutputProp) => {
  return (
    <View>
      <ExpensesSummary
        expenses={props.expenses}
        periodName={props.expensesPeriod}/>
      <ExpensesList/>
    </View>
  )
}