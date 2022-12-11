import React, { useState } from 'react';

import { StyleSheet, View, TouchableOpacity } from 'react-native';

import CustomRadioButton from './CustomRadioButton';

import {
  Text,
  Box
} from "native-base";

const Likert = (props) => {
  const question = props.question;
  const formAnswer = props.formAnswer;
  const setFormAnswer = props.setFormAnswer;

  const [isLiked, setIsLiked] = useState([
    { id: 1, value: true, name: "Yes", selected: false },
    { id: 2, value: false, name: "No", selected: false }
  ]);

  const handleInsertLikert = (item) => {
    let updatedState = isLiked.map((isLikedItem) =>
      isLikedItem.id === item.id
        ? { ...isLikedItem, selected: true }
        : { ...isLikedItem, selected: false }
    );

    setIsLiked(updatedState);
  };

  return (
    <Box 
      alignItems="center" 
      w="100%"
      paddingBottom='4px'
      borderBottomWidth='1px'
      borderBottomColor='#BDC5CD'
    >
      <Text mb="4" bold fontSize="lg">
        {question.question}
      </Text>

      <Box
        display='flex'
        flexDirection='row'
      >
        {isLiked.map((item) => (
          <CustomRadioButton
            onPress={() => handleInsertLikert(item)}
            selected={item.selected}
            key={item.id}
            isLiked={isLiked}
            setIsLiked={setIsLiked}
          >
            {item.name}
          </CustomRadioButton>
        ))}
      </Box>
    </Box>
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


export default Likert;
