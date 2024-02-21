import React from "react";
import {Text, View, StyleSheet} from 'react-native';
import PropTypes from "prop-types";
import Letter from "./Letter";

export default function Keyboard({onClick = null, index = 0}){
    const alphabet = [
        'A', 'B', 'C', 'D',
        'E', 'F', 'G', 'H',
        'I', 'J', 'K', 'L',
        'M', 'N', 'O', 'P',
        'Q', 'R', 'S', 'T',
        'U', 'V', 'W', 'X',
        'Y', 'Z'];

    return (
        <View style={styles.container}>
      {alphabet.map((letter, index) => (
        <Letter key={index} name={letter} onPress={onClick}/>
      ))}
    </View>
    );
}

Keyboard.propTypes = {
  onPress: PropTypes.func,
  index: PropTypes.number,
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignContent: 'center',
      padding: 10,
    },
    letter: {
      fontSize: 20,
      margin: 5,
    },
  });