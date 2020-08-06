import React from 'react';
import { StyleSheet, View,Text, TextInput ,Button} from 'react-native';
import Header from './components/header';
import Inputbox from './components/inputbox';



export default function App() {
  return (
    <View style = {styles.screen}>
     
      <Header title = "Guess A Number" />
      <Inputbox/>
    
     </View> 
  );
}

const styles = StyleSheet.create({
   
    screen : {
      flex : 1
    },

    
});
