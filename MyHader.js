import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react'  



export default function myHader(props) {
    
    return (
    <View style={styles.viewStyle}>
        <Text>
        <Button style={styles.buttoStyle} onPress={props.changePage1} title={props.buttonTitel}>  </Button>
        <Text style={styles.textStyle}>  בחירות  ישראל  2021</Text>
        </Text>
    </View>
        

    )
}

const styles = StyleSheet.create({
    viewStyle: {
        height:60,
        width:450,
        backgroundColor:"pink",
        justifyContent:"center",
        alignItems: 'center',
        // border:"5 solid red"
    },
    textStyle:{
        fontSize:25,
        fontWeight:'bold'
    },
    buttoStyle:{
        width:30,
        height :40,
        backgroundColor:"blue",

    }
})