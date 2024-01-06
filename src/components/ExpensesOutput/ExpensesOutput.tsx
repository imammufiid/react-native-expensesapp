import {StyleSheet, View} from "react-native";
import {ExpensesSummary} from "@components/ExpensesOutput/ExpensesSummary";
import {ExpensesList} from "@components/ExpensesOutput/ExpensesList";
import {Expense} from "@data/models/Expense";
import {StyleColor} from "@/utils/constants/color";

export type ExpensesOutputProp = {
  expenses: Expense[],
  expensesPeriod: string
}

export const ExpensesOutput = (props: ExpensesOutputProp) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary
        expenses={props.expenses}
        periodName={props.expensesPeriod}/>
      <ExpensesList expenses={props.expenses}/>
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
  }
})