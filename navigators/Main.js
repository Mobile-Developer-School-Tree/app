import React, { useState, useEffect, useContext } from "react"
import { View, StyleSheet, Text, ScrollView } from 'react-native'

import Title from '../components/Title'

import api from '../utility/api'
import { EvilIcons } from '@expo/vector-icons';
import { AuthContext } from '../context/AuthContext'

import LoggedInHeader from '../components/LoggedInHeader'

// usare createBottommTabNavigator: https://reactnavigation.org/docs/bottom-tab-navigator/
export default function Main() {
  const [currentDate, setCurrentDate] = useState('');
  const { user, counter, manageCards, cards } = useContext(AuthContext)
  const [cardsRender, setCardsRender] = useState([])

  const [error, setError] = useState(false)
  const [messageOpen, setMessageOpen] = useState(false)

  const submitGet = async () => {
    try {
      const response = await api.get('get-cards')
      const { result, errors, payload } = response
      // console.log(result)
      if (result) {
        // console.log('payload--------------------', payload.cards)
        setCardsRender(payload.cards)

      } else {
        setError(errors[0].message)
        setMessageOpen(true)
      }
    } catch (err) {
      console.warn(err)
      setError(err)
      setMessageOpen(true)
    }
    manageCards(cardsRender)
    // console.log('user from AuthCont ------------------------------------', user.name)
    // console.log('cards ------------------------------------', cards)
  }

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    setCurrentDate(date + '/' + month + '/' + year);
    submitGet()
  }, [counter]);


  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <LoggedInHeader user={user} />

        <Title title={'BENVEnuto'} />
        <Title title={`${user.name + ' ' + user.surname} `} />
        < EvilIcons name="user" size={200} color="black" />
        <Title title={`${currentDate}`} />

        <View style={styles.cardsSummaryContainer}>
          <View style={styles.infoBox}>
            <View style={styles.infoBoxNumber}>
              <Text style={styles.infoBoxNumberT}>
                {
                  cardsRender !== []
                    ? <Text>{cardsRender.length}</Text>
                    : <Text>No</Text>
                }
                {/* {
                  JSON.parse(cards).length !== 0
                    ? console.log("JSON:",JSON.parse(cards).length)
                    : 0
                } */}
              </Text>
            </View>
            <View style={styles.infoBoxText}>
              <Text style={styles.infoBoxTextT}>Carte in  lista</Text>
            </View>
          </View>
          <View style={styles.infoBox}>
            <View style={styles.infoBoxNumber}>
              <Text style={styles.infoBoxNumberT}>{counter}</Text>
            </View>
            <View style={styles.infoBoxText}>
              <Text style={styles.infoBoxTextT}>Carte scambiate</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardsSummaryContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    // borderWidth: 2,
    // borderColor: 'orange',
  },
  infoBox: {
    width: 150,
    height: 150,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    backgroundColor: 'orange',
    alignItems: 'center',
  },
  infoBoxNumber: {
    flex: 5,
    padding: 'auto',
  },
  infoBoxNumberT: {
    fontSize: 60,
    color: 'white',
    fontWeight: 'bold'
  },
  infoBoxText: {
    flex: 5,
    // borderWidth: 1,
    // borderColor: 'black',
  },
  infoBoxTextT: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})