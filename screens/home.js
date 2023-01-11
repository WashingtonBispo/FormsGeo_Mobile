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
  Button
} from "native-base";
import { View } from 'react-native';
import { StyleSheet, TextInput, Modal } from 'react-native';

import { api } from '../services/api';

const Home = ({ navigation }) => {
  const getForm = async () => {
    const response = await api.get('/Form?formId=' + formId);

    setModalVisible(!modalVisible)
    navigation.navigate('InfoResearch', { Form: response.data })
   };

  const [formId, onChangeformId] = React.useState("");
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <NativeBaseProvider>
        <View style={{flex: 1, marginBottom:'15px'}}>
          <View style={styles.FormBox}>
            <Text style={styles.FormText}>Forms</Text>
          </View>
          <Text style={styles.GeoText}>Geo</Text>
          <Box style={{flex: 1, justifyContent: 'space-between', padding:'15px'}}>
            <View>
                <Text style={styles.Descricao}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Text>
            </View>
            <Button 
            onPress={() => setModalVisible(!modalVisible)}
            style={styles.InsertButton}>
                    <Text style={styles.ButtonText}>
                        Entrar no formulário
                    </Text>
            </Button>
          </Box>

          <Modal
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>Entrar em pesquisa</Text>
            <Text>Por favor, insira o código que foi disponibilizado para acessar a pesquisa</Text>
            <TextInput
                style={styles.inputFormId}
                onChangeText={onChangeformId}
                value={formId}
                placeholder="Insira o código do formulário"
            />
            <Button 
            onPress={() => getForm()}
            style={styles.InsertButton}>
                    <Text style={styles.ButtonText}>
                        Ir para pesquisa
                    </Text>
            </Button>
          </View>
        </View>
      </Modal>
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
    InsertButton: {
      backgroundColor: '#20D489',
      borderRadius: '16px',
      width: '90%',
      margin: '20px',
      alignSelf: 'center'
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
      }
  });

export default Home;
