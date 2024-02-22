import React from "react";
import {Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faDeleteLeft, faCheck } from '@fortawesome/free-solid-svg-icons'

export default function Keyboard({onChange = null, onValidate = null, words = [], turn = 0}){
    const alphabet = [
        'A', 'B', 'C', 'D',
        'E', 'F', 'G', 'H',
        'I', 'J', 'K', 'L',
        'M', 'N', 'O', 'P',
        'Q', 'R', 'S', 'T',
        'U', 'V', 'W', 'X',
        'Y', 'Z'];

    function onPress(id, letter) {
      onChange(words => {
        return words.map(word => {
          if(word.id === id){
            return {...word, value: word.value+letter};
          } else {
            return word;
          }
        })
        })
    };

    function onDelete(id) {
      onChange(words => {
        return words.map(word => {
          if(word.id === id){
            console.log(word.value.slice(0, word.value.count-1));
            return {...word, value: word.value.slice(0, -1)};
          } else {
            return word;
          }
        })
        })
    }

    return (
        <View style={styles.container}>
          {alphabet.map((letter, index) => (
            <TouchableOpacity onPress={() => onPress(turn, letter)} style={styles.item}>
                <Text style={styles.letter}>{letter}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity onPress={() => onDelete(turn)} style={styles.item}>
              <FontAwesomeIcon style={styles.letter} icon={faDeleteLeft} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onValidate(turn)} style={styles.item}>
              <FontAwesomeIcon style={styles.letter} icon={faCheck} />
          </TouchableOpacity>
        </View>
    );
}

Keyboard.propTypes = {
  onChange: PropTypes.func,
  onValidate: PropTypes.func,
  words: PropTypes.array,
  turn: PropTypes.number,
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
    item: {
      borderWidth: 1,
      height: 50,
      width: 50,
      borderRadius: 10,
      justifyContent: 'center',
    },
    letter: {
        alignSelf: 'center'
    }
  });