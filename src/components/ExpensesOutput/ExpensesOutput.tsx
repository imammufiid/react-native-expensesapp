import {StyleSheet, View, Text} from "react-native";
import {ExpensesSummary} from "@components/ExpensesOutput/ExpensesSummary";
import {ExpensesList} from "@components/ExpensesOutput/ExpensesList";
import {Expense} from "@data/models/Expense";
import {Colors, StyleColor} from "@/utils/constants/color";

export type ExpensesOutputProp = {
  expenses: Expense[],
  expensesPeriod: string
  fallback: string
}

export const ExpensesOutput = (props: ExpensesOutputProp) => {
  let content = <Text style={styles.infoText}>{props.fallback}</Text>

  if (props.expenses.length > 0) {
    content = <ExpensesList expenses={props.expenses}/>
  }
  return (
    <View style={styles.container}>
      <ExpensesSummary
        expenses={props.expenses}
        periodName={props.expensesPeriod}/>
      {content}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: StyleColor.primaryDarkColor
  },
  infoText: {
    color: Colors.white,
    fontSize: 16,
    textAlign: 'center',
    marginTop: 32
  }
})