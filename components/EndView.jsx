import React from "react";
import PropTypes from "prop-types";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default function EndView({answer = "", win = false, onPress = null}) {
    return(
        <View style={styles.container}>
            <Text style={styles.text}> {win ? "Bravo, le mot était bien" : "Dommage, le mot était" }
                <Text style={{fontWeight: 'bold'}}> {answer[0].toUpperCase()+answer.slice(1)}</Text>
            </Text>
            <TouchableOpacity onPress={() => onPress()}>
            <Text style={styles.button}>Recommencer</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,  
        justifyContent: 'center', 
        alignItems: 'center'
    },
    text: {
        paddingBottom: 25, 
        fontSize: 20
    },
    button: {
        fontSize: 20, 
        borderWidth: 2, 
        padding: 10, 
        borderRadius: 10
    }
})

EndView.propTypes = {
    answer: PropTypes.string,
    win: PropTypes.bool,
    onPress: PropTypes.func,
}

