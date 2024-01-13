import {StatusBar} from 'expo-status-bar';
import {StackNavigator} from "@/navigation/navigator/StackNavigator";
import {Provider} from "react-redux";
import {store} from "@/redux/store";


export default function App() {
  return (
    <>
      <StatusBar style={"auto"}/>
      <Provider store={store}>
        <StackNavigator/>
      </Provider>
    </>
  );
}

