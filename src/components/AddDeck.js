/*
Add a new deck
- Request to add the name of the deck
- Form for adding the name of the new deck
- Button to submit the new deck
*/

import React from 'react';
import { Button, View, StyleSheet, Text, TextInput } from 'react-native';
//import  { helperFunc } from '../utils/helpers';

export default class AddDeck extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Enter Name of New Deck</Text>
        <TextInput />
        <Button title="Submit"/>
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
