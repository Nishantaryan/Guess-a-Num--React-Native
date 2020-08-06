import React from 'react';
import { StyleSheet, View,Text, TextInput ,Button} from 'react-native';

const Header = props => {
   return(
    <View style = {styles.screen}>
    <Text style = {styles.font}>{props.title}</Text>
   </View>
   )
}

const styles = StyleSheet.create({
    screen: {
        width : '100%',
        height : 100,
        backgroundColor :'#aafccf', 
        justifyContent : 'center',
        alignItems : 'center'
        },
        inputContainer :{
          borderWidth : 1,
          width: 100,
        },
    font : {
            fontSize : 20
          },
     
})



export default Header;