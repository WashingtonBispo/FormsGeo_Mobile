import React, { useEffect, useState } from 'react';

import CustomRadioButton from './CustomRadioButton';

import {
  Text,
  Box
} from "native-base";

const AncLikert = (props) => {
  const question = props.question;
  const formAnswer = props.formAnswer;
  const setFormAnswer = props.setFormAnswer;
  const changeProgress = props.changeProgress;

  const [isLiked, setIsLiked] = useState([]);

  useEffect(() => {
    let tempIsLiked = [];

    for (let index = 0; index < question.alternatives[3]; index++) {
      if (index == 0)
        tempIsLiked[index] = {
          id: question.alternatives[4], 
          value: false,
          name: question.alternatives[0],
          selected: formAnswer[question.index-1].answers[0] == question.alternatives[4] ? true : false
        };
      else if (index == question.alternatives[3] - 1)
        tempIsLiked[index] = {
          id: question.alternatives[5], 
          value: false,
          name: question.alternatives[1],
          selected: formAnswer[question.index-1].answers[0] == question.alternatives[5] ? true : false
        };
      else
        tempIsLiked[index] = {
          id: (parseInt(question.alternatives[4]) + index), 
          value: false,
          name: "",
          selected: formAnswer[question.index-1].answers[0] == (parseInt(question.alternatives[4]) + index) ? true : false
        };
    }

    setIsLiked(tempIsLiked);
  },[])

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
            radioMaxW={(100/question.alternatives[3]) + "%"}
          >
            {item.name}
          </CustomRadioButton>
        ))}
      </Box>
    </Box>
  );
}

export default AncLikert;
