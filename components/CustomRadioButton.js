import React from 'react';

import { StyleSheet, View, TouchableOpacity } from 'react-native';

import {
  Text
} from "native-base";

const CustomRadioButton = ({ onPress, selected, children, isLiked, setIsLiked }) => {
  return (
    <View style={styles.radioButtonContainer}>
      <TouchableOpacity onPress={onPress} style={styles.radioButton}>
        {selected ? <View style={styles.radioButtonIcon}><label>14</label></View> : <View><label>14</label></View>}
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.radioButtonText}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  radioButtonContainer: {
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
    borderColor: "#E6E6E6",
    alignItems: "center",
    justifyContent: "center"
  },
  radioButtonIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 28,
    width: 28,
    borderRadius: 14,
    backgroundColor: "#98CFB6"
  },
  radioButtonText: {
    fontSize: 16,
    marginLeft: 16
  }
});


export default CustomRadioButton;
