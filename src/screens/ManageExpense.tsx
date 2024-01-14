import {StyleSheet, Text, View} from "react-native";
import {useLayoutEffect} from "react";
import {IconButton} from "@components/commons/IconButton";
import {Colors, StyleColor} from "@/utils/constants/color";
import {Button} from "@components/commons/Button";
import {useDispatch} from "react-redux";
import {
  addExpense,
  AddExpensePayload,
  deleteExpense,
  DeleteExpensePayload, updateExpense,
  UpdateExpensePayload
} from "@/redux/expenses";
import {Expense} from "@data/models/Expense";

export type ManageExpenseParams = {
  expenseId: string
}
export const ManageExpense = (props: any) => {
  const {route, navigation} = props
  const params = route.params as ManageExpenseParams | undefined
  const isEditing = !!params?.expenseId
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

  const confirmHandler = () => {
    if (!isEditing) {
      const data: AddExpensePayload = {
        expense: {id: 'e13', description: 'fasdfasdfasdf', amount: 10, date: new Date('2024-01-12')}
      }
      dispatch(addExpense(data))
    } else {
      const data: UpdateExpensePayload = {
        expense: {id: 'e13', description: '123123123123', amount: 0, date: new Date('2024-01-12')}
      }
      dispatch(updateExpense(data))
    }
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button
          onPress={cancelHandler}
          mode='flat' style={styles.button}>
          Cancel
        </Button>
        <Button
          onPress={confirmHandler}
          style={styles.button}>
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View>
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
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: StyleColor.accentColor,
    alignItems: 'center'
  }
})