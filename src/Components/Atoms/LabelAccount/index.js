import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function LabelAccount(props) {
    return (
        <View>
            <Text>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
