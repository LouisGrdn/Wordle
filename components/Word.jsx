import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";
import GuessCard from "./GuessCard";

export default function Word({word = '', validate = false, answer = ""}){

    function getColor(index) {
        if(!validate) {
            return 'white';
        }
        else {
            if(answer.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(word[index].toUpperCase())){
                if(answer[index].toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") == word[index].toUpperCase()){
                    return 'green';
                }
                return 'orange';
            }
            return 'red';
        }
    }
    const numbers = Array.from({ length: answer.length }, (_, index) => index);
    
    return (
        <View style={styles.container}>
            {numbers.map((char, index) => (
                <GuessCard key={index} letter={word[index] ? word[index] : ''} color={getColor(index)}/>
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
    validate: PropTypes.bool,
    answer: PropTypes.string,
}