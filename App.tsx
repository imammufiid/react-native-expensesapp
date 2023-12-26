import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createStackNavigator} from "@react-navigation/stack";
import ROUTES_NAMED from "@/navigation/Routes";
import {ManageExpense} from "@/screens/ManageExpense";
import {StackNavigator} from "@/navigation/navigator/StackNavigator";



export default function App() {
  return (
    <>
      <StatusBar style={"auto"}/>
      <StackNavigator/>
    </>
  );
}

