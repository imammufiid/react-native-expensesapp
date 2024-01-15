import {StyleProp, StyleSheet, Text, TextInput, TextInputProps, View} from "react-native";
import {Colors, StyleColor} from "@/utils/constants/color";

export type InputProps = {
  label: string,
  textInputConfig?: TextInputProps,
  style?: StyleProp<any>
}

export const Input = (props: InputProps) => {

  let inputStyle: StyleProp<any>[] = [styles.textInput]
  if (props.textInputConfig && props.textInputConfig.multiline) {
    inputStyle.push(styles.inputMultiline)
  }

  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        style={inputStyle}
        {...props.textInputConfig}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
    marginVertical: 8
  },
  label: {
    fontSize: 12,
    color: StyleColor.accentColor
  },
  textInput: {
    backgroundColor: Colors.grey300,
    padding: 8,
    borderRadius: 6,
    fontSize: 18,
    color: StyleColor.textColor,
    marginTop: 4,
    fontWeight: 'bold'
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top'
  }
})