import React from 'react';

import { StyleSheet, View, TouchableOpacity } from 'react-native';

import {
  Text
} from "native-base";

const CustomRadioButton = ({ onPress, selected, children, index, radioMaxW }) => {
  return (
    <View style={styles(radioMaxW).radioButtonContainer}>
      <TouchableOpacity onPress={onPress} style={styles(radioMaxW).radioButton}>
        {selected ? <View style={styles(radioMaxW).radioButtonIcon}><label>{index}</label></View> : <View><label>{index}</label></View>}
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles(radioMaxW).radioButtonText}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = (radioMaxW) => StyleSheet.create({
  radioButtonContainer: {
    width: radioMaxW,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  radioButton: {
    height: 40,
    width: 40,
    backgroundColor: "#F8F8F8",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#20D489",
    alignItems: "center",
    justifyContent: "center"
  },
  radioButtonIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "#20D489"
  },
  radioButtonText: {
    fontSize: 16,
    marginLeft: 16
  }
});


export default CustomRadioButton;
