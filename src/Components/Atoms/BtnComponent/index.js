import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'

export default function BtnComponent(props) {
    return (
        <TouchableHighlight style={styles.wrapper} onPress={props.onPress}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        alignSelf: 'center',
    },
    text: {
        fontSize: 18,
        color: 'white',
        backgroundColor: 'blue',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5
    }
})
