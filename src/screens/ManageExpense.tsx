import {StyleSheet, Text, View} from "react-native";
import {useLayoutEffect} from "react";
import {IconButton} from "@components/commons/IconButton";
import {Colors, StyleColor} from "@/utils/constants/color";
import {Button} from "@components/commons/Button";

export type ManageExpenseParams = {
  expenseId: string
}
export const ManageExpense = (props: any) => {
  const {route, navigation} = props
  const params = route.params as ManageExpenseParams | undefined
  const isEditing = !!params?.expenseId

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    })
  }, [navigation, isEditing])

  const deleteExpenseHandler = () => {
    navigation.goBack()
  }

  const cancelHandler = () => {
    navigation.goBack()
  }

  const confirmHandler = () => {
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