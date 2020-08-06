import React, { useState } from 'react';
import { StyleSheet, View,Text, TextInput ,Button,Alert,TouchableWithoutFeedback,Keyboard} from 'react-native';
import color from './Color/color';
import NormalCard from './Cards/normalcard';
import Input from './input';


const Inputbox = props => {

    const [storeUserInput,setUserInput] = useState('');

    const [isConfirmed,setConfirmed] = useState(false);

    const [selectedNumber,setSelectedNumber] = useState();
    
    const userInputHandler = (value) => {
       
        setUserInput(value.replace(/[^0-9]/g, ''));
}
    const onConfirm = () => {       
        const  typedInput = parseInt(storeUserInput);
        
        
        if(isNaN(typedInput) || typedInput < 1 || typedInput > 99){
            Alert.alert("wrong input returning......")
            return;
        }
        setConfirmed(true);
        setSelectedNumber(typedInput);
        setUserInput('');
        Keyboard.dismiss();
     }

     
     const resetValue = () => {
        setUserInput('');
        setConfirmed(false);
     }
      let confimation = null;
     if (isConfirmed){
        confimation =   (
            <View style={styles.container}> 
                <Text color = "red" > {selectedNumber}</Text>
            </View>
           );
         }


    return( 
           <TouchableWithoutFeedback onPress ={ () => { Keyboard.dismiss(); }}>
            <NormalCard style = {styles.card}>
             <View style = {styles.container}>
                  <Text style = {styles.text}>Enter A Number</Text>
                  <Input onChangeText = {userInputHandler} value = {storeUserInput}  style = {styles.textInput} blurOnSubmit autoCapitalize  autoCorrect = {false} keyboardType = "number-pad" maxLength = {2} />
                  <View style = {styles.buttonContainer}>
                       <View style ={styles.buttonWidth}><Button color = {color.secondary} onPress ={resetValue} title = "Reset"/></View>   
                      <View style ={styles.buttonWidth}><Button color = {color.primary} onPress = {onConfirm} title = "Confirm" /></View> 
                 </View>
            </View>
            </NormalCard>
            </TouchableWithoutFeedback>

    );
}

const styles = StyleSheet.create({
      container :{
          alignItems:'center',
          justifyContent : 'center'
      },
        text : {
           fontSize : 20,
           paddingTop : 20
          },
        textInput : {
           width : 100,
            borderBottomWidth : 1,
            height : 36,
            textAlign : 'center',
            marginBottom : 20
        },
        buttonContainer :{
            width : 300,
            flexDirection : 'row',
            justifyContent : 'space-evenly',
            margin :20
        },
        buttonWidth:{
            width : 100
        },
        card : {
            marginVertical : 20,
            marginHorizontal : 20,
            shadowOffset :{
                width : 10,
                height : 10
            },
            elevation : 1,
        }     
})

export default Inputbox;