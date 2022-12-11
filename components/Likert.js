import React from 'react';

import {
  Text,
  Box,
  Radio
} from "native-base";

const Likert = (props) => {
  const question = props.question;
  const formAnswer = props.formAnswer;
  const setFormAnswer = props.setFormAnswer;

  const handleInsertLikert = (text) => {
    let tempFormAnswer = formAnswer.map(fa => fa);
    
    tempFormAnswer[question.index-1].answers[0] = text;

    setFormAnswer(tempFormAnswer);
  }

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

      <Radio.Group size="lg" name="likertGroup" accessibilityLabel="pick a choice">
        {question.alternatives && question.alternatives.map(alternative => {
          return (
            <Radio _text={{
                mx: 2
              }} colorScheme="blue" value={alternative.index} my={1}>
                {alternative.value}
            </Radio>
          );
        })}
      </Radio.Group>
    </Box>
  );
}

export default Likert;
