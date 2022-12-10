import * as React from 'react';
import { Button, StyleSheet } from 'react-native';

const Questions = ({ navigation } : any) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('final', { name: 'Jane' })
      }
    />
  );
};

const styles = StyleSheet.create({
  
});

export default Questions;
