import React, { useState, useEffect }  from 'react';

import {
  Center,
  Box,
  NativeBaseProvider,
  Button
} from "native-base";

import { api } from '../services/api';

import OpenAnswer from '../components/OpenAnswer';
import Likert from '../components/Likert';
import MultipleChoice from '../components/MultipleChoice';
import SelectionBox from '../components/SelectionBox';

const Questions = ({ navigation }) => {
  const [form, setForm] = useState({});
  const [formQuestions, setFormQuestions] = useState([]);
  const [formAnswer, setFormAnswer] = useState([]);

  useEffect(() => {
    const getForm = async () => {
      const response = await api.get('/Form?formId=314C5F27');

      const formData = response.data;

      setForm(formData);

      const questionsData = JSON.parse(formData.questions);

      setFormQuestions(questionsData);
      console.log(questionsData)

      let tempFormAnswer = [];
      questionsData.forEach(question => {
        switch(question.type){
          case 0:
            tempFormAnswer[question.index-1] = {
              index: question.index,
              type: question.type,
              answers: ['']
            }
          case 1:
            tempFormAnswer[question.index-1] = {
              index: question.index,
              type: question.type,
              answers: [null]
            }
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

  return (
    <NativeBaseProvider>
      <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
      >
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
              )
            case 1:
              return (
                <Likert 
                  key={index}
                  question={question}
                  formAnswer={formAnswer}
                  setFormAnswer={setFormAnswer}
                />
              )

              case 3:
                return (
                  <MultipleChoice 
                    key={index}
                    question={question}
                    formAnswer={formAnswer}
                    setFormAnswer={setFormAnswer}
                  />
                )

                case 4:
                  return (
                    <SelectionBox 
                      key={index}
                      question={question}
                      formAnswer={formAnswer}
                      setFormAnswer={setFormAnswer}
                    />
                  )
            default:
              return (
                <></>
              )
          }
        })}

    <Box alignItems="center">
      <Button onPress={handleSubmit}>Salvar</Button>
    </Box>
        
      </Center>
    </NativeBaseProvider>
  );
}

export default Questions;
