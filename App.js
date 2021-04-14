import { StyleSheet,  View, Alert, ScrollView } from 'react-native';
import React, { useState } from 'react'
import Pic from "./Pic"
import MyHader from "./MyHader"
import ListOfCards from "./ListOfCards"


export default function App() {
  const valuesArray = ['likud', 'yesh-atid', 'kahol-lavan', 'merez', 'tikva-hadasha', 'israel-beitenu', 'shas', 'yahadut-hatora', 'meshutefet', 'avoda', 'zionut-datit', 'gesher', 'raam', 'kalkalit']
  const partiesImages = {
    'likud': require(`./images/likud.jpeg`),
    'yesh-atid': require(`./images/yesh-atid.jpeg`),
    'kahol-lavan': require(`./images/kahol-lavan.jpeg`),
    'merez': require(`./images/merez.jpeg`),
    'tikva-hadasha': require(`./images/tikva-hadasha.jpeg`),
    'israel-beitenu': require(`./images/israel-beitenu.jpeg`),
    'shas': require(`./images/shas.jpeg`),
    'yahadut-hatora': require(`./images/yahadut-hatora.jpeg`),
    'meshutefet': require(`./images/meshutefet.jpeg`),
    'avoda': require(`./images/avoda.jpeg`),
    'zionut-datit': require(`./images/zionut-datit.jpeg`),
    'gesher': require(`./images/gesher.jpeg`),
    'raam': require(`./images/raam.jpeg`),
    'kalkalit': require(`./images/kalkalit.jpeg`)

  }

 

  const [page, setPage] = useState("Vote");

  function picPress(party) {
    fetch(`https://isr-elections.herokuapp.com/api/parties/vote/${party}`
      , {
        method: 'POST'
      }).then(() => Alert.alert('Alert', "Your Vote Has Been Accepted"))

  }

  function changePage() {
    if (page == "Vote") {
      setPage("Status")
    }
    else {
      setPage("Vote")
    }
  }


  if (page == "Vote") {
    return (
      <View>
        <MyHader position="sticky" changePage1={changePage} buttonTitel="Status">
        </MyHader>
        <ScrollView style={{ width: 1000 }}>
          <View style={styles.container}>
            {valuesArray.map((item, i) => {
              return (<Pic key={i} party={item} picPress1={() => picPress(item)} partiesImages1={partiesImages}></Pic>)
            })}
          </View>
        </ScrollView>
      </View>
    );

  }

  else {
    return (
      <View>
        <View>
          <MyHader position="sticky" changePage1={changePage} buttonTitel="View">
          </MyHader>
        </View>
        <View style={styles.container}>
          <ListOfCards partiesImages1={partiesImages}>

          </ListOfCards>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    width: 400,
    // alignItems: 'center',
    justifyContent: 'space-around'
  },
  buttonStyle: {
    backgroundColor: "green",
    height: 150,
    width: 258
  }
});



