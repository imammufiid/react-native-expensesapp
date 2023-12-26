import {NavigationProp} from "@react-navigation/native";
import ROUTES_NAMED from "@/navigation/Routes";


type ScreenNames = (keyof typeof ROUTES_NAMED)[]
export type RootStackParamList = Record<ScreenNames[number], BaseProps>;
export type StackNavigation = NavigationProp<RootStackParamList>;

export interface BaseProps {
}