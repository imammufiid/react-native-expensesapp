import {StyleSheet, Text, TouchableOpacity, View, ViewStyle} from "react-native";
import {Colors, StyleColor} from "@/utils/constants/color";

export type ButtonProps = {
  children: any,
  onPress: () => void,
  mode?: "flat",
  style?: ViewStyle
}

export const Button = (props: ButtonProps) => {
  const {children, onPress, mode, style} = props
  return (
    <View style={style}>
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.button, mode === 'flat' && styles.flat]}>
          <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>
            {children}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: StyleColor.primaryColor,
  },
  flat: {
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: Colors.white,
    textAlign: 'center'
  },
  flatText: {
    color: StyleColor.accentColor
  }
})