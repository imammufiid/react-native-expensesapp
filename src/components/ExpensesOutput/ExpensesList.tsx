import {FlatList, ListRenderItemInfo, Text} from "react-native";
import {Expense} from "@data/models/Expense";

export type ExpensesListProp = {
  expenses: Expense[],
}

const renderExpenseItem = (itemData: ListRenderItemInfo<Expense>) => {
  return (
    <Text>{itemData.item.description}</Text>
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