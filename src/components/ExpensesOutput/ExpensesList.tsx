import {FlatList, ListRenderItemInfo, Text} from "react-native";
import {Expense} from "@data/models/Expense";
import {ExpenseItem} from "@components/ExpensesOutput/ExpenseItem";

export type ExpensesListProp = {
  expenses: Expense[],
}

const renderExpenseItem = (itemData: ListRenderItemInfo<Expense>) => {
  return (
    <ExpenseItem {...itemData.item}/>
  )
}

export const ExpensesList = (props: ExpensesListProp) => {
  return (
    <FlatList
      data={props.expenses}
      keyExtractor={(item) => item.id}
      renderItem={renderExpenseItem}/>
  )
}