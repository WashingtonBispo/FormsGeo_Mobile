import React from 'react';

import {
  Text,
  Box,
  TextArea
} from "native-base";

const OpenAnswer = (props) => {
  const question = props.question;
  const formAnswer = props.formAnswer;
  const setFormAnswer = props.setFormAnswer;
  const changeProgress = props.changeProgress;

  const handleInsertOpenAnswer = (text) => {
    const words = text.length;

    if (question.alternatives[0] * 20 < words) return;

    let tempFormAnswer = formAnswer.map(fa => fa);
    
    tempFormAnswer[question.index-1].answers[0] = text;

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

      <TextArea 
        h={20}
        placeholder="Digite sua resposta" 
        w="75%" 
        maxW="300"
        onChange={(e) => {handleInsertOpenAnswer(e.nativeEvent.text)}}
        value={formAnswer && formAnswer[question.index-1].answers[0] ? formAnswer[question.index-1].answers[0] : ''}
      />
    </Box>
  );
}

export default OpenAnswer;
