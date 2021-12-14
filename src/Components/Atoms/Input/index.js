import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

export default function Input(props) {
    return (
        <View style={styles.wrapper}>
            <TextInput
                style={styles.input}
                secureTextEntry={props.password}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        margin:10,
        width:'60%'
    }, input: {
        // backgroundColor: 'white',
        fontSize:16,
        padding: 2,
        color: 'black',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width:'100%'
    }
})
