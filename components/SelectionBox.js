import React from 'react';

import {
  Text,
  Box,
  Checkbox
} from "native-base";

const SelectionBox = (props) => {
  const question = props.question;
  const formAnswer = props.formAnswer;
  const setFormAnswer = props.setFormAnswer;
  const changeProgress = props.changeProgress;

  const handleInsertSelection = (value) => {
    let tempFormAnswer = formAnswer.map(fa => fa);
    
    tempFormAnswer[question.index-1].answers = value;

    setFormAnswer(tempFormAnswer);
    changeProgress();
  }

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

      <Checkbox.Group onChange={handleInsertSelection} size="lg" name="likertGroup" accessibilityLabel="pick a choice">
        {question.alternatives && question.alternatives.map((alternative, index) => {
          return (
            <Checkbox 
              key={index}
              _text={{
                mx: 2
              }}
              _checked={{
                bg: "#20D489",
                borderColor: "#20D489"
              }}
              _icon={{
              }}
              borderColor="#20D489"
              value={alternative.index} 
            >
              {alternative.value}
            </Checkbox>
          );
        })}
      </Checkbox.Group>
    </Box>
  );
}

export default SelectionBox;
