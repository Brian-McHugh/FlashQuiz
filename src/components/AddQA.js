/*
Add a new question and its answer
- Request to add the question and its answer
- Form for adding the name of the question
- Form for adding the answer to the question
- Button to submit the question and its answer
*/

import React from 'react';
import { Button, View, StyleSheet, Text, TextInput } from 'react-native';
//import  { helperFunc } from '../utils/helpers';

export default class AddQA extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Add a question and its answer</Text>
        <TextInput />
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
