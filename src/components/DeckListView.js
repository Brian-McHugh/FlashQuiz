/*
Default View
- Shows the title of each deck
- Displays the number of cards in each deck
*/

import React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
//import  { helperFunc } from '../utils/helpers';

export default class DeckListView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Deck Name</Text>
        <Text style={styles.text}>5 cards</Text>
        <Text style={styles.text}>Deck Another Name</Text>
        <Text style={styles.text}>12 cards</Text>
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
