import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ROUTES_NAMED from "@/navigation/Routes";
import {RecentExpense} from "@/screens/RecentExpense";
import {AllExpenses} from "@/screens/AllExpenses";
import {Colors, StyleColor} from "@/utils/constants/color";
import {Ionicons} from "@expo/vector-icons";
import {IconButton} from "@components/commons/IconButton";

const BottomTabs = createBottomTabNavigator()

export const ExpensesOverviewBottomTabs = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({navigation}) => (
        {
          headerStyle: {
            backgroundColor: StyleColor.primaryColor,
          },
          headerTintColor: Colors.white,
          tabBarStyle: {
            backgroundColor: StyleColor.primaryColor
          },
          tabBarActiveTintColor: StyleColor.accentColor,
          tabBarInactiveTintColor: Colors.grey300,
          tabBarLabelStyle: {
            fontWeight: 'bold',
            fontSize: 12
          },
          headerRight: ({tintColor}) => (
            <IconButton
              icon="add"
              size={24}
              color={tintColor}
              onPress={() => navigation.navigate(ROUTES_NAMED.MANAGE_EXPENSE)}/>
          )
        }
      )}>
      <BottomTabs.Screen
        name={ROUTES_NAMED.RECENT_EXPENSES}
        component={RecentExpense}
        options={{
          headerTitle: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="hourglass" size={size} color={color}/>
          )
        }}/>
      <BottomTabs.Screen
        name={ROUTES_NAMED.ALL_EXPENSES}
        component={AllExpenses}
        options={{
          headerTitle: 'All Expenses',
          tabBarLabel: 'All',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="calendar" size={size} color={color}/>
          )
        }}/>
    </BottomTabs.Navigator>
  )
}