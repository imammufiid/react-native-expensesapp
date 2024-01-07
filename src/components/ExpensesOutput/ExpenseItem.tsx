import {TouchableOpacity, View, Text, StyleSheet} from "react-native";
import {Colors, StyleColor} from "@/utils/constants/color";
import {getFormatDate} from "@/utils/date";
import {useNavigation} from "@react-navigation/core";
import ROUTES_NAMED from "@/navigation/Routes";
import {StackNavigation} from "@/navigation/Utils";
import {ManageExpenseParams} from "@/screens/ManageExpense";


export type ExpenseItemProps = {
  id: string,
  description: string,
  amount: number,
  date: Date
}

export const ExpenseItem = (props: ExpenseItemProps) => {
  const {id, description, amount, date} = props
  const navigation = useNavigation<StackNavigation>()

  const expensePressHandler = () => {
    const params: ManageExpenseParams = {
      expenseId: id
    }
    navigation.navigate(ROUTES_NAMED.MANAGE_EXPENSE, params)
  }

  return (
    <TouchableOpacity
      onPress={expensePressHandler}>
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>{description}</Text>
          <Text style={styles.textBase}>{getFormatDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={[styles.textBase, styles.amount]}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: StyleColor.primaryColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
    elevation: 3,
    shadowColor: Colors.grey500,
    shadowRadius: 4,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4
  },
  textBase: {
    color: StyleColor.primaryDarkColor
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold'
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    minWidth: 80
  },
  amount: {
    color: StyleColor.primaryColor,
    fontWeight: 'bold'
  }
})