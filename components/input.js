import React from 'react';
import { StyleSheet, View,Text, TextInput ,Button} from 'react-native';

const Input = props => {
    return(
        <TextInput {...props} style =  {{ ...styles.textInput,...props.style }}  />

    );
}

const styles = StyleSheet.create({
    textInput : {
         width : 100,
         borderBottomWidth : 1,
         height : 36,
         textAlign : 'center',
         marginBottom : 20
     },
})

export default Input;