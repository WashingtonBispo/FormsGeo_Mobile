import React from 'react';

import {
  Text,
  Box,
  Radio
} from "native-base";

const MultipleChoice = (props) => {
  const question = props.question;
  const formAnswer = props.formAnswer;
  const setFormAnswer = props.setFormAnswer;
  const changeProgress = props.changeProgress;

  const handleMultipleChoice = (value) => {
    let tempFormAnswer = formAnswer.map(fa => fa);
    
    tempFormAnswer[question.index-1].answers[0] = value;

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

      <Radio.Group 
        onChange={handleMultipleChoice} 
        size="lg" 
        name="likertGroup" 
        accessibilityLabel="pick a choice"
        defaultValue={formAnswer && formAnswer[question.index-1].answers[0] ? formAnswer[question.index-1].answers[0] : ''}
      >
        {question.alternatives && question.alternatives.map((alternative, index) => {
          return (
            <Radio 
              key={index}
              _text={{
                mx: 2
              }}
              _checked={{
                bg: "#20D489",
                borderColor: "#20D489"
              }}
              _icon={{
                color: "#20D489"
              }}
              borderColor="#20D489"
              value={alternative.index} 
              size="35px" 
              my={1}
            >
                {alternative.value}
            </Radio>
          );
        })}
      </Radio.Group>
    </Box>
  );
}

export default MultipleChoice;
