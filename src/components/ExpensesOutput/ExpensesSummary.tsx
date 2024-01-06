import {StyleSheet, Text, View} from "react-native";
import {Expense} from "@data/models/Expense";
import {Colors, StyleColor} from "@/utils/constants/color";

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
    <View style={styles.container}>
      <Text style={styles.period}>{props.periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: StyleColor.accentColor,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  period: {
    fontSize: 12,
    color: StyleColor.primaryDarkColor,
  },
  sum: {
    fontSize: 16,
    fontWeight: 'bold',
    color: StyleColor.primaryDarkColor
  }
})