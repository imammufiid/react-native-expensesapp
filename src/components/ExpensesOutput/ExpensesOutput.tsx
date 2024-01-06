import {View} from "react-native";
import {ExpensesSummary} from "@components/ExpensesOutput/ExpensesSummary";
import {ExpensesList} from "@components/ExpensesOutput/ExpensesList";
import {Expense} from "@data/models/Expense";

export type ExpensesOutputProp = {
  expenses: Expense[],
  expensesPeriod: string
}

export const ExpensesOutput = (props: ExpensesOutputProp) => {
  return (
    <View>
      <ExpensesSummary
        expenses={props.expenses}
        periodName={props.expensesPeriod}/>
      <ExpensesList expenses={props.expenses}/>
    </View>
  )
}