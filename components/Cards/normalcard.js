import React, { useState } from 'react';
import { StyleSheet, View,Text, TextInput ,Button} from 'react-native';
import Inputbox from '../inputbox';


const NormalCard = props => {
   
        return(
            <View style = {{...styles.card , ...props.style}} >
                {props.children}
            </View>
        )
}

const styles = StyleSheet.create({
  card : {
      borderWidth : 1,
      justifyContent : 'center',
      alignItems : 'center',
      
      borderRadius : 10,
     
      shadowOpacity : 10,
    
          

  }
})

export default NormalCard;