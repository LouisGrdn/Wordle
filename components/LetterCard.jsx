import React from "react";
import PropTypes from "prop-types";
import {View, Text, StyleSheet} from "react-native";

export default function LetterCard({letter = ""}) {
    return (
        <View style={styles.container}>
            <Text>{letter}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        padding: 25,
        borderRadius: 5,
        alignItems: 'center',
    }
})

LetterCard.propTypes = {
    letter: PropTypes.string,
}