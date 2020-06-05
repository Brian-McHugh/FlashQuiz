/*
Individual Deck
- Shows the title of the deck
- Displays the number of cards in the deck
- Button to add new QA to deck
- (Stretch) Button to start quiz with deck
*/

import React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
//import  { helperFunc } from '../utils/helpers';

export default class DeckView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Deck Name</Text>
        <Text style={styles.text}>15 cards</Text>

        <Button title="Add Card" />
        <Button title="Start Quiz" />
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
