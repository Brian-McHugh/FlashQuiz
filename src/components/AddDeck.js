/*
Add a new deck
- Request to add the name of the deck
- Form for adding the name of the new deck
- Button to submit the new deck
*/

import React from 'react';
import { Button, View, Text, TextInput } from 'react-native';
//import  { helperFunc } from '../utils/helpers';

export default class AddDeck extends React.Component {
  render() {
    return (
      <View>
        <Text>Enter Name of New Deck</Text>
        <TextInput />
        <Button title="Submit"/>
      </View>
    )
  }
}
