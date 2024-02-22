import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Word from './components/Word';
import Keyboard from './components/Keyboard'

export default function App() {
  const answer = "Test";
  const [turn, setTurn] = useState(0);
  const [words, setWords] = useState(() => {
    const tab = [];
    for(let i = 0; i < 6; i++){
      tab.push({id: i, value: ''})
    }
    return tab;
  });

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 50, fontWeight: 'bold', paddingBottom: 30}}>Wordle</Text>
      <View style={{flex: 1}}>
      {words.map((word, index) => (
        <Word key={index} word={word.value} validate={index < turn} answer={answer}/>
      ))}
      </View>
      <View style={{flex: 1}}><Keyboard onChange={setWords} onValidate={() => {if(words[turn].value.length == 4) setTurn(turn + 1);}} words={words} turn={turn}/></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    marginTop: 80,
    flexDirection: 'column',
    alignItems: 'center'
  }
})
