import React, { useState } from 'react';

import CustomRadioButton from './CustomRadioButton';

import {
  Text,
  Box
} from "native-base";

const Likert = (props) => {
  const question = props.question;
  const formAnswer = props.formAnswer;
  const setFormAnswer = props.setFormAnswer;
  const changeProgress = props.changeProgress;

  const [isLiked, setIsLiked] = useState(
    formAnswer && formAnswer[question.index-1].answers[0] ? 
    question.alternatives.map(alternative => {
      return {
        id: alternative.index, 
        value: false,
        name: alternative.value,
        selected: formAnswer[question.index-1].answers[0] == alternative.index ? true : false
      }})
    :
      question.alternatives.map(alternative => {
        return {
          id: alternative.index, 
          value: false,
          name: alternative.value,
          selected: false
        }})
  );

  const handleInsertLikert = (item) => {
    let updatedState = isLiked.map((isLikedItem) =>
      isLikedItem.id === item.id
        ? { ...isLikedItem, selected: true }
        : { ...isLikedItem, selected: false }
    );

    setIsLiked(updatedState);

    const selectedValue = updatedState.find(us => us.selected).id;

    let tempFormAnswer = formAnswer.map(fa => fa);
    
    tempFormAnswer[question.index-1].answers[0] = selectedValue;

    setFormAnswer(tempFormAnswer);
    changeProgress();
  };

  return (
    <Box 
      marginBottom="16px"
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
        justifyContent="space-between"
        alignItems="start"
        width="100%"
      >
        {isLiked.map((item) => (
          <CustomRadioButton
            onPress={() => handleInsertLikert(item)}
            selected={item.selected}
            key={item.id}
            index={item.id}
            radioMaxW={(100/isLiked.length) + "%"}
          >
            {item.name}
          </CustomRadioButton>
        ))}
      </Box>
    </Box>
  );
}

export default Likert;
