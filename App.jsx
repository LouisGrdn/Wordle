import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Word from './components/Word';
import Keyboard from './components/Keyboard'

export default function App() {
  const [words, setWords] = useState(() => {
    const tab = [];
    for(let i = 0; i < 6; i++){
      tab.push({id: {i}, value: ''})
    }
    return tab;
  });

  function onPress(id, letter) {
    setWords(words => {
      return words.map(word => {
        if(word.id === id){
          return {...word, value: word.value+letter};
        } else {
          return word;
        }
      })
      })
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
      {words.map((word, index) => (
        <Word key={index} word={word.value}/>
      ))}
      </View>
      <View style={{flex: 1}}><Keyboard onClick={onPress}/></View>
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
