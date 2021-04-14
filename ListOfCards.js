import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import MyCard from "./Card"

export default function ListOfCards(props) {
    const [top, setTop] = useState([]);
    const [sum, setSum] = useState(0);
    const sortDes = (arr, field) => {
        return arr.sort((a, b) => {
            if (a[field] > b[field]) { return -1; }
            if (b[field] > a[field]) { return 1; }
            return 0;
        })
    }

    let orderedArray = [];
    let sunOfVotes = 0;
    let topFive = [];

    useEffect(() => {
        let mounted = true          
        fetch("https://isr-elections.herokuapp.com/api/parties/poll-status"
            , {
                method: 'GET'
            }).then((response) => response.json()).then((responseJson) => {

                let myArr = []

                for (party in responseJson) {
                    sunOfVotes += responseJson[party]["currentVotes"]
                    myArr.push({ "partyName": party, "partyVotes": responseJson[party]["currentVotes"] })
                }
                orderedArray = sortDes(myArr, "partyVotes")

            }).then(() => {
                if (mounted) {           

                    for (let i = 0; i < 5; i++) {
                        topFive.push(orderedArray[i])
                    }
                    setSum(sunOfVotes);
                    setTop(topFive);
        
                }
            })
        return function cleanup() {        
            mounted = false
        }
    }, []);



    function createFiveCards() {
        if (sunOfVotes == 0) {
            return (<Text>No Votes</Text>)
        }
    }



    return (
        <View style={styles.viewStyle}>
            {top.map((item, i) => {
                return (<MyCard key={i} partyimage={props.partiesImages1[item["partyName"]]} partyName1={item["partyName"]} partyVotesPersent={sum == 0 ? 0 : item["partyVotes"] / sum}></MyCard>)
            })}
        </View>
    )

}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        width: 400,
        justifyContent: 'space-around'
    }
})



