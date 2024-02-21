import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";
import LetterCard from "./LetterCard";

export default function Word({word = ''}){
    return (
        <View style={styles.container}>
            
            {word.split("").map((char, index) => (
                <LetterCard letter={char}/>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    }
})

Word.propTypes = {
    word: PropTypes.string,
}