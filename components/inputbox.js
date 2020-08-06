import React from 'react';
import { StyleSheet, View,Text, TextInput ,Button} from 'react-native';
import color from './Color/color';
import NormalCard from './Cards/normalcard';


const Inputbox = props => {
    return(
            <NormalCard style = {styles.card}>
             <View style = {styles.container}>
                  <Text style = {styles.text}>Enter A Number</Text>
                  <TextInput style = {styles.textInput} />
                  <View style = {styles.buttonContainer}>
                       <View style ={styles.buttonWidth}><Button color = {color.secondary} title = "Reset"/></View>   
                      <View style ={styles.buttonWidth}><Button color = {color.primary} title = "Confirm" /></View> 
                 </View>
            </View>
            </NormalCard>
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