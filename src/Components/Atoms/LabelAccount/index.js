import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function LabelAccount(props) {
    return (
        <View>
            <Text style={styles.Txt}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Txt:{
        fontSize:20,
        fontWeight:'bold'
    }
})
