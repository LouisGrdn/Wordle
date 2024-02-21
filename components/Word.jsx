import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";
import GuessCard from "./GuessCard";

export default function Word({word = ''}){

    const numbers = Array.from({ length: 4 }, (_, index) => index);
    return (
        <View style={styles.container}>
            {numbers.map((char, index) => (
                <GuessCard key={index} letter={word[index] ? word[index] : ''}/>
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