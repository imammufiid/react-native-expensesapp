import {StyleSheet, View} from "react-native";
import {useLayoutEffect} from "react";
import {IconButton} from "@components/commons/IconButton";
import {Colors, StyleColor} from "@/utils/constants/color";
import {useDispatch, useSelector} from "react-redux";
import {
  addExpense,
  AddExpensePayload,
  deleteExpense,
  DeleteExpensePayload, updateExpense,
  UpdateExpensePayload
} from "@/redux/expenses";
import {ExpenseForm} from "@components/ManageExpense/ExpenseForm";
import {Expense} from "@data/models/Expense";
import {RootState} from "@/redux/store";

export type ManageExpenseParams = {
  expenseId: string
}
export const ManageExpense = (props: any) => {
  const {route, navigation} = props
  const params = route.params as ManageExpenseParams | undefined
  const isEditing = !!params?.expenseId
  const expenses = useSelector((state: RootState) => state.expense.expenses)
  const expense = expenses.find((item) => item.id === params?.expenseId)
  const dispatch = useDispatch()

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    })
  }, [navigation, isEditing])

  const deleteExpenseHandler = () => {
    const payload: DeleteExpensePayload = {
      id: params?.expenseId ?? ''
    }
    dispatch(deleteExpense(payload))
    navigation.goBack()
  }

  const cancelHandler = () => {
    navigation.goBack()
  }

  const updateExpenseHandler = (data: Expense) => {
    const payload: UpdateExpensePayload = {
      expense: data
    }
    dispatch(updateExpense(payload))
  }

  const addExpenseHandler = (data: Expense) => {
    const payload: AddExpensePayload = {
      expense: {...data}
    }
    dispatch(addExpense(payload))
  }

  const confirmHandler = (data: Expense) => {
    if (isEditing) updateExpenseHandler(data)
    else addExpenseHandler(data)

    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        expense={expense}
        isEditable={isEditing}
        onCancel={cancelHandler}
        onSubmit={confirmHandler}/>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            size={24}
            color={Colors.red500}
            onPress={deleteExpenseHandler}/>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: StyleColor.primaryDarkColor
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: StyleColor.accentColor,
    alignItems: 'center'
  }
})