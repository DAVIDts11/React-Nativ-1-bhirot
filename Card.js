import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

export default function MyCard(props) {

    return (
        <View style={styles.viewStyle}>
            <Image style={{ width: 100, height: 100 }} source={props.partyimage} resizeMode="stretch"/>
            <Text> {props.partyName1} </Text>
            <Text> {Number(props.partyVotesPersent*100).toFixed(2)} % </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    viewStyle: {

        
    },
    imageStyle:{

    },
    partyNameStyle:{

    },
    partyVotesStule:{

    }
})

