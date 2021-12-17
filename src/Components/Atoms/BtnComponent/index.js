import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'

export default function BtnComponent(props) {
    return (
        <View style={styles.wrapper} >
            <TouchableHighlight style={styles.touch} onPress={props.onPress}>
                <Text style={styles.text}>{props.text}</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        paddingVertical:30,
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    touch:{
        backgroundColor: '#ee8f38',
        width: '70%',
        borderRadius: 20
    },
    text: {
        fontSize: 18,
        color: 'white',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        alignSelf:'center'
    }
})
