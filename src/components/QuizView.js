/*
Quiz of cards in Deck
- Shows the card question
- Button (or text that can be clicked) to reveal the answer
- Button to show the next card in the deck
*/

import React from 'react';
import { Button, View, Text } from 'react-native';
//import  { helperFunc } from '../utils/helpers';

export default class QuizView extends React.Component {
  render() {
    return (
      <View>
        <Text>Question</Text>
        <Button title="Show Answer" />
        <Button title="Next Question"/>
      </View>
    )
  }
}
