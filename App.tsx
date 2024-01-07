import {StatusBar} from 'expo-status-bar';
import {StackNavigator} from "@/navigation/navigator/StackNavigator";



export default function App() {
  return (
    <>
      <StatusBar style={"auto"}/>
      <StackNavigator/>
    </>
  );
}

