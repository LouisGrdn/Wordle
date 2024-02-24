import React from "react";
import PropTypes from "prop-types";
import {View, Text, StyleSheet} from "react-native";

export default function GuessCard({letter = "", color = "white"}) {
    return (
        <View style={[styles.container, {backgroundColor:color}]}>
            <Text>{letter}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        paddingHorizontal: 25,
        paddingVertical: 20,
        height: 65,
        width: 65,
        borderRadius: 5,
        alignItems: 'center',
    }
})

GuessCard.propTypes = {
    letter: PropTypes.string,
}