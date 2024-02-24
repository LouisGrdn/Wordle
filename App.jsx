import React, { useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, StatusBar  } from 'react-native';
import Word from './components/Word';
import Keyboard from './components/Keyboard'
import EndView from "./components/EndView"

const allWords = require("./words.json");
const rand = Math.floor(Math.random() * allWords['mots'].length);
let answer = allWords['mots'][Math.floor(Math.random() * allWords['mots'].length)];

export default function App() {
  const [turn, setTurn] = useState(0);
  const [win, setWin] = useState(false);
  const [words, setWords] = useState(() => {
    const tab = [];
    for(let i = 0; i < answer.length+1; i++){
      tab.push({id: i, value: ''})
    }
    return tab;
  });

  function onValidate() {
    const word = words[turn];
    if(word.value.toUpperCase() === answer.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")) setWin(true);
    else if(word.value.length == answer.length) setTurn(turn + 1);
  }
  function onPress() {
    setTurn(0);
    setWin(false);
    setWords(() => {
      const tab = [];
      for(let i = 0; i < answer.length+1; i++){
        tab.push({id: i, value: ''})
      }
      return tab;
    });
    answer = allWords['mots'][Math.floor(Math.random() * allWords['mots'].length)];
  };
  // End
  if(win || turn > answer.length) {
    return (
      <EndView answer={answer} win={win} onPress={onPress}/>
    )
  // Game
  } else {
    return (
        <View style={styles.container}>
          <StatusBar backgroundColor='black'/>
          <Text style={{fontSize: 50, fontWeight: 'bold', paddingBottom: 30, paddingTop: 80}}>Wordle</Text>
          <View style={{flex: 1}}>
          {words.map((word, index) => (
            <Word key={index} word={word.value} validate={index < turn} answer={answer}/>
          ))}
          </View>
          <View style={{flex: 1}}><Keyboard onChange={setWords} onValidate={() => onValidate()} words={words} turn={turn} answer={answer}/></View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#83c5be'
  }
})
