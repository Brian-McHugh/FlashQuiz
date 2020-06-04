/*
Add a new question and its answer
- Request to add the question and its answer
- Form for adding the name of the question
- Form for adding the answer to the question
- Button to submit the question and its answer
*/

import React from 'react';
import { Button, View, Text, TextInput } from 'react-native';
//import  { helperFunc } from '../utils/helpers';

export default class AddQA extends React.Component {
  render() {
    return (
      <View>
        <Text>Add a question and its answer</Text>
        <TextInput />
        <TextInput />
        <Button title="Submit"/>
      </View>
    )
  }
}
