import React from "react";
import PropTypes from "prop-types";
import {View, Text, StyleSheet} from "react-native";

export default function GuessCard({letter = ""}) {
    return (
        <View style={styles.container}>
            <Text>{letter}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        paddingHorizontal: 25,
        paddingVertical: 20,
        height: 60,
        width: 60,
        borderRadius: 5,
        alignItems: 'center',
    }
})

GuessCard.propTypes = {
    letter: PropTypes.string,
}