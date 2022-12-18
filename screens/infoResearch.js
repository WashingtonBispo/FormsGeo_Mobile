import React, { useState, useEffect }  from 'react';

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
import { StyleSheet, TextInput, Modal, Linking } from 'react-native';
import { RadioButton } from 'react-native-paper';
import RenderHtml from 'react-native-render-html';

import { api } from '../services/api';

import NativeBaseIcon from "../components/NativeBaseIcon";

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

  const show = async () => {
    console.log(Form)
   };
  useEffect(() => {

  }, [])

  const source = {
    html: `
    <p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet metus ligula. Phasellus porta eleifend aliquam. Nunc sit amet dictum sapien. Donec sed erat ornare, auctor risus eget, convallis metus. </strong><i><strong>Suspendisse ultrices pellentesque quam, dapibus sagittis sem eleifend id. Suspendisse vel molestie lorem. </strong>Nulla convallis semper metus. Curabitur mollis faucibus justo ut sagittis. Nam tincidunt leo mauris, a iaculis sem dictum vel. Quisque euismod vitae libero et luctus. Suspendisse a pulvinar ex, non pulvinar lorem.</i></p>`
  };
  var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwBQTFRF7c5J78kt+/Xm78lQ6stH5LI36bQh6rcf7sQp671G89ZZ8c9V8c5U9+u27MhJ/Pjv9txf8uCx57c937Ay5L1n58Nb67si8tVZ5sA68tJX/Pfr7dF58tBG9d5e8+Gc6chN6LM+7spN1pos6rYs6L8+47hE7cNG6bQc9uFj7sMn4rc17cMx3atG8duj+O7B686H7cAl7cEm7sRM26cq/vz5/v767NFY7tJM78Yq8s8y3agt9dte6sVD/vz15bY59Nlb8txY9+y86LpA5LxL67pE7L5H05Ai2Z4m58Vz89RI7dKr+/XY8Ms68dx/6sZE7sRCzIEN0YwZ67wi6rk27L4k9NZB4rAz7L0j5rM66bMb682a5sJG6LEm3asy3q0w3q026sqC8cxJ6bYd685U5a457cIn7MBJ8tZW7c1I7c5K7cQ18Msu/v3678tQ3aMq7tNe6chu6rgg79VN8tNH8c0w57Q83akq7dBb9Nld9d5g6cdC8dyb675F/v327NB6////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/LvB3QAAAMFJREFUeNpiqIcAbz0ogwFKm7GgCjgyZMihCLCkc0nkIAnIMVRw2UhDBGp5fcurGOyLfbhVtJwLdJkY8oscZCsFPBk5spiNaoTC4hnqk801Qi2zLQyD2NlcWWP5GepN5TOtSxg1QwrV01itpECG2kaLy3AYiCWxcRozQWyp9pNMDWePDI4QgVpbx5eo7a+mHFOqAxUQVeRhdrLjdFFQggqo5tqVeSS456UEQgWE4/RBboxyC4AKCEI9Wu9lUl8PEGAAV7NY4hyx8voAAAAASUVORK5CYII=';
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
            onPress={() => show()}
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
