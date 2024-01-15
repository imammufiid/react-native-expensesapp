import {StyleSheet, Text, View} from "react-native";
import {Input} from "@components/ManageExpense/Input";
import {StyleColor} from "@/utils/constants/color";
import {useEffect, useState} from "react";
import {Button} from "@components/commons/Button";
import {Expense} from "@data/models/Expense";
import {generateRandomString} from "@/utils/string";
import {getFormatDate} from "@/utils/date";

type ExpenseDataForm = {
  id: string,
  amount: string,
  date: string,
  description: string
}

const initialExpenseDataForm: ExpenseDataForm = {
  id: '',
  amount: '',
  date: '',
  description: '',
}

type ExpenseFormProps = {
  isEditable: boolean,
  expense?: Expense,
  onCancel: () => void,
  onSubmit: (data: Expense) => void,
}

export const ExpenseForm = (props: ExpenseFormProps) => {
  const {expense} = props
  const [inputValues, setInputValues] = useState(initialExpenseDataForm)

  useEffect(() => {
    setInputValues((prevState) => (
      {
        ...prevState,
        id: expense?.id ?? '',
        amount: expense?.amount.toString() ?? '',
        date: getFormatDate(expense?.date ?? new Date()),
        description: expense?.description ?? '',
      }
    ))
  }, [props])

  const inputChangedHandler = (identifier: string, value: string) => {
    setInputValues((prevState) => (
      {
        ...prevState,
        [identifier]: value
      }
    ))
  }
  const getId = () => {
    if (inputValues.id === '') {
      return generateRandomString(3)
    }
    return inputValues.id
  }
  const onCancelHandler = () => props.onCancel()
  const onSubmitHandler = () => {
    const data = new Expense(getId(), inputValues.description, +inputValues.amount, new Date(inputValues.date))
    props.onSubmit(data)
  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          label="Amount"
          textInputConfig={{
            value: inputValues.amount,
            placeholder: '0',
            keyboardType: 'decimal-pad',
            onChangeText: inputChangedHandler.bind(this, 'amount')
          }}
          style={styles.rowInput}/>
        <Input
          label="Date"
          textInputConfig={{
            value: inputValues.date,
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, 'date')
          }}
          style={styles.rowInput}/>
      </View>
      <Input
        label="Description"
        textInputConfig={{
          value: inputValues.description,
          multiline: true,
          onChangeText: inputChangedHandler.bind(this, 'description')
        }}/>
      <View style={styles.buttons}>
        <Button
          onPress={onCancelHandler}
          mode='flat' style={styles.button}>
          Cancel
        </Button>
        <Button
          onPress={onSubmitHandler}
          style={styles.button}>
          {props.isEditable ? 'Update' : 'Add'}
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  form: {
    marginTop: 40
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: StyleColor.accentTextColor,
    textAlign: 'center',
    marginVertical: 24
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rowInput: {
    flex: 1
  }
})