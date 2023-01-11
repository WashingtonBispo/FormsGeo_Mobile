import React, { useState }  from 'react';

import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
  Button,
  Image
} from "native-base";
import { View, useWindowDimensions } from 'react-native';
import { StyleSheet, TextInput, Modal } from 'react-native';
import RenderHtml from 'react-native-render-html';

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

import { api } from '../services/api';

export const theme = extendTheme({ config });

const Final = ({ route, navigation }) => {
  const { width } = useWindowDimensions();
  const { Form } = route.params;

  const back = async () => {
    navigation.navigate('Home')
   };

  return (   
     <NativeBaseProvider>

<View style={{flex: 1, marginBottom:'15px'}}>
          <View style={styles.FormBox}></View>
          <Box style={styles.square}>
          <Image style={{width: "100%", height: "100%"}} source={{uri: "data:image/png;base64," + Form.icon}}/>
          </Box>
          <Box style={{flex: 1, justifyContent: 'space-between', padding:'15px'}}>
            <View style={{textAlign: 'center'}}>
              <Text style={{fontSize:25, fontWeight:'bold'}}>{ Form.name }</Text>
                <Text style={styles.Descricao}>
                <RenderHtml
                  contentWidth={width}
                  source={{html: Form.finalMessage}}
                  />
                </Text>
            </View>
          <Box>
            <Button 
            onPress={() => back ()}
            style={styles.EnterButton}>
                    <Text style={styles.ButtonText}>
                        Voltar ao menu
                    </Text>
            </Button>
              </Box>
         </Box>

        </View>
        </NativeBaseProvider>
  );
}


const styles = StyleSheet.create({
  FormBox: {
    backgroundColor: '#20D489',
    height: '20%',
    width: '100%',
    display: 'flex',
    marginBottom: '100px',
    justifyContent: 'flex-end'
  },
  FormText: {
      color: '#FFFFFF',
      fontFamily: 'Poppins',
      fontWeight: 'bold',
      fontSize: 58,
      padding:'1px',
      marginBottom: '1px',
      marginLeft: '10%'
  },
  GeoText: {
      color: '#20D489',
      fontFamily: 'Poppins',
      fontWeight: 'bold',
      fontSize: 58,
      marginLeft: '50%',
  },
  EnterButton: {
    borderRadius: '16px',
    width: '90%',
    margin: '20px',
    alignSelf: 'center',
    backgroundColor: '#20D489'
  },
  ButtonText: {
      color: '#FFFFFF',
      fontWeight: 'bold',
      font: 'Inter'
  },
  Descricao: {
      color: '#666666',
      font: 'Inter',
      fontWeight: 'bold',
  },
  inputFormId: {
      width:'90%'
  },
  radio:{
    backgroundColor: '#20D489'
  },
  centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },

    square: {
      position:'absolute',
      top:'20%',
      left:'50%',
      height:'110px',
      width:'110px',
      backgroundColor:'white',
      transform: 'translate(-50%, -50%)',
      borderRadius: '8px',
      border: '2px solid #999999',
      padding: "5px"
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    }
});


export default Final;
