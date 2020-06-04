/*
Individual Deck
- Shows the title of the deck
- Displays the number of cards in the deck
- Button to add new QA to deck
- (Stretch) Button to start quiz with deck
*/

import React from 'react';
import { Button, View, Text } from 'react-native';
//import  { helperFunc } from '../utils/helpers';

export default class DeckView extends React.Component {
  render() {
    return (
      <View>
        <Text>Deck Name</Text>
        <Text>15 cards</Text>

        <Button title="Add Card" />
        <Button title="Start Quiz" />
      </View>
    )
  }
}
