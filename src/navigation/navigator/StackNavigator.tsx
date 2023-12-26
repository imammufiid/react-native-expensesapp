import {createStackNavigator} from "@react-navigation/stack";
import ROUTES_NAMED from "@/navigation/Routes";
import {ManageExpense} from "@/screens/ManageExpense";
import {NavigationContainer} from "@react-navigation/native";
import {ExpensesOverviewBottomTabs} from "@/navigation/navigator/BottomTabsNavigator";

const Stack = createStackNavigator()

export const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ROUTES_NAMED.EXPENSES_OVERVIEW}
          component={ExpensesOverviewBottomTabs}/>
        <Stack.Screen
          name={ROUTES_NAMED.MANAGE_EXPENSE}
          component={ManageExpense}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}