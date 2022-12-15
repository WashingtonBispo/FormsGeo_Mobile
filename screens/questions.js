import React, { useState, useEffect, useCallback }  from 'react';

import {
  Center,
  Box,
  NativeBaseProvider,
  Button,
  Progress
} from "native-base";

import { api } from '../services/api';

import OpenAnswer from '../components/OpenAnswer';
import Likert from '../components/Likert';
import AncLikert from '../components/AncLikert';
import SliderLikert from '../components/SliderLikert';
import MultipleChoice from '../components/MultipleChoice';
import SelectionBox from '../components/SelectionBox';

const Questions = ({ navigation }) => {
  const [form, setForm] = useState({});
  const [formQuestions, setFormQuestions] = useState([]);
  const [formAnswer, setFormAnswer] = useState([]);

  useEffect(() => {
    const getForm = async () => {
      const response = await api.get('/Form?formId=913F0B2F');

      const formData = response.data;

      setForm(formData);

      const questionsData = JSON.parse(formData.questions);

      setFormQuestions(questionsData);
      
      let tempFormAnswer = [];
      questionsData.forEach(question => {
        switch(question.type){
          case 0:
            tempFormAnswer[question.index-1] = {
              index: question.index,
              type: question.type,
              subType: 0,
              answers: ['']
            }
            break;

          case 1:
            tempFormAnswer[question.index-1] = {
              index: question.index,
              type: question.type,
              subType: 0,
              answers: [null]
            }
            break;

          case 2:
            tempFormAnswer[question.index-1] = {
              index: question.index,
              type: question.type,
              subType: question.alternatives[2],
              answers: [null]
            }
            break;

          case 3:
            tempFormAnswer[question.index-1] = {
              index: question.index,
              type: question.type,
              subType: 0,
              answers: [null]
            }
            break;

          case 4:
            tempFormAnswer[question.index-1] = {
              index: question.index,
              type: question.type,
              subType: 0,
              answers: [null]
            }
            break;

          default:
            break;
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
                />
              );

            case 1:
              return (
                <Likert 
                  key={index}
                  question={question}
                  formAnswer={formAnswer}
                  setFormAnswer={setFormAnswer}
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
                  />
              );

              if (question.alternatives[2] === "2")
                return (
                  <AncLikert 
                    key={index}
                    question={question}
                    formAnswer={formAnswer}
                    setFormAnswer={setFormAnswer}
                  />
              );

            case 3:
              return (
                <MultipleChoice 
                  key={index}
                  question={question}
                  formAnswer={formAnswer}
                  setFormAnswer={setFormAnswer}
                />
              );

            case 4:
              return (
                <SelectionBox 
                  key={index}
                  question={question}
                  formAnswer={formAnswer}
                  setFormAnswer={setFormAnswer}
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

      <Center w="100%">
        <Box w="90%" maxW="400">
          <Progress bg="coolGray.100" _filledTrack={{
          bg: "lime.500"
        }} value={75} mx="4" />
        </Box>
      </Center>

      <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
      >
        {handleRenderQuestions()}

      <Box alignItems="center">
        <Button onPress={handleSubmit}>Finalizar</Button>
      </Box>
        
      </Center>
    </NativeBaseProvider>
  );
}

export default Questions;
