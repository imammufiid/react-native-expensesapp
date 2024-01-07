import {StyleSheet, TouchableOpacity, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";

export type IconButtonProps = {
  icon: any,
  size: number,
  color: any,
  onPress: () => void
}

export const IconButton = (props: IconButtonProps) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.buttonContainer}>
        <Ionicons name={props.icon} size={props.size} color={props.color}/>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2
  },
})