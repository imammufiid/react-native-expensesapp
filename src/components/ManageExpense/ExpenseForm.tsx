import {Alert, StyleSheet, Text, View} from "react-native";
import {Input} from "@components/ManageExpense/Input";
import {StyleColor} from "@/utils/constants/color";
import {useState} from "react";
import {Button} from "@components/commons/Button";
import {Expense} from "@data/models/Expense";
import {generateRandomString} from "@/utils/string";
import {getFormatDate} from "@/utils/date";

type ExpenseDataForm = {
  id: FormProperty,
  amount: FormProperty,
  date: FormProperty,
  description: FormProperty
}

type FormProperty = {
  value: any,
  isValid: boolean
}

type ExpenseFormProps = {
  isEditable: boolean,
  expense?: Expense,
  onCancel: () => void,
  onSubmit: (data: Expense) => void,
}

export const ExpenseForm = (props: ExpenseFormProps) => {
  const {expense} = props
  const initialExpenseDataForm: ExpenseDataForm = {
    id: {
      value: expense ? expense.id : '',
      isValid: !!expense
    },
    amount: {
      value: expense ? expense.amount.toString() : '',
      isValid: true
    },
    date: {
      value: expense ? getFormatDate(expense.date) : '',
      isValid: true
    },
    description: {
      value: expense ? expense.description : '',
      isValid: true
    },
  }
  const [inputs, setInputs] = useState(initialExpenseDataForm)

  const inputChangedHandler = (identifier: string, value: string) => {
    setInputs((prevState) => (
      {
        ...prevState,
        [identifier]: {value: value, isValid: true}
      }
    ))
  }
  const getId = () => {
    if (inputs.id.value === '') {
      return generateRandomString(3)
    }
    return inputs.id.value
  }
  const onCancelHandler = () => props.onCancel()
  const onSubmitHandler = () => {
    const data = new Expense(
      getId(),
      inputs.description.value,
      +inputs.amount.value,
      new Date(inputs.date.value)
    )
    if (!validateInput(data)) return
    props.onSubmit(data)
  }

  const validateInput = (data: Expense) => {
    const amountIsValid = data.amount > 0
    const dateIsValid = data.date.toString() !== 'Invalid Date'
    const descriptionIsValid = data.description.trim().length > 0
    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      setInputs((prevState) => {
        return {
          ...prevState,
          amount: {value: prevState.amount.value, isValid: amountIsValid },
          date: {value: prevState.date.value, isValid: dateIsValid },
          description: {value: prevState.description.value, isValid: descriptionIsValid },
        }
      })
      return false
    }
    return true
  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          label="Amount"
          isValid={inputs.amount.isValid}
          textInputConfig={{
            value: inputs.amount.value,
            placeholder: '0',
            keyboardType: 'decimal-pad',
            onChangeText: inputChangedHandler.bind(this, 'amount')
          }}
          style={styles.rowInput}/>
        <Input
          label="Date"
          isValid={inputs.date.isValid}
          textInputConfig={{
            value: inputs.date.value,
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, 'date')
          }}
          style={styles.rowInput}/>
      </View>
      <Input
        label="Description"
        isValid={inputs.description.isValid}
        textInputConfig={{
          value: inputs.description.value,
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