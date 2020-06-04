/*
Default View
- Shows the title of each deck
- Displays the number of cards in each deck
*/

import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
//import  { helperFunc } from '../utils/helpers';

export default class DeckListView extends React.Component {
  render() {
    return (
      <View>
        <Text>Deck Name</Text>
        <Text>5 cards</Text>
        <Text>Deck Another Name</Text>
        <Text>12 cards</Text>
      </View>
    )
  }
}
