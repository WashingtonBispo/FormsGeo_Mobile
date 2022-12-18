import React, { useState, useEffect }  from 'react';

import {
  Text,
  NativeBaseProvider,
  extendTheme,
  Box,
  Button,
  Image
} from "native-base";
import { View, useWindowDimensions } from 'react-native';
import { StyleSheet, TextInput, Modal, Linking } from 'react-native';
import { RadioButton } from 'react-native-paper';
import RenderHtml from 'react-native-render-html';

import { api } from '../services/api';

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

const InfoResearch = ({ route, navigation }) => {
  const { Form } = route.params;
  const { width } = useWindowDimensions();
  const [checked, setChecked] = React.useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const questions = async () => {
    navigation.navigate('Questions', { Form: Form })
   };
  useEffect(() => {

  }, [])

  return (
    <NativeBaseProvider>
      <Text>  
        
      </Text>
        
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
                  source={{html: Form.description}}
                />
                </Text>
            </View>
          <Box>
             <Box style={{ display:'flex', flexDirection:'row', alignItems: 'center'}}>
                <RadioButton
                  Text='auau'
                  color='#20D489'
                  uncheckedColor='#20D489'
                  status={ checked === true ?  'checked' : 'unchecked' }
                  onPress={() => setChecked(!checked)}
                  />
                <Text>Li e aceito os 
                  <Text onPress={() => Linking.openURL(Form.linkConsent).catch(err => console.error("Não foi possível abrir o link de consentimento", err))} style={{color: 'blue'}}> termos de consentimento</Text>.
                </Text>
              </Box>
            <Button 
            onPress={() => questions ()}
            style={styles.EnterButton}>
                    <Text style={styles.ButtonText}>
                        Vamos lá
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
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
  });

export default InfoResearch;
