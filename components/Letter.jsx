import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function Letter({name = "", onPress = null}){
    return (
        <TouchableOpacity onPress={() => onPress(0, name)} style={styles.container}>
            <Text style={styles.letter}>{name}</Text>
        </TouchableOpacity>
    )
}

Letter.propTypes = {
    name: PropTypes.string,
    onPress: PropTypes.func,
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        height: 50,
        width: 50,
        borderRadius: 10,
        justifyContent: 'center'
    },
    letter: {
        textAlign: 'center',
    }
})