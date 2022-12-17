import React, { useState, useEffect, useCallback }  from 'react';

import {
  Center,
  Box,
  NativeBaseProvider,
  Button,
  Progress,
  Text
} from "native-base";

import { AntDesign } from '@expo/vector-icons'

import { api } from '../services/api';

import OpenAnswer from '../components/OpenAnswer';
import Likert from '../components/Likert';
import AncLikert from '../components/AncLikert';
import SliderLikert from '../components/SliderLikert';
import MultipleChoice from '../components/MultipleChoice';
import SelectionBox from '../components/SelectionBox';

const Questions = ({ navigation }) => {
  const [progress, setProgress] = useState(0);
  const [form, setForm] = useState({});
  const [formQuestions, setFormQuestions] = useState([]);
  const [formAnswer, setFormAnswer] = useState([]);

  const changeProgress = useCallback(() => {
    let count = 0;
    for (let index = 0; index < formAnswer.length; index++) {
      if (formAnswer[index].answers[0] != null) count++;
    }

    setProgress(count/formAnswer.length * 100);
  }, [formAnswer]);

  useEffect(() => {
    const getForm = async () => {
      const response = await api.get('/Form?formId=913F0B2F');

      const formData = response.data;

      setForm(formData);

      const questionsData = JSON.parse(formData.questions);

      setFormQuestions(questionsData);
      
      let tempFormAnswer = [];
      questionsData.forEach(question => {
          tempFormAnswer[question.index-1] = {
            index: question.index,
            type: question.type,
            subType: question.type == 2 ? question.alternatives[2] : 0,
            answers: [null]
          }
      });
            
      console.log("formAnswerCreate", tempFormAnswer)

      setFormAnswer(tempFormAnswer);
    };

    getForm();
  }, []);
  
  const handleSubmit = () => {
    console.log(formAnswer);
  }

  const handleRenderQuestions = useCallback(() => {
    return (
      <Box>
        {formQuestions && formQuestions.map((question, index) => {
          switch(question.type) {
            case 0:
              return (
                <OpenAnswer 
                  key={index}
                  question={question}
                  formAnswer={formAnswer}
                  setFormAnswer={setFormAnswer}
                  changeProgress={changeProgress}
                />
              );

            case 1:
              return (
                <Likert 
                  key={index}
                  question={question}
                  formAnswer={formAnswer}
                  setFormAnswer={setFormAnswer}
                  changeProgress={changeProgress}
                />
              );

            case 2:
              if (question.alternatives[2] === "1")
                return (
                  <SliderLikert 
                    key={index}
                    question={question}
                    formAnswer={formAnswer}
                    setFormAnswer={setFormAnswer}
                    changeProgress={changeProgress}
                  />
              );

              if (question.alternatives[2] === "2")
                return (
                  <AncLikert 
                    key={index}
                    question={question}
                    formAnswer={formAnswer}
                    setFormAnswer={setFormAnswer}
                    changeProgress={changeProgress}
                  />
              );

            case 3:
              return (
                <MultipleChoice 
                  key={index}
                  question={question}
                  formAnswer={formAnswer}
                  setFormAnswer={setFormAnswer}
                  changeProgress={changeProgress}
                />
              );

            case 4:
              return (
                <SelectionBox 
                  key={index}
                  question={question}
                  formAnswer={formAnswer}
                  setFormAnswer={setFormAnswer}
                  changeProgress={changeProgress}
                />
              );

            default:
              return (
                <></>
              );
          }
        })}
      </Box>
    );
  }, [formAnswer])

  return (
    <NativeBaseProvider>
      <Center
        paddingTop="20px"
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
      >
        <Text fontSize="14px">
          {Math.trunc(progress) + "%"}
        </Text>

        <Box 
          w="90%" 
          maxW="400"
          marg
          marginBottom="16px"
        >
          <Progress 
            bg="#9D9D9D"
            size="lg"
            _filledTrack={{
              bg: "#20D489"
            }} 
            value={progress} 
            mx="4" 
          />
        </Box>

        {handleRenderQuestions()}

      <Box 
        width="80%"
        alignItems="center"
        marginTop="20px"
        marginBottom="10px"
        display="flex"
        justifyContent="space-between"
        flexDirection="row"
      >
        <AntDesign name="leftcircleo" size={24} color="#20D489" />
        <Button 
          onPress={handleSubmit} 
          backgroundColor="#20D489"
          borderRadius="20px"
        >
          Finalizar
        </Button>
        <AntDesign name="rightcircleo" size={24} color="#20D489"  />
      </Box>
        
      </Center>
    </NativeBaseProvider>
  );
}

export default Questions;
