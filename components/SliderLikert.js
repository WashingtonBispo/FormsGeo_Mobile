import React from 'react';

import {
  Text,
  Box,
  Stack,
  Slider
} from "native-base";

const SliderLikert = (props) => {
  const question = props.question;
  const formAnswer = props.formAnswer;
  const setFormAnswer = props.setFormAnswer;
  const changeProgress = props.changeProgress;

  const [onChangeValue, setOnChangeValue] = React.useState(50);

  const handleInsertLikert = (value) => {
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

      <Stack space={4} alignItems="center" width="80%" maxW="450">
        <Slider 
          defaultValue={50}
          size="md"
          onChange={v => {
            setOnChangeValue(Math.floor(v));
          }}
          onChangeEnd={v => {
            v && handleInsertLikert(Math.floor(v));
          }}
        >
          <Slider.Track>
            <Slider.FilledTrack bg="#20D489" />
          </Slider.Track>

          <Slider.Thumb borderWidth="0" bg="#20D489">
          </Slider.Thumb>
        </Slider>

        <Box
          width="100%"
          display="flex"
          flexDir="row"
          justifyContent="space-between"
          alignItems="start"
        >
          <Text textAlign="center">{question.alternatives[0]}</Text>
          <Text textAlign="center">{onChangeValue}</Text>
          <Text textAlign="center">{question.alternatives[1]}</Text>
        </Box>
      </Stack>
    </Box>
  );
}

export default SliderLikert;
