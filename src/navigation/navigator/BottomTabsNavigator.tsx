import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ROUTES_NAMED from "@/navigation/Routes";
import {RecentExpense} from "@/screens/RecentExpense";
import {AllExpenses} from "@/screens/AllExpenses";

const BottomTabs = createBottomTabNavigator()

export const ExpensesOverviewBottomTabs = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen
        name={ROUTES_NAMED.RECENT_EXPENSES}
        component={RecentExpense}/>
      <BottomTabs.Screen
        name={ROUTES_NAMED.ALL_EXPENSES}
        component={AllExpenses}/>
    </BottomTabs.Navigator>
  )
}