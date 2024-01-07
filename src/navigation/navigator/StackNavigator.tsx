import {createStackNavigator} from "@react-navigation/stack";
import ROUTES_NAMED from "@/navigation/Routes";
import {ManageExpense} from "@/screens/ManageExpense";
import {NavigationContainer} from "@react-navigation/native";
import {ExpensesOverviewBottomTabs} from "@/navigation/navigator/BottomTabsNavigator";
import {RootStackParamList} from "@/navigation/Utils";
import {Colors, StyleColor} from "@/utils/constants/color";

const Stack = createStackNavigator<RootStackParamList>()

export const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: StyleColor.primaryColor,
          },
          headerTintColor: Colors.white
        }}>
        <Stack.Screen
          name={ROUTES_NAMED.EXPENSES_OVERVIEW}
          component={ExpensesOverviewBottomTabs}
          options={{
            headerShown: false
          }}/>
        <Stack.Screen
          name={ROUTES_NAMED.MANAGE_EXPENSE}
          options={{
            presentation: 'modal',
            headerLeft: () => null
          }}
          component={ManageExpense}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}