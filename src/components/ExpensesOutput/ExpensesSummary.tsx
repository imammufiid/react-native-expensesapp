import {Text, View} from "react-native";
import {Expense} from "@data/models/Expense";

export type ExpensesSummaryProps = {
  expenses: Expense[],
  periodName: string
}

export const ExpensesSummary = (props: ExpensesSummaryProps) => {
  const expensesSum = props.expenses
    .reduce((sum, expense) => {
      return sum + expense.amount
    }, 0)

  return (
    <View>
      <Text>{props.periodName}</Text>
      <Text>${expensesSum.toFixed(2)}</Text>
    </View>
  )
}