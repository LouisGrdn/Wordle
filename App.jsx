import React from 'react';
import { View, StyleSheet } from 'react-native';
import Word from './components/Word';

export default function App() {
  return (
    <View style={styles.container}>
      <Word word='test'/>
      <Word word='test'/>
      <Word word='test'/>
      <Word word='test'/>
      <Word word='test'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flexDirection: 'column',
    alignItems: 'center'
  }
})
