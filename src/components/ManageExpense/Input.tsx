import {StyleProp, StyleSheet, Text, TextInput, TextInputProps, View} from "react-native";
import {Colors, StyleColor} from "@/utils/constants/color";

export type InputProps = {
  label: string,
  isValid?: boolean,
  textInputConfig?: TextInputProps,
  style?: StyleProp<any>
}

export const Input = (props: InputProps) => {

  let inputStyle: StyleProp<any>[] = [styles.textInput]
  if (props.textInputConfig && props.textInputConfig.multiline) {
    inputStyle.push(styles.inputMultiline)
  }
  if (!props.isValid) {
    inputStyle.push(styles.invalidInput)
  }

  return (
    <View style={[styles.container, props.style]}>
      <Text style={[styles.label, !props.isValid && styles.invalidLabel ]}>{props.label}</Text>
      <TextInput
        style={inputStyle}
        {...props.textInputConfig}/>
      {!props.isValid && <Text style={styles.errorText}>Invalid input values</Text>}
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
  },
  invalidLabel: {
    color: Colors.red500
  },
  invalidInput: {
    backgroundColor: Colors.red500
  },
  errorText: {
    marginTop: 4,
    color: Colors.red500,
  }
})