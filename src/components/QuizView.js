/*
Quiz of cards in Deck
- Shows the card question
- Button (or text that can be clicked) to reveal the answer
- Button to show the next card in the deck
*/

import React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
//import  { helperFunc } from '../utils/helpers';

export default class QuizView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Question</Text>
        <Button title="Show Answer" />
        <Button title="Next Question"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    color: 'black'
  }
});
