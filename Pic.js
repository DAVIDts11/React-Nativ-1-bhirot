import {  Text, View, Image, Pressable } from 'react-native';
import React from 'react'


export default function Pic(props) {
    return (
        <View> 
            <Pressable onPress={props.picPress1} >
                <Image style={{ width: 150, height: 150 }} source={props.partiesImages1[props.party]} resizeMode="stretch"/>
                <Text> {props.party}</Text>
            </Pressable>
        </View>
    )       
}

